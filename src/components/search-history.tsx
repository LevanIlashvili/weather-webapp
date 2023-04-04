import { Select, Space, Typography } from "antd";
import { debounce } from "lodash";
import { useContext, useEffect, useState } from "react";
import { ClientContext } from "../providers/client.provider";
import { HistoryContext } from "../providers/search-history.provider";
import { SessionContext } from "../providers/session.provider";
import { IForecast } from "../types";
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
                    <>{JSON.stringify(item)}</>
                ))
            }
        </div>
    </>
}