import './topbar.css'

export default function TopBar() {
  return (
    <div className='top'>
      <div className='topLeft'>
            left
            <i className='topIcon fab fa-facebook-square'></i>
            <i className='topIcon fab fa-twitter-square'></i>
            <i className='topIcon fab fa-github-square'></i>
            <i className='topIcon fab fa-instagram-square'></i>
            <i className='topIcon fab fa-pinterest-square'></i>
      </div>
      <div className='topCenter'>
          <ul className='topList'>
                <li className='topListItem'>Home</li>
                <li className='topListItem'>About</li>
                <li className='topListItem'>Contact</li>
                <li className='topListItem'>Write</li>
                <li className='topListItem'>Logout</li>
          </ul>
      </div>
      <div className='topRight'>
          <i className="topSearchIcon fas fa-search"></i>
          <i className="topIcon fa-solid fa-user"></i>
      </div>
    </div>
  )
}

