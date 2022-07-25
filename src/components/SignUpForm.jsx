import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../utils/stateContext";

const SignUpForm = () => {

    const {dispatch} = useGlobalState()
    const navigate = useNavigate()

    const initialFormData = {
        username: "",
        email: "",
        password: "",
        password_confirmation: ""
    }

    const [formData, setFormData] = useState(initialFormData)

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log("submitted")
        console.log(formData)
        dispatch({
            type: "setLoggedInUser",
            data: formData.username
        })
        setFormData(initialFormData)
        navigate("/bookings")
    }

    const handleFormData = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }

    return (
        <>
            <h2>Sign up</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type="text" name="username" id="username" value={formData.username} onChange={handleFormData}/>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" id="email" value={formData.email} onChange={handleFormData}/>
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" value={formData.password} onChange={handleFormData}/>
                </div>
                <div>
                    <label htmlFor="password">Password confirmation:</label>
                    <input type="password" name="password_confirmation" id="password_confirmation" value={formData.password_confirmation} onChange={handleFormData}/>
                </div>
                <input type="submit" value="Sign up" />
            </form>
        </>
    )
}

export default SignUpForm