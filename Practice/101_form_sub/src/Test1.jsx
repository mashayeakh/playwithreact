import React from 'react'
import { useForm } from 'react-hook-form'

const Test1 = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    console.log(watch("example")) // watch input value by passing the name of it

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            
            <input defaultValue="test2222" {...register("firstName")} />

            <input {...register("lastName", { required: true })} />
            {errors.lastName && <span>This field is required</span>}

            <select {...register("gender")} >
                <option value="" disabled>Select your gender</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
            </select>

            <input type="password"
                {...register("password", {
                    minLength: {
                        value: 6,
                        message: "Cant be less than 6"
                    },
                    maxLength: {
                        value: 8,
                        message: `Cant be greater than 8`
                    },
                    required: "pass is required"
                })}
            />
            {
                errors.password && <span>
                    {errors.password.message}
                </span>
            }
            <input type="submit" />
        </form >
    )
}

export default Test1