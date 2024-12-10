import classNames from "classnames";
import styles from "./index.module.scss";

interface IDemo {
  name: string;
}
export const Demo: React.FC<IDemo> = (props) => {
  const { name } = props;
  return <div className={classNames(styles.demo)}>{name}</div>;
};
