import React from 'react'
import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {

    const userData = useLoaderData();

    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch("https://api.github.com/users/mashayeakh")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             // i can log,
    //             console.log(`data =>>${data}`);
    //             // i can set the data to render
    //             setData(data);
    //         })
    // }, [])

    return (
        <div className='bg-green-500 text-4xl p-3'>
            Github Name : {userData.name}
            <img src={userData.avatar_url} alt="git picture" width={300} />
        </div>
    )
}

export default Github

//  well, now can actually fetch the data in another way called loader[coming from react router]. This actually helps to load the data before the page is rendered and you won't see any legging on the page.

//loaders provide data to route components before they are rendered. They are only called on the server when server rendering or during the build with pre-rendering

//We will create an async function that fetch the data and pass the data to another the loader and this loader should be in the main.jsx file.


//and obiously, we will need hook here to render the data. hook is userLoader

export const githubInfo = async () => {
    const res = await fetch("https://api.github.com/users/mashayeakh");

    //we can directly return the data. 
    const data = res.json();
    return data;
}