import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
    const phones = useLoaderData();
    return (
        <div>
            <h3>Show me all the phone you have.</h3>
            <h5>I got: {phones.length}</h5>
            {
                phones.map(ph => <li key={ph.id}><Link to={`/phones/${ph.id}`}>{ph.name}</Link></li>)
            }
        </div>
    );
};

export default Home;