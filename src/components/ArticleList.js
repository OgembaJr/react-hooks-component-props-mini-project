import React from 'react';
import Article from './Article';

function ArticleList({posts}){
// console.log(posts)

 const AllPosts = posts.map((post)=> 
    <Article 
    key = {post.id}
    title = {post.title}
    date = {post.date}
    preview = {post.preview}
    minutes = {post.minutes}
    />
 )
   
    return (
        <main>
          {AllPosts}
        </main>
    )
}
export default ArticleList;