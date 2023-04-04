import { Typography } from "antd";
import { useContext, useEffect, useState } from "react";
import { SearchHistory } from "../components/search-history";
import { ClientContext } from "../providers/client.provider";
import { IForecast } from "../types";
const { Title } = Typography;

export function GlobalSearch(){ 
    const [history, setHistory] = useState<IForecast[]>([]);
    const { client } = useContext(ClientContext);
    
    useEffect(() => {
        client.getHistory().then((data) => setHistory(data));
    }, [client]);

    return <>
        <div className="hero">
            <Title>Global Search History</Title>
            <p>See what others are looking at</p>
        </div>
        <SearchHistory title="Global Search History" history={history}/>
    </>
}