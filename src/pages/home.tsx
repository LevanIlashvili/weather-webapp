import { AutoComplete, Button, Form, Input, Space, Typography } from "antd";
import form from "antd/es/form";
import { debounce } from "lodash";
import { useState } from "react";
const { Title } = Typography;

export function Home() {
    const [options, setOptions] = useState<any[]>([]);

    const handleSearch = async() => {
        const mocks = ['test', 'test2', 'test3'];
        
        setOptions(mocks.map(item => {
            return {
                value: item,
                label: `Item: ${item}`,
            }
        }));
    }
    return <>
        <div className="hero">
            <Title>Get Weather Forecast</Title>
            <p>Search for cities, states, or other locations</p>
            <Space>
            <AutoComplete
                options={options}
                placeholder='Type location name'
                style={{width: 400, padding: 20}}
                onSearch={debounce(handleSearch, 300)}
            /> 
            </Space>
        </div>
        <div className="history">
            <Title level={3}>Search History</Title>
        </div>
    </>
}