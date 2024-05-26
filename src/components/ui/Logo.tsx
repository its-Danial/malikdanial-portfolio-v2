import { FC } from "react";
import logo from "@/assets/images/white-logo.png";
import Image from "next/image";

type LogoProps = {
  height?: number;
  width?: number;
};

const Logo: FC<LogoProps> = ({ height, width }) => {
  return (
    <Image
      className="rounded-full"
      src={logo}
      width={width ?? 65}
      height={height ?? 65}
      alt="Malik Danial's logo"
    />
  );
};
export default Logo;
