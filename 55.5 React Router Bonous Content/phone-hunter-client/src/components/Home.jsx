import { useLoaderData } from "react-router-dom";

const Home = () => {
    const users = useLoaderData();
    return (
        <div>
            <h3>Show me all the phone you have.</h3>
            <h5>I got: {users.length}</h5>
        </div>
    );
};

export default Home;