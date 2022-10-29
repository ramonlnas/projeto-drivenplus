import { createContext, useState } from "react";

export const AuthContext = createContext()

export function AuthContextProvider({children}) {
    const tokenLocal = localStorage.getItem("token")
    const memberLocal = localStorage.getItem("member")
    const [token, setToken] = useState(tokenLocal)
    const [member, setMember] = useState(memberLocal)
    const [user, setUser] = useState("")
    const [infoAssinatura, setInfoAssinatura] = useState({});

    function tokenStorage(token) {
		setToken(token);
		localStorage.setItem("token", token);
	}

    function memberStorage(member) {
		setMember(member);
		localStorage.setItem("member", member);
	}


    return (
        <AuthContext.Provider
            value={{token, setToken, tokenStorage, memberStorage, setMember, member,  user, setUser, infoAssinatura, setInfoAssinatura}}
        >
            {children}
        </AuthContext.Provider>
    )
}