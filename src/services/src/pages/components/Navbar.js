function Navbar() {
    return (
        <div>
            <a href="/dashboard">Dashboard</a> |
            <a href="/groups">Groups</a> |
            <a href="/create-group">Create Group</a>
        </div>
    );
}

export default Navbar;
function Navbar() {
    return (
        <div>
            <a href="/dashboard">Dashboard</a> |
            <a href="/groups">Groups</a> |
            <a href="/create-group">Create Group</a>
        </div>
    );
}

export default Navbar;
function Navbar() {
    return (
        <div>
            <a href="/dashboard">Dashboard</a> | 
            <a href="/groups">Groups</a> | 
            <a href="/create-group">Create Group</a> | 
            <a href="/sessions">Sessions</a> | 
            <a href="/posts">Chat</a>
        </div>
    );
}

export default Navbar;


const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
};
<button onClick={logout}>Logout</button>