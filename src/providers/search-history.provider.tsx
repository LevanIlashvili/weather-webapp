import React, { useContext, useEffect, useState } from "react";
import { IForecast } from "../types";
import { Client } from "../utils/client";
import { ClientContext } from "./client.provider";
import { SessionContext } from "./session.provider";

const defaultValue: any = {
    history: [],
    refreshHistory: () => {},
    push: () => {},
}

export interface IHistoryContext {
    history: IForecast[];
    refreshHistory: () => void;
    push: (item: IForecast) => void;
}
export const HistoryContext = React.createContext<IHistoryContext>(defaultValue);

export function HistoryProvider({ children }: any) {
    const [history, setHistory] = useState<IForecast[]>([]);
    const { client } = useContext(ClientContext);
    const { sessionIdentifier } = useContext(SessionContext);
    
    const loadData = () => {
        client.getHistory(sessionIdentifier).then((history: IForecast[]) => {
            setHistory(history);
        });
    }

    const push = (item: IForecast) => {
        const localHistory = [item, ...history];
        setHistory(localHistory);
    }

    useEffect(() => {
        loadData();
    }, []);
    
    useEffect(() => {
        const intervalId = setInterval(() => { 
            loadData();
          }, 5000);
          return () => clearInterval(intervalId);
    }, []);
    
    return (
        <HistoryContext.Provider value={{ history, push, refreshHistory: loadData }}>
            {children}
        </HistoryContext.Provider>
    )
}