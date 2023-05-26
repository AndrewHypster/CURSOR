import React from 'react';
import ReactDOM from 'react-dom/client';
import './post.css';

function Post (prop) {
  const author = prop.post[0];
  const content = prop.post[0].content;
  const photo = prop.post[0].photo;
  const reaction = prop.post[1];

  const day = Date().split(' ').slice(1,5).join(' ');

  let i=1;
  const like = () => {
    if (i){
      reaction.likes++;
      reaction.likeHref='https://cdn-icons-png.flaticon.com/512/3179/3179413.png';
      i--;
    } else {
      reaction.likes--;
      reaction.likeHref='https://cdn-icons-png.flaticon.com/512/181/181527.png';
      i++;
    }
    ReactDOM.createRoot(document.getElementById("likes")).render(
      <div>
        <img src={reaction.likeHref} onClick={like}/>
        <p>{reaction.likes}</p>
      </div>
    );
  }

  const isPhoto = photo => {
    if (photo.split('youtube').length === 2) {
      return <iframe width="500" height="300" src={photo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    }
    else return <img src={photo}/>
  }

  return (
    <div className='post' key={prop.key}>
      <div className="author">
        <img src={author.icon} className='author-photo'/>
        <b>{author.name}</b>
        <img src='https://www.genzhiphop.com/wp-content/uploads/2021/09/Legitly-Verified-Blue-Badge-top-page.png' className="verified"/>
        <a href="#">{author.nickname}</a>
        <p>{day}</p>
      </div>
      <content>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{content}</p>
        <div className='photoVideo'>
          {isPhoto(photo)}
        </div>
      </content>
      <div id="reaction">
        <div>
          <img src="https://icons-for-free.com/iconfiles/png/512/chat+comment+communication+message+talk+text+icon-1320166550137140710.png"/>
          <p>{reaction.comments}</p>
        </div>
        <div>
          <img src="https://cdn-icons-png.flaticon.com/512/5825/5825574.png"/>
          <p>{reaction.spreads}</p>
        </div>
        <div id='likes'>
          <img src={reaction.likeHref} onClick={like}/>
          <p>{reaction.likes}</p>
        </div>
        <div>
          <img src="https://static.thenounproject.com/png/36971-200.png"/>
          <p>{reaction.downloads}</p>
        </div>
      </div>
    </div>
  );
}

export default Post;