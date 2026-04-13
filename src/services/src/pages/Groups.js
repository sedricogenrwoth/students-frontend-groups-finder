import { useEffect, useState } from "react";
import api from "../services/api";

function Groups() {

    const [groups, setGroups] = useState([]);
    const [search, setSearch] = useState("");

    // Fetch all groups
    const fetchGroups = async () => {
        const res = await api.get("/groups");
        setGroups(res.data);
    };

    // Search groups
    const searchGroups = async () => {
        if (!search) return fetchGroups();

        const res = await api.get(`/groups/search?search=${search}`);
        setGroups(res.data);
    };

    // Join group
    const joinGroup = async (groupId) => {
        try {
            await api.post("/groups/join", { group_id: groupId });
            alert("Joined successfully");
        } catch (err) {
            alert("Already joined or error");
        }
    };

    useEffect(() => {
        fetchGroups();
    }, []);

    return (
        <div>
            <h2>Study Groups</h2>

            {/* SEARCH BAR */}
            <input
                type="text"
                placeholder="Search by course or group name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <button onClick={searchGroups}>Search</button>

            {/* GROUP LIST */}
            {groups.map(group => (
                <div key={group.id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
                    <h3>{group.group_name}</h3>
                    <p>Course: {group.course_code}</p>
                    <p>{group.description}</p>
                    <p>Members: {group.members || 0}</p>

                    <button onClick={() => joinGroup(group.id)}>
                        Join Group
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Groups;