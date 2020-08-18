import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

import api from '../../services/api'
import './style.css'

export default function Home() {

    const history = useHistory()

    function handleLogOut() {
        localStorage.clear()
        history.push('/')
    }

    return (
        <>
            <div className="wrapper">
                <div className="sidebar">
                    <h2>Survivors Online</h2>
                    <h3>Select one to trade</h3>
                    <ul>
                        <li><a href="#">Usuario1</a></li>
                        <li><a href="#">Usuario2</a></li>
                        <li><a href="#">Usuario3</a></li>
                    </ul>
                </div>
                <div className="main_content">
                    <div className="header">
                        Welcome
                    <a type="button" className="btn-logout" onClick={handleLogOut}>
                            Log out
                     </a>
                    </div>
                    <div className="info">
                        <div>Make trades in real time with other survivors, report an infected person, or just check the data below</div>
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
                </div>
            </div>
        </>
    )
}