import axios from "axios";

export class Client {
    private API_URL = `http://localhost:8801`;
    public async reverseGeocode(location: string) {
        if (!location || !location.length) {
            return [];
        }
        const response = await axios.get(`${this.API_URL}/open-weather/lookup?query=${location}`);
        return response.data;
    }
}