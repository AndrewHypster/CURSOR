import React from 'react';
import ReactDOM from 'react-dom/client';

function Post() {
  const author = {
    name: "Anakin skywalker",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyM-124CwyRNspiiL7l29WAycZ0V7POw3tKw&usqp=CAU",
    nickname: "@dart_vader"
  }

  const day = Date().split(' ').slice(1,5).join(' ');
  const content="WTF? Who is Ray? Why she is Skywalker? Luke...?";

  const reaction = {
    comments: 482,
    spreads: 146,
    likes: 887,
    likeHref: "https://cdn-icons-png.flaticon.com/512/181/181527.png",
    downloads: 0
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  const likeImg = document.getElementById('likeImg');

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

  return (
      <div className='post'>
        <div className="author">
          <img src={author.photo} className='author-photo'/>
          <b>{author.name}</b>
          <img src='https://www.genzhiphop.com/wp-content/uploads/2021/09/Legitly-Verified-Blue-Badge-top-page.png' className="verified"/>
          <a href="#">{author.nickname}</a>
          <p>{day}</p>
        </div>
        <content>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{content}</p>
          <div>
            <img src="https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale"/>
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
