import cn from "classnames";

import { ButtonProps } from "./Button.props";

import styles from "./Button.module.scss";

export const Button = ({
  className,
  children,
  size = "small",
  shadow = "dark",
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles["button--small"]]: size === "small",
        [styles["button--middle"]]: size === "middle",
        [styles["button--dark"]]: shadow === "dark",
        [styles["button--light"]]: shadow === "light",
      })}
      {...props}
    >
      <span className={styles.button__inner}>{children}</span>
    </button>
  );
};
