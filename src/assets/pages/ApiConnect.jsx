import React, { useEffect } from "react";

const ApiConnect = () => {
    useEffect(() => {
        fetch('https://api.example.com/data')
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <h1>API Connect Component</h1>
            <p>Check the console for fetched data.</p>
        </div>
    );
};

export default ApiConnect;  