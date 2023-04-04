export interface IForecast {
    settings: {
        timezoneDiff: number;
        city: string;
    };
    forecasts: IDailyForecast[];
}

export interface IDailyForecast {
    date: string;
    temperature: {
        min: {
            celsius: number;
            timestamp: number;
        },
        max: {
            celsius: number;
            timestamp: number;
        }
    }
}