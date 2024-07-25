import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './sidebar.css';

export default function Sidebar() {

    const [cats, setCats] = useState([]);
    useEffect(() => {
        const getCats = async ()=> {
            const res = await axios.get("/categories")
            setCats(res.data);
        };
        getCats();
    })

  return (
      <>
        <div className='sidebar'>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>About Me</span>
                <img
                    className='sidebarImg'
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    alt="img"
                />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Odit maxime, rerum corrupti itaque et ducimus explicabo 
                    cumque assumenda commodi.
                </p>
            </div>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>Categories</span>
                <ul className='sidebarList'>
                    {cats.map((c) =>(
                        <Link to={`/?cat=${c.name}`} className='link'>
                            <li className='sidebarListItem'>{c.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className='sidebarSocialTitle'>Follow Me</span>
                <div className="sidebarSocial">
                    <i className='sidebarIcon fab fa-facebook-square'></i>
                    <i className='sidebarIcon fab fa-twitter-square'></i>
                    <i className='sidebarIcon fab fa-github-square'></i>
                    <i className='sidebarIcon fab fa-instagram-square'></i>
                    <i className='sidebarIcon fab fa-pinterest-square'></i>
                </div>
            </div>
        </div>
      </>
    
  )
}
