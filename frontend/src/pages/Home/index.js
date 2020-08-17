import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

import api from '../../services/api'
import './style.css'

export default function Home() {

    const history = useHistory()

    function handleLogOut()
    {
        localStorage.clear()
        history.push('/')
    }

    return (
        <div className="tabs-home">
            <button type="button" class="btn-logout" onClick={handleLogOut}>
                Log out
            </button>
        </div>
    )
}