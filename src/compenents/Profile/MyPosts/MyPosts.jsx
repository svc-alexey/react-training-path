import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <div>My Posts</div>
            <div> New Post</div>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <br/>
            <button>Click</button>
            <div className={s.posts}>
            <Post message="Hello! How are you?"/>
            <Post message="Its my first post"/>
            </div>
        </div>
    );
}

export default MyPosts;