import { createContext } from "react";

interface defaultstate {
    theme: string
}

const defaultState: defaultstate = {
    theme: "earth"
}

export const changeTheme = (toTheme: string) => {
    defaultState.theme = toTheme;
}

export const selectedTheme = createContext(defaultState)