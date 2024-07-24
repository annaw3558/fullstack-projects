import './topbar.css'
import {Link} from 'react-router-dom';

export default function TopBar() {
  const user = true;

  return (
    <div className='top'>
      {/* <div className='topLeft'>
            left
            <i className='topIcon fab fa-facebook-square'></i>
            <i className='topIcon fab fa-twitter-square'></i>
            <i className='topIcon fab fa-github-square'></i>
            <i className='topIcon fab fa-instagram-square'></i>
            <i className='topIcon fab fa-pinterest-square'></i>
      </div> */}
      <div className='topCenter'>
          <ul className='topList'>
                <li className='topListItem'>
                  <Link to='/' style={{textDecoration:'none', color:"inherit"}}>Home</Link>
                </li>
                <li className='topListItem'>
                  <Link to='/about' style={{textDecoration:'none', color:"inherit"}}>About</Link>
                </li>
                <li className='topListItem'>
                  <Link to='/contact' style={{textDecoration:'none', color:"inherit"}}>Contact</Link>
                </li>
                <li className='topListItem'>
                  <Link to='/write' style={{textDecoration:'none', color:"inherit"}}>Write</Link>
                </li>
                <li className='topListItem'>
                  {/* <Link to='/' style={{textDecoration:'none', color:"inherit"}}>Logout</Link> */}
                  {user && 'Logout'}
                </li>
          </ul>
      </div>
      <div className='topRight'>
          <i className="topSearchIcon fas fa-search"></i>
          {
          user ? (
            <i className="topIcon fa-solid fa-user"></i>
          ) : (
              <ul className='topList'>
                <li className='topListItem'>
                  <Link to='/login' style={{textDecoration:'none', color:"inherit"}}>Login</Link>
                </li>
                <li className='topListItem'>
                  <Link to='/register' style={{textDecoration:'none', color:"inherit"}}>Register</Link>
                </li>
              </ul>
          )
          }

      </div>
    </div>
  )
}

