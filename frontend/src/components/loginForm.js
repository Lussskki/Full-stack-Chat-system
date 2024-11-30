import { useState } from "react"

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!username || !password) {
            setError('Please enter both')
        }else{
            console.log("Logging in with", username, password)
        }
    }



return (
    <form onSubmit={handleSubmit}>
        <div>
            <label>Username</label>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
        </div>
        <div>
            <label>Password</label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit" disabled={!username || !password}>Login</button>
    </form>
)
}

export default Login