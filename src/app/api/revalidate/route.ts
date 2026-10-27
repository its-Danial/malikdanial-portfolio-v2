import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

// Target for a Sanity GROQ webhook (projection `{_type}`), signed with
// SANITY_REVALIDATE_SECRET. Busts the cache tag matching the document type.
export async function POST(req: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) {
    return new NextResponse("Missing SANITY_REVALIDATE_SECRET", {
      status: 500,
    });
  }

  try {
    const { isValidSignature, body } = await parseBody<{ _type?: string }>(
      req,
      secret,
    );

    if (!isValidSignature) {
      return new NextResponse("Invalid signature", { status: 401 });
    }

    if (!body?._type) {
      return new NextResponse("Bad request", { status: 400 });
    }

    revalidateTag(body._type);
    return NextResponse.json({ revalidated: body._type, now: Date.now() });
  } catch (error) {
    console.error(error);
    return new NextResponse("Error revalidating", { status: 500 });
  }
}
