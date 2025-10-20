import { createSlice, nanoid } from "@reduxjs/toolkit";

const createCharacter = (name: string, specialty: string, hp:number=100, stamina:number=100, mana:number=100): object => ({
    id: nanoid(),
    name,
    specialty,
    hp,
    stamina,
    mana
})

const initialState: object[] = [
    createCharacter("Joe Schmo", "manual labor", undefined, 200, 50),
    createCharacter("Karoline Levite", "herbalist")
]

export const charactersSlice = createSlice({
    name: "characters",
    initialState,
    reducers: {
        newCharacter: (state, action) => {
            const task = createCharacter(action.payload.name, action.payload.specialty, action.payload.hp, action.payload.stamina, action.payload.mana)
            state.push(task)
        }
    }
})