import cn from "classnames";

import { HeaderProps } from "./Header.props";

import { Container, Navbar, Button } from "@/components";

import Logo from "@icons/logo.svg";

import styles from "./Header.module.scss";

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  return (
    <header className={cn(styles.header, className)} {...props}>
      <Container className={cn(styles.container)}>
        <Logo />

        <Navbar />

        <Button shadow="light">Связаться</Button>
      </Container>
    </header>
  );
};
