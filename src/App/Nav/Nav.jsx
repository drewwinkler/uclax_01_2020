import React, { useState,useEffect } from 'react';
import './Nav.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {

//STATE
    const[ showMenu, updateShowMenu ] = useState(true);
    const[ isSmall, updateIsSmall ] = useState(true);

    //FUNCTIONS / Methods
    //Hamburger Click
    const handlehamburgerclick =() => {
        console.log('You hit the hamburger');
        
        let timbuktu;
        
        if (showMenu === true) {
                timbuktu = false;
        } else {
            timbuktu = true;
        }

        updateShowMenu(timbuktu);
    }

    //Checking for Small view or medium/Large
    const handleIsSmall = () => {
        
        console.log('isSmall', isSmall);

        let newValue;

            if (window.innerWidth > 599) {
                updateIsSmall (false);
                updateShowMenu(true);
            } else {
                updateIsSmall (true);
                updateShowMenu(false);
            }
    }


    //useEffect says only do this when our Nav mounts for the firt time
    useEffect(()=>{
    window.addEventListener('resize', handleIsSmall);
    handleIsSmall();//fire off when page first loads.
    }, []);

    return (
        <nav className='Nav'>
            {
                isSmall &&
            <div className="hamburger" onClick={ handlehamburgerclick } >
                <FontAwesomeIcon icon={ faBars } />
                </div>
        }
        {
            showMenu &&
        <div className="links">
            <a href="#">Welcome</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
            </div>
        } 

        </nav>
    )
};

export default Nav;