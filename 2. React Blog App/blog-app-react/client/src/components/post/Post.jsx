import './post.css'
import { Link } from "react-router-dom"

export default function Post({post}) {
    const imgPath = "http://localhost:8080/img/"; 
    return (
        <>
            <div className='post'>
                {post.photo && (
                    <img 
                        className='postImg'
                        src={imgPath + post.photo}
                        alt='Post'
                    />
                )}
                <div className='postInfo'>
                    <div className='postCategories'>
                        {post.categories.map((c)=> (
                            <span className='postCategory'>
                                {c.name}
                            </span>
                        ))}
                    </div>
                    <Link to={`/post/${post._id}`} className='link'>
                        <span className='postTitle'>{post.title}</span>
                    </Link>
                    <hr/>
                    <span className='postDate'>{new Date(post.createdAt).toDateString()}</span>
                </div>
                <p className="postDescription">
                    {post.desc}
                </p>
            </div>
        </>
    )
}
