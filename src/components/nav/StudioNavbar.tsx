import type { NavbarProps } from "sanity";
import { Card, Stack, Text, Flex } from "@sanity/ui";
import { HiArrowSmLeft } from "react-icons/hi";
import Link from "next/link";

export default function StudioNavbar(props: NavbarProps) {
  return (
    <Stack>
      <Card padding={3}>
        <Flex align="center">
          <Link href="/">
            <Flex align="center" gap={2}>
              <HiArrowSmLeft />
              <Text size={1}>Home</Text>
            </Flex>
          </Link>
        </Flex>
      </Card>
      {props.renderDefault(props)} {/* Render the default navbar */}
    </Stack>
  );
}
