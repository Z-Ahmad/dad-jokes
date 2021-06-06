const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1544507888-56d73eb6046e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1586474714722-d1f9e551cf34?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1577202214328-c04b77cefb5d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1499081589563-7c400fcd94e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1051&q=80",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1603987248955-9c142c5ae89b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1531923610693-c816870f3b44?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1603610515737-193e0b423983?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1606823616058-541d59dadcb2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
  },
]

const darkToggle = document.querySelector(".toggleDark")
const body = document.querySelector("body")
const card = document.querySelector(".card")
const footer = document.querySelector(".footer")
const jokeImg = document.querySelector(".img")
const jokeText = document.querySelector(".jokeText")
const jokeBtn = document.querySelector(".jokeBtn")
const apiLink = (document.createElement("a").href =
  "https://icanhazdadjoke.com/")
let requests = 0
const limit = 50
const stop =
  "https://images.unsplash.com/photo-1546617885-4822125f891e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"

const fetchJoke = async () => {
  const jokeObject = await (
    await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
        "User-Agent": "https://github.com/Z-Ahmad/dad-jokes",
      },
    })
  ).json()
  return jokeObject
}

const error = () => {
  jokeText.textContent = "Whoops! There was an error! Please try again later!"
  jokeImg.src = images[7].src
}

const updateJoke = (text) => {
  jokeText.textContent = text
  jokeImg.src = images[Math.floor(Math.random() * 7)].src
}

const limitReached = () => {
  jokeText.innerHTML = `That's enough! Go to the 
    <a href=${apiLink}>icanhazdadjoke</a>
   site for more jokes!`
  jokeImg.src = stop
  jokeBtn.disabled = true
  jokeBtn
}

jokeBtn.addEventListener("click", async () => {
  if (requests <= limit) {
    try {
      const jokeObject = await fetchJoke()
      const jokeText = jokeObject.joke
      updateJoke(jokeText)
      // console.log(jokeText)
    } catch {
      error()
    }
    requests++
  } else {
    limitReached()
  }
})

darkToggle.addEventListener("click", () => {
  body.classList.toggle("bodyDark")
  card.classList.toggle("cardDark")
  jokeBtn.classList.toggle("jokeBtnDark")
  footer.classList.toggle("footerDark")
})
