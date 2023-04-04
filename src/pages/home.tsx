import { Select, Space, Typography } from "antd";
import { debounce } from "lodash";
import { useContext, useEffect, useState } from "react";
import { SearchHistory } from "../components/search-history";
import { ClientContext } from "../providers/client.provider";
import { HistoryContext } from "../providers/search-history.provider";
import { SessionContext } from "../providers/session.provider";
const { Title } = Typography;

export function Home() {
    const [options, setOptions] = useState<any[]>([]);
    const [value, setValue] = useState('');

    const { client } = useContext(ClientContext);
    const { sessionIdentifier } = useContext(SessionContext);
    const { history, push } = useContext(HistoryContext);

    const onChange = (value: string) => {
        setValue(value);
      };
      
    const onSearch = (value: string) => {
        client.reverseGeocode(value).then((data) => {
            if (data && data.length) {
                setOptions(data.map((item: { fullName: any; lat: any; lon: any; }) => {
                    return {
                        label: item.fullName,
                        value: `${item.lat},${item.lon}`,
                    }
                })) 
            }
        });
    };

    useEffect(() => {
        if (!value || !value.length) return;
        const option = options.find(item => item.value === value);
        const [lat, lon] = value.split(',').map(item => Number(Number(item).toFixed(7)));
        if (!lat || !lon) return;
        client.requestForecast(lat, lon, option.label, sessionIdentifier).then(result => {
            push(result);
        });
     }, [value]);

    

    return <>
        <div className="hero">
            <Title>Get Weather Forecast</Title>
            <p>Search for cities, states, or other locations</p>
            <Space>
                <Select
                    showSearch={true}
                    showArrow={false}
                    style={{ width: 360, maxWidth: '80%', textAlign: 'left' }}
                    placeholder="Search City"
                    onChange={onChange}
                    onSearch={debounce(onSearch, 300)}
                    options={options}
                    filterOption={(input, option) =>
                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                    }
                    defaultValue={''}
                />
            </Space>
        </div>
        <SearchHistory title="My Search History" sessionId={sessionIdentifier} history={history}/>
    </>
}