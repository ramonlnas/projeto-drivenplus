import { createContext, useState } from "react";

export const AuthContext = createContext()

export function AuthContextProvider({children}) {
    const tokenLocal = localStorage.getItem("token")
    const [token, setToken] = useState(tokenLocal)
    const [user, setUser] = useState("")
    const [infoAssinatura, setInfoAssinatura] = useState({});

    function tokenStorage(token) {
		setToken(token);
		localStorage.setItem("token", token);
	}

    return (
        <AuthContext.Provider
            value={{token, setToken, tokenStorage, user, setUser, infoAssinatura, setInfoAssinatura}}
        >
            {children}
        </AuthContext.Provider>
    )
}