import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { useNavigate, useNavigation } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { baseUrl } from '../baseUrl';
import Header from '../components/Header';
import BlogDetails from '../components/BlogDetails';

function BlogPage() {
    const [blog, setBlog] = useState(null);
    const[relatedblogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const{setLoading, loading} = useContext(AppContext);

    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs(){
        setLoading(true);
        let url = `${baseUrl}?blogId=${blogId}`;
        try{
            const res = await fetch(url);
            const data = await res.json();
            setBlog(data.blog);
            setRelatedBlogs(data.relatedblogs);
        }
        catch(error){
            console.log("Error come in blog id when it call");
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);

    }


    useEffect( () => {
        if(blogId){
            fetchRelatedBlogs();
        }
    }, [location,pathname])

  return (
    <div>
       <Header/>
       <div>
        <button
        onClick={() => navigation(-1)}
        >
            Back
        </button>
        </div> 
        {
            loading ? 
            (<div>
                <p>Loading</p>
            </div>) : 
            blog ?
            (<div>
                <BlogDetails post={blog}/>
                <h2>Related Blogs</h2>
                {
                    relatedblogs.map((post) =>{
                        <div key={post.id}>
                            <BlogDetails post={post}/>
                        </div>
                    } )
                }
            </div>) :
            (<div>
                <p>No Blog Found</p>
            </div>)
           
        }
        
        
    </div>
  )
}

export default BlogPage