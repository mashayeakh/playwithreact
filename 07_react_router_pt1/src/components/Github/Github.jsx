import React from 'react'
import { useLoaderData } from 'react-router-dom';

const Github = () => {
    const data = useLoaderData();
    return (
        <div>Github Name : {data.name} </div>
    )
}

export default Github

// We will be doing effectively
export const githubData = async () => {
    const res = await fetch("https://api.github.com/users/mashayeakh");
    return res.json();
}