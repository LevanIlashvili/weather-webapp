import axios from "axios";
import { IForecast } from "../types";

export class Client {
    private API_URL = `http://localhost:8801`;
    public async reverseGeocode(location: string) {
        if (!location || !location.length) {
            return [];
        }
        const response = await axios.get(`${this.API_URL}/open-weather/lookup?query=${location}`);
        return response.data;
    }

    public async requestForecast(lat: number, lon: number, city: string, sessionId: string) {
        const response = await axios.post(`${this.API_URL}/open-weather/forecast`, {
            lat,
            lon,
            city,
            sessionId
        });
        return response.data;
    }

    public async getHistory(sessionIdentifier?: any): Promise<IForecast[]> {
        const response = await axios.get(`${this.API_URL}/search-history?sessionId=${sessionIdentifier}`);
        return response.data;
    }
}