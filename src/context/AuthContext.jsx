import { createContext, useState } from "react";

export const AuthContext = createContext()

export function AuthContextProvider({children}) {
    const tokenLocal = localStorage.getItem("token")
    const [token, setToken] = useState(tokenLocal)

    function tokenStorage(token) {
		setToken(token);
		localStorage.setItem("token", token);
	}

    return (
        <AuthContext.Provider
            value={{token, setToken, tokenStorage}}
        >
            {children}
        </AuthContext.Provider>
    )
}