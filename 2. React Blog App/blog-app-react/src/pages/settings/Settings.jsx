import './settings.css'
import Sidebar from '../../components/sidebar/Sidebar'

export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">
                    Update your account
                </span>
                <span className="settingsDeleteTitle">
                    Delete Account
                </span>
            </div>
            <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsProfilePicture">
                    <img 
                        src='https://peakvisor.com/photo/Alberta-Canada-Banff-National-Park.jpg' 
                        alt="" 
                        className="writeImg" 
                    />  
                    <label htmlFor='fileInput'>
                        <i className='settingsProfileIcon far fa-user-circle'></i>
                    </label>
                    <input type='file' id='fileInput' style={{display:'none'}}/>
                </div>
                <label>User Name:</label>
                <input type='text' placeholder="Name"/>
                <label>Email:</label>
                <input type='text' placeholder="Email"/>
                <label>Password:</label>
                <input type='password'/>
                <button className="settingsSubmit">Update</button>
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}
