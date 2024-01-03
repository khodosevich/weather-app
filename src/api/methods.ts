import axios from "axios";

const api = {
    key:"7c6465f062bf211f31d3795bd91685f7",
    base: "https://api.openweathermap.org/data/2.5/"

}

export const searchMethod = async (city: string) : Promise<any> => {
    const response = await axios.get(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
    return response.data
}