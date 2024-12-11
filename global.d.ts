declare module "*.less";

interface IResponse<T> {
  code: number;
  msg: string;
  data: T;
}
declare module "@chakra-ui/icons" {
  import * as React from "react";
  import { IconProps } from "@chakra-ui/react";

  export const CalendarIcon: React.FC<IconProps>;
  export const ChevronLeftIcon: React.FC<IconProps>;
  export const ChevronRightIcon: React.FC<IconProps>;
  export const ChevronDownIcon: React.FC<IconProps>;
}
