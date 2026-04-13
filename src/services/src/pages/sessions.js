import { useState, useEffect } from "react";
import api from "../services/api";

function Sessions() {

    const [groupId, setGroupId] = useState("");
    const [sessions, setSessions] = useState([]);
    const [form, setForm] = useState({
        session_date: "",
        session_time: "",
        location: "",
        description: ""
    });

    const fetchSessions = async () => {
        if (!groupId) return;

        const res = await api.get(`/sessions?group_id=${groupId}`);
        setSessions(res.data);
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const createSession = async (e) => {
        e.preventDefault();

        await api.post("/sessions/create", {
            ...form,
            group_id: groupId
        });

        alert("Session created");
        fetchSessions();
    };

    useEffect(() => {
        fetchSessions();
    }, [groupId]);

    return (
        <div>
            <h2>Study Sessions</h2>

            <input
                placeholder="Enter Group ID"
                onChange={(e) => setGroupId(e.target.value)}
            />

            <h3>Create Session</h3>

            <form onSubmit={createSession}>
                <input name="session_date" type="date" onChange={handleChange} />
                <input name="session_time" type="time" onChange={handleChange} />
                <input name="location" placeholder="Location" onChange={handleChange} />
                <input name="description" placeholder="Description" onChange={handleChange} />

                <button type="submit">Create</button>
            </form>

            <h3>Sessions</h3>

            {sessions.map(s => (
                <div key={s.id}>
                    <p>{s.session_date} - {s.session_time}</p>
                    <p>{s.location}</p>
                    <p>{s.description}</p>
                </div>
            ))}
        </div>
    );
}

export default Sessions;