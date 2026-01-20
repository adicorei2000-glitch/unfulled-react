import { useNavigate } from "react-router-dom"

export const BackBtn = () => {
    const navigate = useNavigate()
    function backfunc() {
        console.log("backbtn")
        navigate(-1)
    }
    return (
        <button onClick={backfunc}>Back</button>
    )
}

export const LoginBtn = () => {
    const navigate = useNavigate()
    function handleLogin() {
        console.log("login out")
        // navigate to a login route or perform auth action; adjust as needed
        navigate("/login")
    }
    return (
        <button onClick={handleLogin}>Login</button>
    )
}

export const HomeComponent = () => {
    const navigate = useNavigate()
    function backfunc() {
        console.log("Back")
        navigate(-1)
    }
    return (
        <div>
            <h1>Home</h1>
            <button onClick={backfunc}>Back</button>
        </div>
    )
}