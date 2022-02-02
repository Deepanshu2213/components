import React from 'react';

const CommentDetail = (prop)=>{
    
return (
    
    <div className="comment">
    <a href="/" className="avatar">
      <img alt="avatar" src="https://images.macrumors.com/t/Nef1flhQYBFH40BZXBYVOXz5d0Q=/1600x0/article-new/2017/11/crying-tears-of-joy-emoji.jpg"/>
    </a>
    <div className="content">
      <a href="/" className="author">{prop.author}</a>
      <div className="metadata">
        <span className="date">{prop.time}</span>
      </div>
      <div className="text">{prop.content}</div>
    </div>
  </div>
);
};
export default CommentDetail;