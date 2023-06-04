import React from 'react';
import './post.css';

function Post (prop) {
  const post = prop.post;

  const like = e => {
    if (e.target.currentSrc === 'https://cdn-icons-png.flaticon.com/512/181/181527.png'){
      e.target.nextSibling.innerHTML++;
      e.target.src='https://cdn-icons-png.flaticon.com/512/3179/3179413.png';
    } else {
      e.target.nextSibling.innerHTML--;
      e.target.src='https://cdn-icons-png.flaticon.com/512/181/181527.png';
    }
  }

  const isPhoto = photo => {
    if (photo.split('youtube').length === 2) {
      return <iframe width="500" height="300" src={photo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    }
    else return <img src={photo}/>
  }

  return (
    <div className='post' key={post.id}>
      <div className="author">
        <img src={post.icon} className='author-photo'/>
        <b>{post.name}</b>
        <img src='https://www.genzhiphop.com/wp-content/uploads/2021/09/Legitly-Verified-Blue-Badge-top-page.png' className="verified"/>
        <a href="#">{post.nickname}</a>
        <p>{post.date}</p>
      </div>
      <content>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{post.content}</p>
        <div className='photoVideo'>
          {isPhoto(post.photo)}
        </div>
      </content>
      <div id="reaction">
        <div className='comment'>
          <img src="https://icons-for-free.com/iconfiles/png/512/chat+comment+communication+message+talk+text+icon-1320166550137140710.png" alt='comment' onClick={e => e.target.nextSibling.innerHTML++}/>
          <p>{post.comments}</p>
        </div>
        <div className='spread'>
          <img src="https://cdn-icons-png.flaticon.com/512/5825/5825574.png" alt='spread' onClick={e => e.target.nextSibling.innerHTML++}/>
          <p>{post.spreads}</p>
        </div>
        <div id='like'>
          <img src={post.likeHref} accessKey='active' alt='like' onClick={e => like(e)}/>
          <p>{post.likes}</p>
        </div>
        <div className='download'>
          <img src="https://static.thenounproject.com/png/36971-200.png" alt='dovnlod' onClick={e => e.target.nextSibling.innerHTML++}/>
          <p>{post.downloads}</p>
        </div>
      </div>
    </div>
  );
}

export default Post;