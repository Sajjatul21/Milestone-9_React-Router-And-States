import { useEffect, useState } from "react";
import axios from "axios";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

const PhoneBar = () => {
    const [phones, setPhones] = useState([]);
    useEffect(() => {

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                // console.log(data);
                const phonesLoaded = data.data.data;
                const phoneData = phonesLoaded.map(phone => {
                    const parts = phone.slug.split("-");
                    // console.log(parts);
                    const price = parts[1];
                    const singlePhone = {
                        name: phone.phone_name,
                        price: price
                    };
                    return singlePhone;
                });
                setPhones(phoneData);

            });

    }, []);
    return (
        <BarChart width={500} height={200} data={phones}>
            <Bar dataKey="price" fill="#8884d8" />
            <XAxis dataKey={name} />
            <YAxis></YAxis>
            <Tooltip></Tooltip>
        </BarChart>
    );
};

export default PhoneBar;