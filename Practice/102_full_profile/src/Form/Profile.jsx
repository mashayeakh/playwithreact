import React from 'react'
import { useLocation } from 'react-router-dom'

const Profile = () => {
    const location = useLocation();
    const formData = location.state?.formInfo;
    console.log(`Form Data in Profile-> ${formData.JSON}`)
    return (
        <>
            <div>Profile</div>
            <h2>Full Name: {formData?.first_name + ' ' + formData?.last_name}</h2>

            <h2>Email: {formData?.email} </h2>
            <h2>Phone Number{formData?.phone} </h2>
            <h2>Date of birth {formData?.dob}</h2>
            <h2>Gender {formData?.gender}</h2>
        </>
    )
}

export default Profile