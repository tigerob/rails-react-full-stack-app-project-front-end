import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../utils/stateContext";

const LogIn = () => {

    const {dispatch} = useGlobalState()
    const navigate = useNavigate()

    const initialFormData = {
        email: "",
        password: ""
    }

    const [formData, setFormData] = useState(initialFormData)

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log("submitted")
        console.log(formData)
        dispatch({
            type: "setLoggedInUser",
            data: formData.email
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
            <h2>Log in</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" id="email" value={formData.email} onChange={handleFormData}/>
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" value={formData.password} onChange={handleFormData}/>
                </div>
                <input type="submit" value="Log in" />
            </form>
        </>
    )
}

export default LogIn