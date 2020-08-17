import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

import api from '../../services/api'
import './style.css'

export default function SignUp() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [age, setAge] = useState('')
    const [items, setItems] = useState([])
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    const itemsExample = [
        { id: 1, name: "First", points: 2, amount: 0 },
        { id: 2, name: "Second", points: 2, amount: 0 },
        { id: 3, name: "Third", points: 2, amount: 0 }
    ]

    useEffect(() => {

        getItems().catch((err) => (alert(err)))

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;

                setLatitude(latitude);
                setLongitude(longitude);
            },
            (err) => {
                alert(err);
            },
            {
                timeout: 30000,
            }
        )
    }, [])

    useEffect(() => {

        getItems().catch((err) => (alert(err)))

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;

                setLatitude(latitude);
                setLongitude(longitude);
            },
            (err) => {
                alert(err);
            },
            {
                timeout: 30000,
            }
        )
    }, [items])

    async function getItems() {

        const result = await api.get('items')

        setItems(result.data)
    }

    const history = useHistory()

    async function handleSignup(e) {
        e.preventDefault()

        const data = {
            name: username,
            password,
            age,
            latitude,
            longitude,
            items
        }

        try {

            let invalidAmount = items.filter((item) => (
                item.amount >= 100000
            ))

            if (invalidAmount.length > 0) {
                alert('Am I supossed to believe that in a apocalypse you have that amount of items?')
                return
            }

            await api.post('survivors', data)

            alert('Sucess! Now you can login')
            history.push('/')

        } catch (err) {
            alert(err.message)
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

                    <table className="items-table">
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map(item => (
                                <tr>
                                    <td>{item.name}</td>
                                    <input placeholder={item.amount} onChange={(e) => { item.amount = e.target.value }} className="items-amount-input" type="number" />
                                    <input value={item.id} className="id-item" type="number" hidden="true" />
                                    <input value={item.points} className="points-item" type="number" hidden="true" />
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <button className="button-signup" type="submit"> Sign up </button>
                    <Link className="back-link" to="/">
                        Back to login
                    </Link>
                </form>
            </div>
        </div >
    )
}