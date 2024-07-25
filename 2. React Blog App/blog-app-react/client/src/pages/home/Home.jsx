import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios"

import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.css'

export default function Home() {

const [posts, setPosts] = useState([]);

// const [search] = useLocation();
const {search} = useLocation();
// const location = useLocation();
// console.log(search.replace("user", "username"));
// console.log(location)
// console.log("/posts" + search);

useEffect(()=> {
  const fetchPosts = async()=> {
    const res = await axios.get("/posts" + search);
    console.log(res);
    setPosts(res.data);
  }
  fetchPosts()
}, [])

  return (
      <>
        <Header/>
        <div className='home'>
            <Posts posts={posts} />
            <Sidebar />
        </div>
      </>
    
  )
}
