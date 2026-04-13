import { useState } from "react";
import api from "../services/api";

function Posts() {

    const [groupId, setGroupId] = useState("");
    const [content, setContent] = useState("");

    const createPost = async () => {
        await api.post("/posts/create", {
            group_id: groupId,
            content
        });

        alert("Message sent");
    };

    return (
        <div>
            <h2>Group Chat</h2>

            <input
                placeholder="Group ID"
                onChange={(e) => setGroupId(e.target.value)}
            />

            <textarea
                placeholder="Write message"
                onChange={(e) => setContent(e.target.value)}
            />

            <button onClick={createPost}>Send</button>
        </div>
    );
}

export default Posts;