// import provinces from "./../../public/json/provinces.json"
// import citys from "./../../public/json/citys.json"


// export type Privince = {
//     id: string,
//     name: string,
// }

export type City = {
    id: string,
    name?: string,
    status: number,
    // name: string,
    // status?: boolean,
}


export const getCitys = (): City[] => {

    const data = [
        {
            "id": "JATIM-MLG",
            "name" : "Malang",
            "status" : 1
        },
        {
            "id": "JKT-SLT",
            "name" : "Jakarta Selatan",
            "status" : 1
        },
        {
            "id": "JKT-BRT",
            "name" : "Jakarta Barat",
            "status" : 0
        },
        {
            "id": "JKT-UTR",
            "name" : "Jakarta Utara",
            "status" : 1
        },
        {
            "id": "JATIM-SBY",
            "name" : "Surabaya",
            "status" : 1
        },
        {
            "id": "JATENG-SMG",
            "name" : "Semarang",
            "status" : 1
        },
        {
            "id": "JABAR-BDG",
            "name" : "Bandung",
            "status" : 0
        },
        {
            "id": "JOGJA",
            "name" : "Jogja",
            "status" : 1
        }

    ];
    return data;
    // return citys.map((city: City) => {
    //     const province = provinces.find((province: Privince) => province.id === city.province_id);
    //     return {
    //         ...city,
    //         province_name: province?.name
    //     }
    // });
};

// export const getProvinces = (): Privince[] => [];