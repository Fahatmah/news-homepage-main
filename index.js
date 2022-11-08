// nav bar
const navBtns = document.querySelectorAll('.nav-button')
const sideBar = document.querySelector('.sidebar__container')
const overlay = document.createElement('div')
const body = document.body

navBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const button = e.currentTarget.classList
    if (button.contains('nav-toggle')) {
      sideBar.classList.add('slide')

      body.appendChild(overlay)
      overlay.classList.add('overlay')
    }
    if (button.contains('close-nav')) {
      sideBar.classList.remove('slide')
      overlay.classList.remove('overlay')
    }
  })
})

window.addEventListener('scroll', () => {
  sideBar.classList.remove('slide')
  overlay.classList.remove('overlay')
})

// news container
const news = [
  {
    title: 'Hydrogen VS Electric Cars',
    text: 'Will hydrogen-fueled cars ever catch up to EVs?',
  },
  {
    title: 'The Downsides of AI Artistry',
    text: 'What are the possible adverse effects of on-demand AI image generation?',
  },
  {
    title: 'Is VC Funding Drying Up?',
    text: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
  },
]

const newsContainer = document.querySelector('.new__news_container')

let newsItem = news.map((item) => {
  return `<div class="news">
            <a href="#" class="news__title n-clr-100">${item.title}</a>
            <p class="context n-clr-200">${item.text}</p>
          </div>`
})

newsItem = newsItem.join('')
newsContainer.innerHTML = newsItem

// topics container

const topics = [
  {
    img: 'assets/images/image-retro-pcs.jpg',
    number: 01,
    title: 'Reviving Retro PCs',
    text: 'What happens when old PCs are given modern upgrades?',
  },
  {
    img: 'assets/images/image-top-laptops.jpg',
    number: 02,
    title: 'Top 10 Laptops of 2022',
    text: 'Our best picks for various needs and budgets.',
  },
  {
    img: 'assets/images/image-gaming-growth.jpg',
    number: 03,
    title: 'The Growth of Gaming',
    text: 'How the pandemic has sparked fresh opportunities.',
  },
]

const topicsContainer = document.querySelector('.topics__container')

let topicItem = topics.map((item) => {
  return `<div class="topic">
            <div class="container">
              <div class="img__container">
                <img src=${item.img} alt=${item.title} class="img__topic">
              </div>
              <div class="topic__content">
                <p class="topic__number n-clr-200">0${item.number}</p>
                <a href="#" class="title n-clr-400">${item.title}</a>
                <p class="context n-clr-300">${item.text}</p>
              </div>
            </div>
          </div>`
})

topicItem = topicItem.join('')
topicsContainer.innerHTML = topicItem
