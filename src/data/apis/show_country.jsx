import axios from "axios";
export const ShowCountry = async() => {

    let final;

    await axios("https://ipapi.co/json/")
    .then((data) => {
        final = data.data.country_name
    })
    .catch((err) => console.error("فشل تحديد الموقع", err));

    return final
}