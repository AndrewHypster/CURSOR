import { useDispatch, useSelector } from "react-redux";
import { useState } from "react"
import { setNewPostAction } from "./store/actions/newPost.actions";
import Post from "./Post";
import './posts.css'

export default function Posts () {
  const dispatch = useDispatch()

  const [user, setUser] = useState('Cycid')
  const [text, setText] = useState('')
  const [hrefPhoto, setHrefPhoto] = useState('')

  const { posts } = useSelector(state => state.newPost)
  const { users } = useSelector(state => state.users)

  const day = Date().split(' ').slice(1,5).join(' ');
  const publish = () => dispatch(setNewPostAction(user, users[user].nickname, users[user].icon, text, hrefPhoto, day));

  const isPublishing = () => {
    if (text !== '' & hrefPhoto !== '') publish()
    else alert('Заповніть всі поля')
  }

  return (
    <div className="wrapper">
      <div className="Posts">
        <div className="Form">
          <select onChange={e => setUser(e.target.value)}>
            <option value="Cycid">Cycid</option>
            <option value="DidPetr">DidPetr</option>
            <option value="Olenka">Olenka</option>
            <option value="Ghost">Ghost</option>
            <option value="Bob">Bob</option>
            <option value="Patrick">Patrick</option>
            <option value="User153">User153</option>
          </select>
          <input type="text" placeholder={`Що у вас на думці ${user}?`} onChange={e => setText(e.target.value)} />
          <input type="text" placeholder="Силка на фото" onChange={e => setHrefPhoto(e.target.value)} />
          <button onClick={isPublishing}>Publish</button>
        </div>
        <div className="Body">
        {posts.map(post => <Post post={post} />)}
        </div>
      </div>
    </div>
    
  )
}