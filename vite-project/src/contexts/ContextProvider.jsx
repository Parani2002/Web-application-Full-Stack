import { createContext, useContext, useState } from "react";

const StateContext = createContext({
    user:null,
    token:null,
    setUser: () => {},
    setToken: () => {}
})

export const ContextProvider = ({children}) => { //localStorage.getItem('ACCESS TOKEN')
    const[user, setUser] = useState({
        name:'Parani'
    })
    const [token, _setToken] = useState(null)

    const setToken = (token) => {
        _setToken(token)
        if (token) {
            localStorage.setItem('ACCESS TOKEN', token)
            
        }else{
            localStorage.removeItem('ACCESS TOKEN')
        }
    }
    return(
        <StateContext.Provider value={{
            user,
            token,
            setUser,
            setToken

        }}>
            {children}

        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)