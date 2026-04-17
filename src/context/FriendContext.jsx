import React, { Children, createContext, useState } from 'react';

export const FriendContext = createContext();

const FriendContextProvider = ({children}) => {

    const [Activity, setActivity] = useState([]);

    const data = {
        Activity, setActivity
    }
    return <FriendContext.Provider value={data}>
        {children}
    </FriendContext.Provider>
};

export default FriendContextProvider;