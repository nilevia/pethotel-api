import provinces from "./../../public/json/provinces.json"
import citys from "./../../public/json/citys.json"


export type Privince = {
    id: string,
    name: string,
}

export type City = {
    id: string,
    province_name?: string,
    province_id: string,
    name: string,
    status?: boolean,
}


export const getCitys = (): City[] => {
    return citys.map((city: City) => {
        const province = provinces.find((province: Privince) => province.id === city.province_id);
        return {
            ...city,
            province_name: province?.name
        }
    });
};

export const getProvinces = (): Privince[] => provinces;