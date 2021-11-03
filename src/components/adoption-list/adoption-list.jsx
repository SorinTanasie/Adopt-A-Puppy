import Pet from '../pet/pet';
import { fetchPosts } from '../../API requests/api-requests';

import '../adoption-list/adoption-list.style.scss'
import { useEffect, useState } from 'react';

const AdoptionList = () =>{

    const [posts,setPosts] = useState ([]);

    useEffect(() =>{
        const getPosts = async () => {
            const posts = await fetchPosts();
            setPosts(posts)
        }

        getPosts();

    },[])

    return(
        <div className="adoption-list">
            {
                posts.map(post=>{
                    return(
                    <Pet
                    key = {post.objectid}
                    name = {post.name}
                    age = {post.age}
                    gender = {post.gender}
                    race = {post.race}
                    images = {post.images}
                    location = {post.location}
                    />
                    )
                })
            }
        </div>
    )

}

export default AdoptionList;