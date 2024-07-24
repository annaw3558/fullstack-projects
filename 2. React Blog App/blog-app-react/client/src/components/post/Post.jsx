import './post.css'

export default function Post() {
  return (
        <>
            <div className='post'>
                <img 
                    className='postImg'
                    src='https://peakvisor.com/photo/Alberta-Canada-Banff-National-Park.jpg'
                    alt='Post'
                />
                <div className='postInfo'>
                    <div className='postCategories'>
                        <span className='postCategory'>Music</span>
                        <span className='postCategory'>Life</span>
                    </div>
                    <span className='postTitle'>Lorem ipsum</span>
                    <hr/>
                    <span className='postDate'>1 hour ago</span>
                </div>
                <p className="postDescription">
                    Lorem ipsum, dolor sit amet consectetur adipisicing 
                    elit. A deserunt perspiciatis consectetur sapiente 
                    impedit perferendis, voluptates alias. 
                    Lorem ipsum, dolor sit amet consectetur adipisicing 
                    elit. A deserunt perspiciatis consectetur sapiente 
                    impedit perferendis, voluptates alias.
                    Lorem ipsum, dolor sit amet consectetur adipisicing 
                    elit. A deserunt perspiciatis consectetur sapiente 
                    impedit perferendis, voluptates alias.
                </p>
            </div>
        </>
  )
}
