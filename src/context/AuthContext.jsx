import { createContext, useState } from "react";


export const AuthContext = createContext()

export function AuthContextProvider({children}) {
    const tokenLocal = localStorage.getItem("token")
    const memberLocal = localStorage.getItem("member")
    const memberObj = JSON.parse(memberLocal)
    const nameLocal = localStorage.getItem("name")
    const nameObj = JSON.parse(nameLocal)
    const [token, setToken] = useState(tokenLocal)
    const [member, setMember] = useState(memberObj)
    const [user, setUser] = useState("")
    const [name, setName] = useState(nameObj)
    const [infoAssinatura, setInfoAssinatura] = useState({});

    console.log(name)
      
      
    function tokenStorage(token) {
		setToken(token);
		localStorage.setItem("token", token);
	}

    function memberStorage(member) {
		setMember(member);
        const memberString = JSON.stringify(member)
		localStorage.setItem("member", memberString)
	}

    function nameStorage(name){
        setName(name)
        const nameString = JSON.stringify(name)
        localStorage.setItem("name", nameString)
    }

    return (
        <AuthContext.Provider
            value={{token, setToken, tokenStorage, memberStorage, name, nameStorage, setMember, member,  user, setUser, infoAssinatura, setInfoAssinatura}}
        >
            {children}
        </AuthContext.Provider>
    )
}