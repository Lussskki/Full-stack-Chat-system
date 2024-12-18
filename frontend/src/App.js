import './App.css'
import SignupForm from './components/signupForm'
import LoginForm from './components/loginForm'
import { useState } from 'react'


function App() {
    const [isSignedUp, setIsSignedUp] = useState(false) 
    const [isLoggedIn, setIsLoggedIn] = useState(false) 

    const handleSignupSuccess = () => {
        setIsSignedUp(true)
        console.log('Signup successful')
    }

    const handleLoginSuccess = () => {
        setIsLoggedIn(true)
        console.log('Login successful')
    }

    const handleLogout = () => {
        setIsLoggedIn(false)
        setIsSignedUp(false) 
        console.log('Logged out')
    }

    return (
        <div className="App">
        <header className="App-header">
            {!isSignedUp ? (
                <SignupForm onSignupSuccess={handleSignupSuccess} />
            ) : !isLoggedIn ? (
                <LoginForm onLoginSuccess={handleLoginSuccess} />
            ) : (
                <div>
                    <p>Welcome, you're logged in!</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            )}
        </header>
    </div>
    )
}

export default App
