import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"

const From = () => {

    const [form, setForm] = useState([]);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const formSubmit = (data) => {
        console.log("Submitted data: " + JSON.stringify(data));
        alert("Submitted Data");
        reset();
        setForm(data);
        //! navigatin all the data to profile 
        navigate("/profile", {
            state: {
                formInfo: data
            }
        })
    }



    return (
        // <div>From</div>
        <>


            <form onSubmit={handleSubmit(formSubmit)}>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">First name</label>

                        <input
                            type="text"
                            id="first_name"
                            defaultValue={""}
                            {
                            ...register("first_name", {
                                minLength: {
                                    value: 5,
                                    message: `Can't less than 5`
                                },
                                maxLength: {
                                    value: 15,
                                    message: `Can't be greater than 15`
                                },
                                required: `This field is required.`
                            })
                            }
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" />
                        {
                            errors.first_name &&
                            <span>
                                {errors.first_name.message}
                            </span>
                        }
                    </div>

                    <div>
                        <label for="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white  text-left">Last name</label>

                        <input type="text"
                            id="last_name"
                            defaultValue={""}
                            {
                            ...register("last_name", {
                                minLength: {
                                    value: 5,
                                    message: `Can't less than 5`
                                },
                                maxLength: {
                                    value: 15,
                                    message: `Can't be greater than 15`
                                },
                                required: `This field is required.`
                            })
                            }
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" />
                        {errors.last_name &&
                            <span>
                                {errors.last_name.message}
                            </span>}
                    </div>

                    <div>
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">
                            Phone number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            defaultValue={""}
                            {
                            ...register("phone", {
                                required: "This field is required.",
                                pattern: {
                                    value: /^[0-9]{10}$/, // Correct regex for phone number format
                                    message: "Invalid phone number format. Example: 123-45-678" // Custom error message for pattern mismatch
                                }
                            })
                            }
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="123-45-678"
                        />
                        {errors.phone &&
                            <span>
                                {errors.phone.message}
                            </span>
                        }
                    </div>


                    <div>
                        <label for="dob" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Date of birth</label>

                        <input
                            type="date"
                            id="dob"
                            defaultValue={""}
                            {
                            ...register("dob", {
                                required: `This field is required.`
                            })
                            }

                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
                        {
                            errors.dob && <span>
                                {errors.dob.message}
                            </span>
                        }
                    </div>

                </div>
                <div className="mb-6">
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Email address</label>

                    <input
                        type="email"
                        id="email"
                        defaultValue={""}
                        {
                        ...register("email", {
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: `Invalide Email Address`
                            },
                            required: `This field is required.`

                        })
                        }

                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" />

                    {
                        errors.email &&
                        <span>{errors.email.message}</span>
                    }
                </div>

                <div className="mb-6">
                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Password</label>

                    <input
                        type="password"
                        id="password"
                        defaultValue={""}
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

                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" />
                    {
                        errors.password &&
                        <span>{errors.password.message}</span>
                    }
                </div>
                <div className='mb-6'>
                    <label className='me-11'>
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

                </div>





                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

            </form >


        </>

    )
}

export default From