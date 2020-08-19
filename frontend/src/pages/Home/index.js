import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

import Modal from '../../components/modalTrade/index'

import api from '../../services/api'
import './style.css'

export default function Home() {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [users, setUsers] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    const history = useHistory()

    const id = localStorage.getItem('survivorId')
    const username = localStorage.getItem('username')

    useEffect(() => {

        let usersList = []

        async function getUsers() {
            const result = await api.get('survivors')
            setUsers(result.data.survivor)
        }

        getUsers()
            .catch(function (err) {
                alert(err)
            })
    }, [])

    function handleLogOut() {
        localStorage.clear()
        history.push('/')
    }

    function showModal() {
        setModalVisible(true)
    }

    function hideModal() {
        setModalVisible(false)
    }

    async function handleUpdateCoords() {
        try {

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

            const data = {
                id,
                latitude,
                longitude,
            }

            await api.put('survivors/coords', data)

            alert('coords updated sucessful')
        }
        catch (err) {
            alert(err)
        }
    }

    async function handleInfect(survivorId) {
        try {
            await api.post(`survivors/${survivorId}/infect`)
            alert('infect report sent sucessful')
        } catch (error) {
            alert(error.response.data.message)
        }
    }

    return (
        <>
            <div className="wrapper">
                <div className="sidebar">
                    {/* {modalVisible && <Modal onClose={() => { hideModal() }} show={modalVisible} />} */}
                    <h2>Survivors</h2>
                    <h3>Select one to trade</h3>
                    <ul>
                        {
                            users.map(item => (
                                <li key={item.id}>
                                    {item.name}
                                    <div className="users-btn">
                                        <a className="trade-btn" href="#" onClick={() => { showModal() }}>Trade</a>
                                        <a className="infect-btn" href="#" onClick={() => { handleInfect(item.id) }}>Infect</a>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="main_content">
                    <div className="header">
                        <a href="#" onClick={handleUpdateCoords}>Keep your coordinates updated, {username}</a>
                        <a type="button" className="btn-logout" onClick={handleLogOut}>
                            Log out
                     </a>
                    </div>
                    <h1>Make trades in real time with other survivors, report an infected person, or just check the data below</h1>
                    <div className="info">
                        <h2>Report</h2>
                        <ul className="report">
                            <li className="percentage-infected">
                                Percentage of infected survivors: <b>50%</b>
                            </li>
                            <li className="percentage-non-infected">
                                Percentage of non-infected survivors: <b>50%</b>
                            </li>
                            <li className="average-amount-items">
                                The average amount of each kind of resource by the survivor: <b>5</b>
                            </li>
                            <li className="points-lost">
                                Points lost because of an infected survivor: <b>5000</b>
                            </li>
                        </ul>
                    </div>
                    <div className="inventory">
                        <h2>My inventory</h2>
                        <ul className="items-inventory">
                            <li>
                                <b>Item1:</b> 200 quantity
                            </li>
                            <li>
                                <b>Item2:</b> 200 quantity
                            </li>
                            <li>
                                <b>Item3:</b> 200 quantity
                            </li>
                            <li>
                                <b>Item4:</b> 200 quantity
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}