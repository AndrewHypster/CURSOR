const initialState = {
  users: {
    "Cycid": {
      icon: "https://dic.academic.ru/pictures/wiki/files/50/200px-boschselfportret.jpg",
      nickname: "Cycid&celo"
    },
    "DidPetr": {
      icon: "https://yt3.googleusercontent.com/ytc/AGIKgqM0bxouwSfvrfU4PuGWX-6ucPEfbu7d441HxI5S=s900-c-k-c0x00ffffff-no-rj",
      nickname: "iPetr_1956"
    },
    "Olenka": {
      icon: "https://baza.honchar.org.ua/upload/_thumbs/_site/5c14b29d0ec017cbb055b90ce2f77b45.jpg",
      nickname: "OlukMilk"
    },
    "Ghost": {
      icon: "https://images.pexels.com/photos/3993249/pexels-photo-3993249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      nickname: "whiteGhost"
    },
    "Bob": {
      icon: "https://media.graphassets.com/CqNntlMDRgKm9mYPIRNC",
      nickname: "Sponge_Bob"
    },
    "Patrick": {
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxe8QZ72X2OjC-JXTaRtlom0O2lq60v729ZA&usqp=CAU",
      nickname: "Patrick_Star"
    },
    "User153": {
      icon: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
      nickname: "User153"
    }
  }
}

const UsersReduser = (state = initialState, action) => {
  switch (action.type) {
    default : {
      return initialState
    }
  }
}

export default UsersReduser