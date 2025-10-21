import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/lib/store";

export interface Character {
    id:string,
    name:string,
    specialty:string,
    hp:number,
    stamina:number,
    mana:number,
}

const createCharacter = (name: string, specialty: string, hp:number=100, stamina:number=100, mana:number=100): Character => ({
    id: nanoid(),
    name,
    specialty,
    hp,
    stamina,
    mana
})

const initialState: Character[] = [
    createCharacter("Joe Schmo", "manual labor", undefined, 200, 50),
    createCharacter("Karoline Levite", "herbalist")
]

export const charactersSlice = createSlice({
    name: "characters",
    initialState,
    reducers: {
        newCharacter: (state, action:PayloadAction<{
            name: string,
            specialty: string,
            hp?: number,
            stamina?: number,
            mana?: number
        }>) => {
            const character = createCharacter(action.payload.name, action.payload.specialty, action.payload.hp, action.payload.stamina, action.payload.mana)
            state.push(character)
        },
        editCharacter: (
            state,
            action: PayloadAction<{
                id:string;
                updates: Partial<Omit<Character, "id">>
            }>
        ) => {
            const { id, updates } = action.payload;
            const selectedCharacter = state.find((c) => c.id === id);
            if (selectedCharacter){
                Object.assign(selectedCharacter, updates)
            }
        }
    }
})

export const { newCharacter } = charactersSlice.actions
export default charactersSlice.reducer