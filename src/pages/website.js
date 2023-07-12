const createHeader = () => {
  const header = document.createElement('header')
  header.classList = 'bg-pink-200 py-6 text-center'

  const restaurantName = document.createElement('h1')
  restaurantName.classList = 'text-4xl font-bold mb-6'
  restaurantName.textContent = 'Hello Kitty Cafe'

  header.appendChild(restaurantName)
  header.appendChild(createNav())

  return header
}

const createNav = () => {
  const nav = document.createElement('nav')
  nav.classList = 'text-xl flex gap-x-5 justify-center'

  const home = document.createElement('a')
  home.classList =
    'cursor-pointer font-bold underline-offset-8 hover:underline hover:text-white hover:decoration-white hover:decoration-2'
  home.textContent = 'Home'
  home.addEventListener('click', e => {
    if (e.target.classList.contains('active')) return
    loadHome()
  })

  const menu = document.createElement('a')
  menu.classList =
    'cursor-pointer font-bold underline-offset-8 hover:underline hover:text-white hover:decoration-white hover:decoration-2'
  menu.textContent = 'Menu'
  menu.addEventListener('click', e => {
    if (e.target.classList.contains('active')) return
    loadMenu()
  })

  const contact = document.createElement('a')
  contact.classList =
    'cursor-pointer font-bold underline-offset-8 hover:underline hover:text-white hover:decoration-white hover:decoration-2'
  contact.textContent = 'Contact'
  contact.addEventListener('click', e => {
    if (e.target.classList.contains('active')) return
    loadContact()
  })

  nav.appendChild(home)
  nav.appendChild(menu)
  nav.appendChild(contact)

  return nav
}

const createMain = () => {
  const main = document.createElement('main')
  main.classList.add('main')
  main.setAttribute('id', 'main')
  return main
}

const createFooter = () => {
  const footer = document.createElement('footer')
  footer.classList =
    'fixed bottom-0 left-0 p-4 w-full bg-pink-200 outline outline-1 outline-gray-200 text-center'

  const copyright = document.createElement('a')
  copyright.href = 'https://github.com/nathcarnevalli'
  copyright.textContent = `Copyright © ${new Date().getFullYear()} nathcarnevalli`

  footer.appendChild(copyright)

  return footer
}

const initWebsite = () => {
  const content = document.getElementById('content')

  content.appendChild(createHeader())
  content.appendChild(createMain())
  content.appendChild(createFooter())

  setActiveButton(document.querySelector('.button-nav'))
  loadHome()
}

export default initWebsite
