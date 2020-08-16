import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import api from '../../services/api'
import './style.css'

export default function SignUp() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [age, setAge] = useState('')

    const history = useHistory()

    async function handleSignup(e) {
        e.preventDefault()

        const data = {
            username,
            password,
            age,
        }

        try {
            await api.post('survivors', data)

            alert('Sucess')
            history.push('/')
        } catch (err) {
            alert('An error occurred while trying to register')
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <h1 className="header-signup"> Sign up </h1>
                    <p> Register your survivor account </p>
                </section>
                <form className="form-signup" onSubmit={handleSignup}>
                    <input placeholder="username" value={username} onChange={e => setUsername(e.target.value)} />
                    <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <input type="number" placeholder="age" value={age} onChange={e => setAge(e.target.value)} />
                    {/* <div className="input-group">
                        <input placeholder="Cidade" value={city} onChange={e => setCity(e.target.value)} />
                        <input placeholder="UF" value={uf} onChange={e => setUf(e.target.value)} style={{ width: 80 }} />
                    </div> */}
                    <button className="button-signup" type="submit"> Sign up </button>
                    <Link className="back-link" to="/">
                        Back to login
                    </Link>
                </form>
            </div>
        </div>
    )
}