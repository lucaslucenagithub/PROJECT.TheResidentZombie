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
                name: username,
                password,
            }

            const response = await api.post('login', data)

            localStorage.setItem('survivorId', response.data.result.id)
            localStorage.setItem('username', username)

            console.log(response)

            history.push('/home')
        } catch (err) {
            alert(err.response.data.message)
        }
    }

    return (
        <div className="logon-container">
            <section className="form-logon">

                <form onSubmit={handleLogin}>
                    <h1 className="header"> Login </h1>
                    <input placeholder="username" value={username} onChange={e => setUsername(e.target.value)} />
                    <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button className="button-login" type="submit"> Login </button>
                    <Link className="back-link" to="/signup">
                        Create an account
                    </Link>
                </form>
            </section>
        </div>
    )
}