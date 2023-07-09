import cn from "classnames";

import { NavbarProps } from "./Navbar.props";

import styles from "./Navbar.module.scss";

export const Navbar = ({ className, ...props }: NavbarProps): JSX.Element => {
  return (
    <nav className={cn(styles.nav, className)} {...props}>
      <ul className={cn(styles.nav__list)}>
        <li className={cn(styles.nav__item)}>
          <a className={cn(styles.nav__link)} href="sd">
            Услуги
          </a>
        </li>
        <li className={cn(styles.nav__item)}>
          <a className={cn(styles.nav__link)} href="sd">
            О нас
          </a>
        </li>
        <li className={cn(styles.nav__item)}>
          <a className={cn(styles.nav__link)} href="sd">
            Польза продукта
          </a>
        </li>
        <li className={cn(styles.nav__item)}>
          <a className={cn(styles.nav__link)} href="sd">
            Оборудование
          </a>
        </li>
        <li className={cn(styles.nav__item)}>
          <a className={cn(styles.nav__link)} href="sd">
            Этапы работы
          </a>
        </li>
        <li className={cn(styles.nav__item)}>
          <a className={cn(styles.nav__link)} href="sd">
            Отзывы
          </a>
        </li>
      </ul>
    </nav>
  );
};
