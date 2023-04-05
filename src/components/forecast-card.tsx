import { Card, Col, Grid, Row, Typography, Badge, Descriptions } from "antd";
import { IForecast, IDailyForecast } from "../types";
const { Title } = Typography;

export interface IForecastCardProps {
    forecast: IForecast;
}

export interface IDailyForecastCardProps {
    data: IDailyForecast;
    timezoneDiff: number;
    isHottest: boolean;
    isColdest: boolean;
}

function DailyForecastCard(item: IDailyForecastCardProps) {
    const { data } = item;
    
    const maxTime = new Date((item.data.temperature.max.timestamp + item.timezoneDiff) * 1000).getHours();
    const minTime = new Date((item.data.temperature.min.timestamp + item.timezoneDiff) * 1000).getHours();
    const card =  (
            <Card className={`daily-card ${item.isHottest? 'hottest': ''} ${item.isColdest? 'coldest': ''}`}>
                
                <Title level={5}>{data.date}</Title>
                <Descriptions title="Min Temperature" layout='vertical'>
                    <Descriptions.Item label="Temp.">{item.data.temperature.min.celsius}</Descriptions.Item>
                    <Descriptions.Item label="Time">{minTime}:00</Descriptions.Item>
                </Descriptions>
                <Descriptions title="Max Temperature"  layout='vertical'>
                <Descriptions.Item label="Temp.">{item.data.temperature.max.celsius}</Descriptions.Item>
                    <Descriptions.Item label="Time">{maxTime}:00</Descriptions.Item>
                </Descriptions>
            </Card>
    )
    if (item.isColdest || item.isHottest) {
        return (<Badge.Ribbon color={item.isColdest ? 'cyan' : 'red'} text={item.isColdest? 'Coldest' : 'Hottest'}>
            {card}
        </Badge.Ribbon>)
    } else {
        return card;
    }
}
export function ForecastCard(props: IForecastCardProps) {
    const {forecasts, settings} = props.forecast;
    const maxTemperature = Math.max(...forecasts.map(item => item.temperature.max.celsius));
    const minTemperature = Math.min(...forecasts.map(item => item.temperature.min.celsius));
    return <Card title={settings.city}>
        <Row justify='space-between'>
            {
                props.forecast.forecasts.map((forecast) => (
                    <Col xs={24} sm={12} md={12} lg={8} xl={8} xxl={4}>
                        <DailyForecastCard timezoneDiff={settings.timezoneDiff} data={forecast} isHottest={forecast.temperature.max.celsius === maxTemperature} isColdest={forecast.temperature.min.celsius === minTemperature} />
                    </Col>
                ))
            }
        </Row>
    </Card>
}