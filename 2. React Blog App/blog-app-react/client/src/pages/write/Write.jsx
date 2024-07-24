import './write.css'

export default function Write() {
  return (
    <div className='write'>
        <img 
            src='https://peakvisor.com/photo/Alberta-Canada-Banff-National-Park.jpg' 
            alt="" 
            className="writeImg" 
        />
      <form action="" className="writeForm">
        <div className="writeFormGroup">
            <label htmlFor='fileInput'>
                <i class='writeIcon fas fa-plus'></i>
            </label>
            <input type='file' id='fileInput' style={{display:'none'}}/>    
            <input type='text' placeholder='Title' className='writeInput' autoFocus={true}/>    
        </div>  
        <div className="writeFormGroup">
            <textarea 
                placeholder='Write your post...' 
                type='text'
                className=' writeInput writeText'
            ></textarea>
        </div>
        <button className="writeSubmit">
            Publish
        </button>
      </form>
    </div>
  )
}
