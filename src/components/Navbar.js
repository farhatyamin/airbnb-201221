import React from 'react'
import './Nav.css';
import Search from './Search';
import Cover from './Cover.JPG'


export default function Navbar() {
    return (
        <div>
            <div className='navbox'>
                <div className="navitems">Location <br />
                    <div className='inneritem' >Where you are going</div>
                </div>
                <div className="navitems">Check In <br />
                    <div className='inneritem' >Add Dates</div>
                </div>
                <div className="navitems">Check Out <br />
                    <div className='inneritem' >Add Dates</div>
                </div>
                <div className="navitems">Guests <br />
                    <div className='inneritem' >Add Guests</div>
                </div>
                <Search/>
            </div>
            
            
            <div className="Cover">
                    <img src={Cover} alt="Cover" width="1000" height="auto" />
                    <div className='slogan'>Not Sure where to Go? Perfect</div>
                    <button className='btn'>I'm Flexible</button>
            </div>
            
        </div>
    )
}
