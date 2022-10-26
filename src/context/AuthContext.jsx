import { createContext, useState } from "react";

export const AuthContext = createContext()

export function AuthContextProvider({children}) {
    const [usuario, setUsuario] = useState({})
    return (
        <AuthContext.Provider
            value={{usuario, setUsuario}}
        >
            {children}
        </AuthContext.Provider>
    )
}