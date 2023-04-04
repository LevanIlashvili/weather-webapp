import { Select, Space, Typography } from "antd";
import { debounce } from "lodash";
import { useContext, useEffect, useState } from "react";
import { ClientContext } from "../providers/client.provider";
import { HistoryContext } from "../providers/search-history.provider";
import { SessionContext } from "../providers/session.provider";
import { IForecast } from "../types";
import { ForecastCard } from "./forecast-card";
const { Title } = Typography;

export interface HistoryProps {
    sessionId?: string;
    title?: string;
    history: IForecast[];
}

export function SearchHistory(props: HistoryProps) {
    return <>
        <div className="history">
            <Title level={3}>{props.title ?? 'Search History'}</Title>
            {
                props.history.map(item => (
                    <ForecastCard forecast={item}/>
                ))
            }
        </div>
    </>
}