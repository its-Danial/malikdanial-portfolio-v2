type LogoProps = {
  height?: number;
  width?: number;
};

export default function Logo({ height, width }: LogoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className="rounded-full"
      src="/static/images/white-logo.png"
      width={width ?? 65}
      height={height ?? 65}
      alt="Malik Danial's logo"
    />
  );
}
