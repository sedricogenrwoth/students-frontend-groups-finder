import { useEffect, useState } from "react";
import api from "../services/api";

function Dashboard() {

    const [groups, setGroups] = useState([]);

    useEffect(() => {
        api.get("/dashboard")
            .then(res => setGroups(res.data.groups))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h2>My Dashboard</h2>

            {groups.length === 0 ? (
                <p>No groups yet</p>
            ) : (
                groups.map(g => (
                    <div key={g.id}>
                        <h3>{g.group_name}</h3>
                        <p>{g.course_code}</p>
                    </div>
                ))
            )}
        </div>
    );
}

export default Dashboard;