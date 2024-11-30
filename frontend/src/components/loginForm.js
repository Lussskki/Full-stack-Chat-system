import { useState } from "react"

const Login = ({ onLoginSuccess }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('') // Clear any previous errors

        if (!username || !password) {
            setError('Please enter both username and password')
            return
        }

        try {
            const response = await fetch('http://localhost:3001/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nick: username,  // Proper key-value
                    password: password
                })
            })

            if (response.ok) {
                const data = await response.json()
                console.log('Response from server:', data)
                onLoginSuccess() // Call parent function to change login state
            } else {
                const errorData = await response.json()
                setError(errorData.message || 'Login failed')
            }
        } catch (error) {
            console.error('Error:', error)
            setError('Network error, please try again')
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
                    placeholder="Enter your username"
                />
            </div>
            <div>
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                />
            </div>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <button type="submit" disabled={!username || !password}>
                Login
            </button>
        </form>
    )
}

export default Login
