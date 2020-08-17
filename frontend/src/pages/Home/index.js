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
                    <ul>
                        <li><a href="#"><i className="fas fa-home"></i>Home</a></li>
                        <li><a href="#"><i className="fas fa-user"></i>Profile</a></li>
                        <li><a href="#"><i className="fas fa-address-card"></i>About</a></li>
                        <li><a href="#"><i className="fas fa-project-diagram"></i>portfolio</a></li>
                        <li><a href="#"><i className="fas fa-blog"></i>Blogs</a></li>
                        <li><a href="#"><i className="fas fa-address-book"></i>Contact</a></li>
                        <li><a href="#"><i className="fas fa-map-pin"></i>Map</a></li>
                    </ul>
                </div>
                <div className="main_content">
                    <div className="header">Home
                    <a type="button" className="btn-logout" onClick={handleLogOut}>
                            Log out
                     </a>
                    </div>
                    <div className="info">
                        <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A sed nobis ut exercitationem atque accusamus sit natus officiis totam blanditiis at eum nemo, nulla et quae eius culpa eveniet voluptatibus repellat illum tenetur, facilis porro. Quae fuga odio perferendis itaque alias sint, beatae non maiores magnam ad, veniam tenetur atque ea exercitationem earum eveniet totam ipsam magni tempora aliquid ullam possimus? Tempora nobis facere porro, praesentium magnam provident accusamus temporibus! Repellendus harum veritatis itaque molestias repudiandae ea corporis maiores non obcaecati libero, unde ipsum consequuntur aut consectetur culpa magni omnis vero odio suscipit vitae dolor quod dignissimos perferendis eos? Consequuntur!</div>
                        <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A sed nobis ut exercitationem atque accusamus sit natus officiis totam blanditiis at eum nemo, nulla et quae eius culpa eveniet voluptatibus repellat illum tenetur, facilis porro. Quae fuga odio perferendis itaque alias sint, beatae non maiores magnam ad, veniam tenetur atque ea exercitationem earum eveniet totam ipsam magni tempora aliquid ullam possimus? Tempora nobis facere porro, praesentium magnam provident accusamus temporibus! Repellendus harum veritatis itaque molestias repudiandae ea corporis maiores non obcaecati libero, unde ipsum consequuntur aut consectetur culpa magni omnis vero odio suscipit vitae dolor quod dignissimos perferendis eos? Consequuntur!</div>
                        <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A sed nobis ut exercitationem atque accusamus sit natus officiis totam blanditiis at eum nemo, nulla et quae eius culpa eveniet voluptatibus repellat illum tenetur, facilis porro. Quae fuga odio perferendis itaque alias sint, beatae non maiores magnam ad, veniam tenetur atque ea exercitationem earum eveniet totam ipsam magni tempora aliquid ullam possimus? Tempora nobis facere porro, praesentium magnam provident accusamus temporibus! Repellendus harum veritatis itaque molestias repudiandae ea corporis maiores non obcaecati libero, unde ipsum consequuntur aut consectetur culpa magni omnis vero odio suscipit vitae dolor quod dignissimos perferendis eos? Consequuntur!</div>
                    </div>
                </div>
            </div>
        </>
    )
}