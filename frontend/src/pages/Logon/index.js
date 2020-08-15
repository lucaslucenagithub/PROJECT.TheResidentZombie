import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import api from '../../services/api'

import './style.css'

export default function Logon() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    async function handleLogin(e) {
        e.preventDefault()
        try {
            const data = {
                username,
                password,
            }

            const response = await api.post('login', data)

            localStorage.setItem('survivorId', response.id)

            history.push('/profile')
        } catch (err) {
            alert('Login failed')
        }
    }

    return (
        <div className="logon-container">
            <section className="form">

                <form onSubmit={handleLogin}>
                    <h1 className="header"> Login </h1>
                    <input placeholder="username" value={username} onChange={e => setUsername(e.target.value)} />
                    <input placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button className="button" type="submit"> Entrar </button>
                    <Link className="back-link" to="/signup">
                        Create an account
                    </Link>
                </form>
            </section>
        </div>
    )
}