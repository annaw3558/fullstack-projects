import './header.css'

export default function Header() {
  return (
    <div className='header'>
        <div className='headerTitles'>
            <span className='headerTitlesSmall'>React and Node</span>
            <span className='headerTitlesLarge'>Blog</span>
        </div>
        <img 
            className='headerImg' 
            src='https://www.avenuecalgary.com/wp-content/uploads/2020/03/Calgary-Skyline-with-Mountain-View.jpg' 
            alt='img'>    
        </img>
    </div>
  )
}
