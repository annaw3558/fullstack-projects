import './sidebar.css'

export default function Sidebar() {
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
                    <li className='sidebarListItem'>Life</li>
                    <li className='sidebarListItem'>Music</li>
                    <li className='sidebarListItem'>Style</li>
                    <li className='sidebarListItem'>Sport</li>
                    <li className='sidebarListItem'>Cinema</li>
                    <li className='sidebarListItem'>Tech</li>
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
