import './singlePost.css'

export default function SinglePost() {
  return (
    <div className='singlePost'>
        <div className='singlePostWrapper'>
            <img 
                src='https://peakvisor.com/photo/Alberta-Canada-Banff-National-Park.jpg'
                alt='Post' 
                className="singlePostImg" 
            />
            <h1 className="singlePostTitle">
                Lorem ipsum
                <div className="singlePostEdit">
                    <i className='singlePostIcon far fa-edit'></i>
                    <i className='singlePostIcon far fa-trash-alt'></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className='singlePostAuthor'>
                    Author: <b>Name</b>
                </span>
                <span className="singlePostDate">1 hour ago</span>
            </div>
            <p className='singlePostDescription'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Sed, vel perferendis, voluptatum, quis sint natus ea aut 
                eum commodi illum dignissimos expedita facilis. Rem, 
                aliquid aperiam quisquam ex magni accusamus.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Sed, vel perferendis, voluptatum, quis sint natus ea aut 
                eum commodi illum dignissimos expedita facilis. Rem, 
                aliquid aperiam quisquam ex magni accusamus.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Sed, vel perferendis, voluptatum, quis sint natus ea aut 
                eum commodi illum dignissimos expedita facilis. Rem, 
                aliquid aperiam quisquam ex magni accusamus.
            </p>
        </div>
    </div>
  )
}
