/* eslint-disable react/prop-types */

import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
    const { features } = option;
    return (
        <div className="bg-indigo-300 m-3 p-3 rounded-md">
            <div>
                <h3>
                    <span className="text-6xl font-bold text-white">{option.price}</span>
                    <span className="text-2xl text-gray-200">/mon</span>
                </h3>
                <p className="text-3xl my-4">{option.name}</p>
            </div>
            {
                features.map((feature, idx) => <Feature feature={feature} key={idx}></Feature>)
            }

            <button className="bg-green-500 w-full rounded py-2 mt-4 font-bold text-white ">Buy Now</button>
        </div >
    );
};

export default PriceOption;