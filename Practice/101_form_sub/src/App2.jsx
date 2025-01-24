import React, { useState } from 'react'
import Test2 from './Test2';

const App2 = () => {

    const [formData, setFormData] = useState(null);

    const handleFormSubmit = (data) => {
        setFormData(data);
        console.log(`Form Data => ${formData}`);
    }


    return (

        <>

            {/* //Test 2 */}
            {/* <Test2 onSubmit={handleFormSubmit} /> */}

            {/* 
            // Profile */}
            {/* {
                formData && <profile data={formData} />
            } */}
        </>

    )
}

export default App2