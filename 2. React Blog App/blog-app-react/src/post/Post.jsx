import './post.css'

export default function Post() {
  return (
      <>
        <div classname='post'>
            <img 
                className='postImg'
                src=''
                alt='Post'
            />
            <div className='postInfo'>
                <div className='postCats'>
                <div className='postCat'>Music</div>
                <div className='postCat'>Life</div>
            </div>
            <span className='postTitle'>
                Lorem ipsum
            </span>
            <hr/>
                <span className='postDate'>1 hour ago</span>
            </div>
        </div>
      </>
  )
}
