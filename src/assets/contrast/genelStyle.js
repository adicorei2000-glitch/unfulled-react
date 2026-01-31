import styled from "styled-components";


export const Mainstyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    background-color: #f0f0f0;
`;
export const ButtonStyle = styled.button`
    padding: 10px 20px;
    margin: 10px;
    font-size: 16px;
    cursor: pointer;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    &:hover {
        background-color: #0056b3;
    }
`;
export const LoginBtn = styled(ButtonStyle)`
    background-color: #28a745;
    &:hover {
        background-color: #1e7e34;
    }
`;
export const BackBtn = styled(ButtonStyle)`
    background-color: #6c757d;
    &:hover {
        background-color: #5a6268;
    }
`;

