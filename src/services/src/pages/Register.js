import { useState } from "react";
import api from "../services/api";

function Register() {

    const [form, setForm] = useState({});

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await api.post("/users/register", form);

        alert("Registered successfully!");
    };

    return (
        <div>
            <h2>Register</h2>

            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Name" onChange={handleChange} />
                <input name="program" placeholder="Program" onChange={handleChange} />
                <input name="year_of_study" placeholder="Year" onChange={handleChange} />
                <input name="email" placeholder="Email" onChange={handleChange} />
                <input name="password" placeholder="Password" type="password" onChange={handleChange} />

                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;