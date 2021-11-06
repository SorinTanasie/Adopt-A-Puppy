import { useState } from 'react';
import './navigation.style.scss'

const Navigation = () =>{
const [active,setActive] = useState(false)

    return(
        <div className="nav-container">
            <div className="nav">
                <div className="icon" onClick={()=>setActive(!active)}>
                    {active? <i class="fa-solid fa-x"></i> :<i class="fas fa-bars"></i>}
                </div>

                <h3 className="title">Location</h3>

                <img src="" alt="Profile picture" className="profile-picture" />
            </div>

            {active? 
            <div className="nav-menu">
                <ul className="menu-list">
                    <li>Acasa</li>
                    <li>Profile</li>
                    <li>Despre noi</li>
                </ul>
            </div>
            :
            null}
        </div>
    );
}

export default Navigation;