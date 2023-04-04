import React, { useContext, useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import { v4 as uuidv4 } from 'uuid';

const defaultValue: any = {
    sessionIdentifier: null,
}
export const SessionContext = React.createContext(defaultValue);

export function SessionProvider({ children }: any) {
    const [sessionIdentifier, setSessionIdentifier] = useLocalStorage<string | null>('session', null);

    useEffect(() => {
        if (!sessionIdentifier) {
            setSessionIdentifier(uuidv4());
        }
    }, [sessionIdentifier]);

    return (
        <SessionContext.Provider value={{sessionIdentifier}}>
            {children}
        </SessionContext.Provider>
    )
}