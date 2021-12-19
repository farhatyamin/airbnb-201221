import React from 'react'
import Logo from './Logo.JPG'
import './Header.css'
import Worldicon from './Worldicon.JPG'
import Searchicon from './Searchicon.JPG'

export default function Header() {
    return (
        <>
            <div className='grid'>
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <div className="mid">
                    <li className="li"> <a href="#">Place to Stay</a></li>
                    <li className="li"><a href="#">Experiences </a> </li>
                    <li className="li"><a href="#">Online Experiences </a> </li>
                </div>

                <div className="right">
                    <li className="li"><a href="#">Become a Host</a></li>
                    <div className="Worldicon">
                        <img src={Worldicon} alt="Worldicon" />
                    </div>
                    <div className="Searchicon">
                        <img src={Searchicon} alt="Searchicon" />
                    </div>
                </div>
            </div>
        </>
    )
}
