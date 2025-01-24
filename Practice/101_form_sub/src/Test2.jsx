import React from 'react'
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Profile from './Profile';
import { useNavigate } from 'react-router-dom';

const Test2 = () => {

    const [formD, setFormD] = useState([]);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors }
    } = useForm();


    const onSubmit = (data) => {

        const maskedData = {
            ...data,
            password: "*".repeat(data.password.length)
        };

        alert(JSON.stringify(maskedData, null, 2));
        setFormD(maskedData);

        // navigating all the info to profile containing in allInfo
        navigate("/profile", {
            state: {
                allInfo: maskedData
            }
        })
        reset();
    }

    return (
        // here we will be taking 5 inputs,
        <>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input
                    type='text'
                    defaultValue=""
                    placeholder='name'
                    {
                    ...register("name", {
                        minLength: {
                            value: 4,
                            message: `Cant be less than 4`
                        },
                        maxLength: {
                            value: 10,
                            message: `Cant be greater than 10`
                        },
                        required: "This field is required"
                    }
                    )}
                />

                {
                    errors.name &&
                    <span>
                        {errors.name.message}
                    </span>
                }


                <input
                    type='email'
                    defaultValue=''
                    placeholder='email'
                    {
                    ...register("email", {
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: `Invalide Email Address`
                        },
                        required: `This field is required.`
                    }
                    )}
                />
                {
                    errors.email &&
                    <span>
                        {errors.email.message}
                    </span>
                }
                <input
                    type="password"
                    defaultValue=""
                    placeholder='password'
                    {
                    ...register("password", {
                        minLength: {
                            value: 4,
                            message: "Cant be less than 4 characters"
                        },
                        maxLength: {
                            value: 8,
                            message: "Cant be greater than 8 characters"
                        },
                        required: "This field is required"
                    })
                    }
                />
                {
                    errors.password &&
                    <span>
                        {errors.password.message}
                    </span>
                }
                <input
                    type='date'
                    defaultValue=""
                    placeholder='dob'
                    {
                    ...register("dob",
                        {
                            required: "This field is required"
                        })
                    }
                />
                {
                    errors.dob &&
                    <span>
                        {errors.dob.message}
                    </span>
                }


                <label>
                    <input
                        type="radio"
                        value="female"
                        {
                        ...register("gender", {
                            required: "required"
                        })
                        }
                    />
                    Female
                </label>

                <label>
                    <input
                        type="radio"
                        value="male"
                        {
                        ...register("gender", {
                            required: "required"
                        })
                        }
                    />
                    Male
                </label>

                <select {...register("courses")} defaultValue="" >
                    <option value="" disabled>
                        Enter your courses
                    </option>
                    <option value="math" >
                        Math
                    </option>
                    <option value="chemistry" >
                        chemistry
                    </option>
                    <option value="physics">
                        Physics
                    </option>
                </select>

                <button type="submit">
                    Submit
                </button>
            </form>


            {/* passing the formD as a props to Profile */}
            {formD.name && <Profile data={formD} />}

            {/* <div>
                <p>Profile Info:</p>
                {
                    formD.name &&
                    <>
                        <h2>Name: {formD.name}</h2>
                        <h2>Email : {formD.email}</h2>
                        <h2>Course : {formD.courses}</h2>
                        <h2>Gender : {formD.gender}</h2>
                    </>
                }
            </div> */}


        </>
    )
}

export default Test2