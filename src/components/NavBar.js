import styles from "../css/components/navbar.module.css";

import { Info, SquaresFour, Sword } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

import { useState } from "react";

function NavBar() {
  const [selectedLink, setselectedLink] = useState(1);

  return (
    <nav className={styles.nav}>
      <Link
        to="/attacks"
        onClick={() => {
          setselectedLink(0);
        }}
        className={`${styles.card} ${
          selectedLink === 0 ? styles.selected : ""
        }`}
      >
        <Sword size={32} color="#000" />
        <span
          className={styles.title}
        >
          Attacks
        </span>
      </Link>
      <Link
        to="/"
        onClick={() => {
          setselectedLink(1);
        }}
        className={`${styles.card} ${
          selectedLink === 1 ? styles.selected : ""
        }`}
      >
        <SquaresFour size={32} color="#000" />
        <span
          className={styles.title}
        >
          Cards
        </span>
      </Link>
      <Link
        to="/info"
        onClick={() => {
          setselectedLink(2);
        }}
        className={`${styles.card} ${
          selectedLink === 2 ? styles.selected : ""
        }`}
      >
        <Info size={32} color="#000" />
        <span
          className={styles.title}
        >
          Info
        </span>
      </Link>
    </nav>
  );
}

export default NavBar;
