import './settings.css'
import Sidebar from '../../components/sidebar/Sidebar'
import { Context } from "../../context/Context"
import { useContext, useState } from 'react';
import axios from "axios";
// todo add about me section, about page, contact page

export default function Settings() {

    const { user, dispatch } = useContext(Context);

    const [file, setFile] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);

    const imgPath = "http://localhost:8080/img/";

    const handleUpdate = async (e) => {
    e.preventDefault();
    dispatch({type: "UPDATE_START"})
    const updatedUser = {
      userID: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name; 
      data.append("name", fileName)
      data.append("file", fileName)

      try {
        await axios.post("/upload", data)
      } catch(err) { }
    }
    try {
      const res = await axios.put("/users/"+ user._id, updatedUser);
      setSuccess(true);
        dispatch({type: "UPDATE_SUCCESS", payload: res.data})
    } catch(err) { 
        dispatch({type: "UPDATE_ERROR"})
    }
  };

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
            <form className="settingsForm" onSubmit={handleUpdate}>
                <label>Profile Picture</label>
                <div className="settingsProfilePicture">
                    <img 
                        src={file ?  URL.createObjectURL(file) : imgPath + user.profilePic} 
                        alt="" 
                        className="writeImg" 
                    />  
                    <label htmlFor='fileInput'>
                        <i className='settingsProfileIcon far fa-user-circle'></i>
                    </label>
                    <input type='file' id='fileInput' style={{display:'none'}}/>
                </div>
                <label>Username:</label>
                <input t
                    ype='text' 
                    placeholder={user.username} 
                    onChange={e=>setUsername(e.target.value)}/>
                <label>Email:</label>
                <input 
                    type='text' 
                    placeholder={user.email} 
                    onChange={e=>setEmail(e.target.value)}
                />
                <label>Password:</label>
                <input 
                    type='password'
                    placeholder={user.password} 
                    onChange={e=>setPassword(e.target.value)}
                />
                <button className="settingsSubmit" type="submit">Update</button>
                {/* todo css for button */}
            {success && <span>Profile has been updated.</span>}
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}
