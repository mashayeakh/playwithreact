import React, { useState } from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({ children }) => {

    //need to update user
    const [user, setUser] = useState(null);

    return (
        // <div>UserContextProvider</div>
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider