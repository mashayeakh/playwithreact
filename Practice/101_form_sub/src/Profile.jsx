import React from 'react'
import { useLocation } from 'react-router-dom';

const Profile = () => {
    // console.log(data);
    const location = useLocation();
    const data = location.state?.allInfo;
    console.log(data);
    return (
        <>

            <div>Profile</div>
            <h2>Nameeeeeee: {data.name}</h2>
            <h2>Email : {data.email}</h2>
            <h2>Course : {data.courses}</h2>
            <h2>Gender : {data.gender}</h2>
        </>
    )
}

export default Profile