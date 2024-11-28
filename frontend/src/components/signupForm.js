import { useState } from "react"


const Signup = () => {
    const [formData, setFormData] = useState({
        nick: '',
        password: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        
        try {
            const response = await fetch('http://localhost:3001/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nick: formData.nick,  
                    password: formData.password 
                })
            })

            const data = await response.json()
            console.log('Response from server:', data)
        } catch (error) {
            console.error('Error:', error)
        }
    }

    
    const handleInputChange = (e) => 
        setFormData(prevData => ({
            ...prevData,
            [e.target.id]: e.target.value 
        }))

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nick">Nick: </label>
                <input
                    type="text"
                    id="nick"
                    value={formData.nick}
                    onChange={handleInputChange} 
                    placeholder="Nick"
                />
                <br />

                <label htmlFor="password">Pass: </label>
                <input
                    type="password"
                    id="password"
                    value={formData.password}
                    onChange={handleInputChange} 
                    placeholder="Password"
                />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Signup
