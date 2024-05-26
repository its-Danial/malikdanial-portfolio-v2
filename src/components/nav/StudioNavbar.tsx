import { FC } from "react";
import type { NavbarProps } from "sanity";
import { Card, Stack, Text, Flex } from "@sanity/ui";
import { HiArrowSmLeft } from "react-icons/hi";
import Link from "next/link";

const StudioNavbar: FC<NavbarProps> = (props) => {
  return (
    <Stack>
      <Card padding={3}>
        <Flex align="center">
          <Link href="/public">
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
};
export default StudioNavbar;
