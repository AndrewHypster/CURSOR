import { NEW_POST_COUNT_TYPE } from "../actions/newPost.actions"

const initialState = {
  posts: [{
    id:0,
    name:"Cycid",
    nickname:"Cycid&celo",
    icon:"https://dic.academic.ru/pictures/wiki/files/50/200px-boschselfportret.jpg",
    date:"Jun 04 2023 17:12:22",
    content:"Have you planted potatoes yet?",
    photo:"https://i.pinimg.com/originals/83/d2/3c/83d23c2177ada1e9631d09e2bd9a7271.jpg",
    comments:1646,
    spreads:134,
    likes:1135,
    likeHref:"https://cdn-icons-png.flaticon.com/512/181/181527.png",
    downloads:1423
  }]
}

const NewPostReduser = (state = initialState, action) => {
  switch (action.type) {
    case NEW_POST_COUNT_TYPE: {
      const random = () => Math.round(Math.random() * (2500 - 100) + 100);
      return {...state, posts: state.posts.concat(
          [{
            "id": state.posts.length,
            "name": action.payload[0],
            "nickname": action.payload[1],
            "icon": action.payload[2],
            "date": action.payload[5],
            "content": action.payload[3],
            "photo": action.payload[4],
            "comments": random(),
            "spreads": random(),
            "likes": random(),
            "likeHref": "https://cdn-icons-png.flaticon.com/512/181/181527.png",
            "downloads": random()
          }]
        )}
    }
    default: return state
  }
}

export default NewPostReduser