import './write.css';
import { Context } from "../../context/Context"
import { useState, useContext } from 'react';
import axios from "axios";

export default function Write() {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState("");
  const {user} = useContext(Context)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      title,
      desc,
      username: user.username,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name; 
      data.append("name", fileName)
      data.append("file", fileName)

      newPost.photo = fileName;
      try {
        await axios.post("/upload", data)
      } catch(err) { }
    }
    try {
      const res = await axios.post("/posts", newPost)
      window.location.replace("/post/" + res.data._id)
    } catch(err) { }
  }

  return (
    <div className='write'>
        {file && (
          <img 
            src={URL.createObjectURL(file)}
            alt="" 
            className="writeImg" 
          />

        )}
        
      <form action="" className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
            <label htmlFor='fileInput'>
                <i className='writeIcon fas fa-plus'></i>
            </label>
            <input 
              type='file' 
              id='fileInput' 
              style={{display:'none'}} 
              onChange={e=>setFile(e.target.files[0])}
            />    
            <input 
              type='text' 
              placeholder='Title' 
              className='writeInput' 
              autoFocus={true}
              onChange={e=>setTitle(e.target.value)}
            />    
        </div>  
        <div className="writeFormGroup">
            <textarea 
                placeholder='Write your post...' 
                type='text'
                className=' writeInput writeText'
                onChange={e=>setDesc(e.target.value)}
            ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
            Publish
        </button>
      </form>
    </div>
  )
}
