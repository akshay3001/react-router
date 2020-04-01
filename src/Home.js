import React, {useState, useContext, useEffect} from 'react';
// import { useRouteMatch, useParams} from 'react-router-dom';
import {UserContext} from './App';

function Home() {
    // const [counter, setCounter] = useState(0);

    // Context Hook using useContext
    const user = useContext(UserContext);

    // Get route details
    // const routeDetails = useRouteMatch();
    // const params = useParams();

    // useEffect Hook
    useEffect(() => {
        // console.log('RouteMatch: ', routeDetails);
        // console.log('Params: ', params);
    })

    return (
        <div>
            <h2>Home Component {user}</h2>
            {/* <button onClick="() => setCounter(counter+1)">Counter</button> */}
        </div>
    );
}

export default Home;