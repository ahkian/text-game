"use client"

import styles from "./main.module.css"
import { useSelector } from "react-redux";
import { useState } from "react";
import type { RootState } from "@/lib/store";
import type { Character } from "@/lib/features/characters/characterSlice";


export default function Home() {
  const [showing, setShowing] = useState(false)
  const characters = useSelector((state: RootState) => state.characters)
  const clickAction:React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setShowing(!showing);
  }
  return (
    <div>
      <button onClick={clickAction} className={styles.button}>Show all Character Info</button>
      {showing && (
        <table className={styles.table}>
          <tr className={styles.table}>
            <td className={styles.table}>ID</td>
            <td className={styles.table}>Name</td>
            <td className={styles.table}>Specialty</td>
          </tr>
          {characters.map((char) => (
            <tr className={styles.table} key={char.id}>
              <td className={styles.table}>{char.id}</td> <td className={styles.table}>{char.name}</td> <td className={styles.table}>{char.specialty}</td>
            </tr>
          ))}
        </table>
      )}
    </div>
  );
}
