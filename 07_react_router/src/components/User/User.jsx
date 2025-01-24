import React from 'react'
import { useParams } from 'react-router-dom';

const User = () => {
    // custom hook
    const { userId } = useParams();
    return (
        <div className='bg-gray-600 text-white p-5'>User: {userId}</div>
    )
}

export default User