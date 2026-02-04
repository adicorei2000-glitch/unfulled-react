import { Input } from '@mui/icons-material';
import { useState, useEffect } from 'react';

const Advence = () => {
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
    return (
        <div>
            <h1>User List</h1>
            <Input
                type="text"
                placeholder="Search by name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <ul>
                {user
                    .filter((user) =>
                        user.name.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((user) => (
                        <li key={user.id}>
                            {user.name} - {user.email}
                        </li>
                    ))}
            </ul>
            {loading && <p>Loading...</p>}

            {error && <p>Error: {error}</p>}
        </div>
    );
};

export default Advence;

