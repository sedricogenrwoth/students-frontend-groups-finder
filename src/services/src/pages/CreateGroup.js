import { useState } from "react";
import api from "../services/api";

function CreateGroup() {

    const [form, setForm] = useState({
        group_name: "",
        course_code: "",
        description: "",
        location: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await api.post("/groups/create", form);
            alert("Group created successfully");

            // redirect to groups page
            window.location.href = "/groups";

        } catch (err) {
            console.log(err);
            alert("Error creating group");
        }
    };

    return (
        <div>
            <h2>Create Study Group</h2>

            <form onSubmit={handleSubmit}>

                <input
                    name="group_name"
                    placeholder="Group Name"
                    onChange={handleChange}
                />

                <input
                    name="course_code"
                    placeholder="Course Code"
                    onChange={handleChange}
                />

                <input
                    name="location"
                    placeholder="Meeting Location"
                    onChange={handleChange}
                />

                <textarea
                    name="description"
                    placeholder="Description"
                    onChange={handleChange}
                />

                <button type="submit">Create Group</button>

            </form>
        </div>
    );
}

export default CreateGroup;
