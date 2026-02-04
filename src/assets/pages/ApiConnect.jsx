import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ApiConnect = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(setUsers)
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            {users.length === 0 ? (
                <p>Loading...</p>
            ) : (
                users.map(user => (
                    <Card key={user.id}>
                        <Link to={`/api/${user.id}`}>
                            <p>{user.name}</p>
                            <p>{user.email}</p>
                            <p>{user.phone}</p>
                            <p>{user.website}</p>
                            <p>{user.address?.city}</p>
                        </Link>
                    </Card>
                ))
            )}
        </div>
    );
};

const Card = styled.div`
    border: 1px solid black;
    padding: 16px;
    margin: 16px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: box-shadow 0.3s ease;

    
    &:hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);


}
`



export default ApiConnect;