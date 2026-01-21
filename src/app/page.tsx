"use client"

import styles from "./main.module.css"
import { useSelector } from "react-redux";
import { useState } from "react";
import type { RootState } from "@/lib/store";
import type { Character } from "@/lib/features/characters/characterSlice";


export default function Home() {
  const [showing, setShowing] = useState(false)
  const [name, setName] =useState("")
  const [specialty, setSpecialty] = useState("")
  const characters = useSelector((state: RootState) => state.characters)
  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  const handleSpecialty = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSpecialty(e.target.value)
  }
  const clickAction:React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setShowing(!showing);
  }
  return (
    <div>
      <button onClick={clickAction} className={styles.button}>Show all Character Info</button>
      {showing && (
        <table className={styles.table}>
          <thead>
            <tr className={styles.table}>
              <td className={styles.table}>ID</td>
              <td className={styles.table}>Name</td>
              <td className={styles.table}>Specialty</td>
            </tr>
          </thead>
          <tbody>
            {characters.map((char) => (
              <tr className={styles.table} key={char.id}>
                <td className={styles.table}>{char.id}</td><td className={styles.table}>{char.name}</td><td className={styles.table}>{char.specialty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div>
        <h2 className={styles.characterForm}>Create your character</h2><br></br>
        <form>
          <div className={styles.characterForm}>
            <label>Name: </label>
            <input onChange={handleName} className={styles.input} name="name" type="text"></input>
          </div><br></br>
          <div className={styles.characterForm}>
            <label>Specialty: </label>
            <select onChange={handleSpecialty} className={styles.input}>
              <option value="fighter">Fighter</option>
              <option value="shooter">Shooter</option>
              <option value="runner">Runner</option>
            </select>
        </div><br></br>
        <div className={styles.characterForm}>
          <button className={styles.submitButton} type="submit">Create Character</button>
        </div>  
        </form>
      </div>
    </div>
  );
}
