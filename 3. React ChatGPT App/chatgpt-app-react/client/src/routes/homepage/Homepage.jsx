import './homepage.css'
import { Link } from "react-router-dom"

const Homepage = () => {

  return (
    <div className='homepage'>
      <img src="/orbital.png" alt="" className="orbital"/>
      <div className="left">
        <h1>Anna GPT</h1>
        <h2>Ask questions. Get answers.</h2>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas </h3>
        <Link to="/dashboard">Get Started</Link>

      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
          <div className="bg"></div>
            <img src="/bot.png" alt="" className="bot"/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Homepage