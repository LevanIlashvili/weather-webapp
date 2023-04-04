import React from "react";
import { Client } from "../utils/client";

const defaultValue: any = {
    client: new Client(),
}
export const ClientContext = React.createContext<{ client : Client}>(defaultValue);

export function ClientProvider({ children }: any) {
    const client = new Client();
    return (
        <ClientContext.Provider value={{client: client}}>
            {children}
        </ClientContext.Provider>
    )
}