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
    setShowing(true);
  }
  return (
    <div>
      <button onClick={clickAction} className={styles.button}>Get all Characters</button>
      {showing && (
        <ul className={styles.characterList}>
          <h3>Cast of Characters</h3>
          {characters.map((char) => (
            <li key={char.id}>
              {char.name} — {char.specialty}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
