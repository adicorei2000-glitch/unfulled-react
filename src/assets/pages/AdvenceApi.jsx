import { InputOutlined, InputRounded, InputSharp } from '@mui/icons-material';
import { Input, InputAdornment, InputBase, InputLabel, TextField } from '@mui/material';
import { useState, useEffect } from 'react';

const AdvenceApi = () => {
    const [user, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);
    console.log(user);
    return (
        <div style={{ padding: "20px", fontSize: "larger", minHeight: "100vh", backgroundColor: "#f9f9f9", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", maxWidth: "800px", margin: "0 auto", boxSizing: "border-box", }}>
            <h1>User List</h1>
            <TextField
                id="search-input"
                label="Full Name"
                variant="outlined"
                placeholder="Search by name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                sx={{
                    width: 320,
                    "& .MuiOutlinedInput-root": {
                        borderRadius: "16px",
                        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)"
                    }
                }}
            />
            <ul>
                {user
                    .filter((user) =>
                        user.name.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((user) => (
                        <li
                            key={user.id}
                            style={{
                                listStyle: "none",
                                border: "1px solid #e0e0e0",
                                padding: "14px 16px",
                                margin: "6px 8px",
                                borderRadius: "12px",
                                backgroundColor: "#f9fafb",
                                color: "#111",
                                cursor: "pointer",
                                transition: "0.2s",
                            }}
                        >
                            {user.name} - {user.email} - {user.phone} - {user.website} - {user.address?.city} - {user.company?.name} - {user.username} - {user.address?.street} - {user.address?.suite} - {user.address?.zipcode} - {user.company?.catchPhrase} - {user.company?.bs} - {user.id} - {user.address?.geo?.lat} - {user.address?.geo?.lng}
                        </li>
                    ))}
            </ul>
            {loading && <p>Loading...</p>}

            {error && <p>Error: {error}</p>}
        </div>
    );
};

export default AdvenceApi;

