import React, { useState, useEffect } from "react";
import {Link as RouterLink} from 'react-router-dom'
import { InstagramLogo, InstagramLogoMobile, Discovery, Home, Search, Reels, Messenger, Notification, Setting } from "../../assets/contants";
import './Sidebar.scss'
import { IoIosSearch } from "react-icons/io";
import { IoMdHome } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Avatar from '..//../assets/huan.jpg'


const Sidebar = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const sideBarItems = [
        {
            icon: < Home   />,
            text: "Home",
            link:"/",
        },
        {
            icon: < Search  />,
            text: "Search",
        },
        {
            icon: < Discovery  />,
            text: "Discovery",
        },
        {
            icon: < Reels  />,
            text: "Reels",
        },
        {
            icon: <Messenger />,
            text: "Messenger",
        },
        {
            icon: < Notification  />,
            text: "Notification",
        },
        {
            icon: <img src={Avatar} />,
            text: "Nguyễn Hữu Huân",
        },

    ]
    const SidebarFooter = [
        {
            icon: < Setting  />,
            text: "Setting",
        },
    ]
    return (
        <div className="sidebar-container">
            <div className="top">
                <div className="logo">
                    <RouterLink to="/">
                        {isMobile ? <InstagramLogoMobile /> : <InstagramLogo />}
                    </RouterLink>
                </div>
            </div>
            <div className="center">
                <ul className="sidebar-list">
                    {sideBarItems.map((item, index) => (
                        <li key={index} className="sidebar-item">
                            <RouterLink to={item.link} className="sidebar-link">
                                {item.icon}
                                <span className="sidebar-text">{item.text}</span>
                            </RouterLink>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="footer">
                <ul className="sidebar-list">
                    {SidebarFooter.map((item, index) => (
                        <li key={index} className="sidebar-item">
                            <RouterLink to={item.link} className="sidebar-link">
                                {item.icon}
                                <span className="sidebar-text">{item.text}</span>
                            </RouterLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar