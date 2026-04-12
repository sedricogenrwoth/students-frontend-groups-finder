import { useState } from "react";
import api from "../services/api";

function Login() {

    const [form, setForm] = useState({});

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await api.post("/users/login", form);

        localStorage.setItem("token", res.data.token);

        alert("Login successful");
        window.location.href = "/dashboard";
    };

    return (
        <div>
            <h2>Login</h2>

            <form onSubmit={handleSubmit}>
                <input name="email" placeholder="Email" onChange={handleChange} />
                <input name="password" placeholder="Password" type="password" onChange={handleChange} />

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
