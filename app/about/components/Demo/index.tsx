"use client";

import classNames from "classnames";
import { useCommonStore } from "@/app/store";
import styles from "./index.module.scss";

interface IDemo {
  name: string;
}
export const Demo: React.FC<IDemo> = (props) => {
  const { name } = props;
  const { name: title } = useCommonStore();
  return (
    <div className={classNames(styles.demo)}>
      {name} {title}
    </div>
  );
};
