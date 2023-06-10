import PriceOption from "../PriceOption/PriceOption";

const Pricing = () => {
    const pricingOptions = [
        {
            id: 1, name: "Free", price: 0, features: [
                "Awesome Features",
                "Extra Features",
                "Unnecessary Features",
                "Will never use Features",
                "Hudai Features",
                "Ajaira Features"
            ]
        },
        {
            id: 2, name: "Medium", price: 9.99, features: [
                "Everything on Free",
                "Extra Features",
                "Unnecessary Features",
                "Will never use Features",
                "Hudai Features",
                "Ajaira Features"
            ]
        },
        {
            id: 3, name: "Premium", price: 19.99, features: [
                "EveryThing on Premium",
                "Extra Features",
                "Unnecessary Features",
                "Will never use Features",
                "Hudai Features",
                "Ajaira Features"
            ]
        },
    ];
    return (
        <div>
            <h1 className="text-5xl font-bold bg-indigo-300 text-white p-12 mt-4">Best Deal of the Town</h1>
            <div className="grid mt-4 md:grid-cols-3 gap-3">
                {
                    pricingOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;