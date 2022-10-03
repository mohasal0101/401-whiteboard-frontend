import { createContext, useState, useEffect, useReducer, useContext } from 'react';
import axios from 'axios';
import { UserReducer, userActions, initialUserState } from './UserReducer';

const UserContext = createContext({})

export const useAuth = () => useContext(UserContext)

export const UserProvider = ({ children }) => {
    const [userState, dispatch] = useReducer(UserReducer, initialUserState)
    const [loading, setLoading] = useState(true)

    const login = async (loggedUser) => {
        dispatch({
            type: userActions.login,
            payload: loggedUser
        })
    }
    const logout = async () => {
        try {
            await axios.delete(`/silent`)
                .catch(e => console.error(e))
                .finally(() => dispatch({ type: userActions.logout }))
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        async function getUser() {
            try {
                await axios.post(`/silent`).then(res => {
                    dispatch({
                        type: userActions.login,
                        payload: res.data
                    })
                })
                    .catch(e => alert("Sorry your session ended!"))
                    .finally(() => setLoading(false))
            } catch (e) {
                console.log(e)
            }
        }
        getUser()
    }, [])
    return (
        <UserContext.Provider
            value={{
                userState, dispatch,
                loading, setLoading,
                login, logout
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export default UserContext