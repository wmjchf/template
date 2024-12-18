"use client";

import classNames from "classnames";
import { useCommonStore } from "@/app/context";
import styles from "./index.module.scss";

interface IDemo {
  name: string;
}
export const Demo: React.FC<IDemo> = (props) => {
  const { name } = props;
  const { name: title } = useCommonStore((state) => state);
  return (
    <div className={classNames(styles.demo)}>
      {name} {title}
    </div>
  );
};
