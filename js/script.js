//INSTAFEED PLUGIN USAGE


//SLIDER
$('.sec--content--local--images').slick({
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    }
  ]
});
$('.galery--mobile--slider').slick({
  dots: false,
  autoplay: true,
  autoplaySpeed: 2200,
  infinite: true,
  speed: 150,
  slidesToScroll: 1
});

//DROPDOWN MENU FUNCTION
document.addEventListener('click', (e) => {
    const isDropdownBtn = e.target.classList.contains('menu--mobile--toggle')
    if (!isDropdownBtn && e.target.closest('.menu--mobile') != null) return;
  
    if (isDropdownBtn) {
  
      $('.header--menu--navbar--mobile').toggleClass("show")
  
    }
    else {

      $('.header--menu--navbar--mobile').removeClass("show")

    }
  })

  //DROPDOWN ANIMATED ARROW

  $('.wb_footerLink01').click(function () {
    $('nav ul .class01show').toggleClass("show")
    $('.arrow01').toggleClass("rotate")
  }
  )
  $('.wb_footerLink02').click(function () {
    $('nav ul .class02show').toggleClass("show")
    $('.arrow02').toggleClass("rotate")
  }
  )
  $('.wb_footerLink03').click(function () {
    $('nav ul .class03show').toggleClass("show")
    $('.arrow03').toggleClass("rotate")
  }
  )

  $('.wb_linkPage').click(function () {
    $('.wb_linkPage').toggleClass("active")
  }
  )

  $('.perfil--exchange').click(function () {
    $('.perfil--case--first').toggleClass("change");
    $('.perfil--case--second').toggleClass("change");

  }
  )
  //==========================================================================================//
  //===========================PAGINAÇÃO JS PURO==============================================//
  //==========================================================================================//

  //IMPLEMENTAÇÃO DE ARRAY ALEATÓRIA PARA UTILIZAR NOS DADOS EXIBIDOS
const data = Array.from({ length: 482})
.map((_, i) => '<div class="item"><a href="#"><img src="./showcase/1.jpg" alt=""></a></div>')

const arrayData = [
  '<div class="item"><a href="#"><img src="./img/showcase/1.jpg" alt=""></a></div>',
  '<div class="item"><a href="#"><img src="./img/showcase/2.jpg" alt=""></a></div>',
  '<div class="item"><a href="#"><img src="./img/showcase/3.jpg" alt=""></a></div>',
  '<div class="item"><a href="#"><img src="./img/showcase/4.jpg" alt=""></a></div>',
  '<div class="item"><a href="#"><img src="./img/showcase/5.jpg" alt=""></a></div>',
  '<div class="item"><a href="#"><img src="./img/showcase/6.jpg" alt=""></a></div>',
  '<div class="item"><a href="#"><img src="./img/showcase/7.jpg" alt=""></a></div>',
  '<div class="item"><a href="#"><img src="./img/showcase/8.jpg" alt=""></a></div>',
  '<div class="item"><a href="#"><img src="./img/showcase/9.jpg" alt=""></a></div>',
  '<div class="item"><a href="#"><img src="./img/showcase/10.jpg" alt=""></a></div>'

]

  //CRIAÇÃO DO HTML.GET PARA EXTRAIR ELEMENTOS DO HTML
  const html = {
    get(element) {
      return document.querySelector(element)
    }
  }
  //TOTAL DE ITENS A SEREM EXIBIDOS EM CADA PÁGINA
  let perPage = 10
  
  //ALGUMAS CONSTANTES CONFIGURÁVEIS
  const state = {
    page: 1,
    perPage,
    totalPage: Math.ceil(arrayData.length / perPage),
    maxVisibleButtons: 5
  }

  //FUNÇÕES DE PÁGINAÇÃO PRINCIPAL BACK-END
  const controls = {
    next() {
      state.page++

      const lastPage = state.page > state.totalPage
      if(lastPage) {
        state.page--
      }
    },
    prev() {
      state.page--

      if(state.page < 1) {
        state.page++
      }
    },
    goTo(page) {
      if(page < 1) {
        page = 1
      }

      state.page = +page
      
      if(page > state.totalPage)
      state.page = state.totalPage
    },
    createListeners() {
      html.get('#galery--button--first').addEventListener('click', () => {
        controls.goTo(1)
        update()
      })
      html.get('#galery--button--last').addEventListener('click', () => {
        controls.goTo(state.totalPage)
        update()
      })
      html.get('#galery--button--next').addEventListener('click', () => {
        controls.next()
        update()
      })
      html.get('#galery--button--prev').addEventListener('click', () => {
        controls.prev()
        update()
      })
    }
  }

  //CONFIGURAÇÃO DE EXTRAÇÃO DE ITENS DA ARRAY E IMPLEMENTAÇÃO EM CADA PÁGINA
  const list = {
    create(item) {
      const div = document.createElement('div')
      div.classList.add('item')
      div.innerHTML = item

      html.get('.sec--content--galery--showcase').appendChild(div)
    },
    update() {
      html.get('.sec--content--galery--showcase').innerHTML = ""

      let page = state.page - 1
      let start = page *state.perPage
      let end = start + state.perPage

      const paginatedItems = arrayData.slice(start, end)

      paginatedItems.forEach(list.create)
    }
  }

  //BOTÕES E FUNÇÕES FRONT-END
  const buttons = {
    getNum: html.get('.galery--page--numbers'),
    create(number) {
      const button = document.createElement('div')

      button.innerHTML = number;

      button.addEventListener('click', (event) => {
        const page = event.target.innerText

        controls.goTo(page)
        update()
      })
      buttons.getNum.appendChild(button)
    },
    update() {
      buttons.getNum.innerHTML = ""
      const { maxLeft, maxRight } = buttons.calculateMaxVisible()

      for(let page = maxLeft; page <= maxRight; page++) {
        buttons.create(page)
      }
    },
    calculateMaxVisible() {
      const { maxVisibleButtons } = state
      let maxLeft = (state.page - Math.floor(maxVisibleButtons / 2))
      let maxRight = (state.page + Math.floor(maxVisibleButtons / 2))

      if(maxLeft < 1) {
        maxLeft = 1
        maxRight = maxVisibleButtons
      }

      if(maxRight > state.totalPage) {
        maxLeft = state.totalPage - ( maxVisibleButtons - 1 )
        maxRight = state.totalPage

        if(maxLeft < 1) maxLeft = 1
      }
      
    return {maxLeft, maxRight}
    }
  }

  //FUNÇÃO DE ATUALIZAÇÃO DE EVENTOS
  function update () {
    console.log(state.page)
    buttons.update()
  }

  //FUNÇÃO DE INICIALIZAÇÃO DOS EVENTOS
  function init () {
    controls.createListeners()
    list.update()
    buttons.update()
  }

  //INICIAR CÓDIGO
  init()


  //============================================MODAL LOGIN==============================================//


  document.addEventListener('click', (e) => {
    const isDropdownBtn = e.target.classList.contains('toggle--mod--sign')
    if (!isDropdownBtn && e.target.closest('.mod--sign--case') != null) return;
  
    if (isDropdownBtn) {
  
      $('.mod--sign').toggleClass("show")
  
    }
    else {

      $('.mod--sign').removeClass("show")

    }
  })

  $('.wb_studioClose').click(function () {
    $('.wb_studioBg').removeClass("show")
  }
  )

  $('.studio--link').click(function () {
    location.href='./studio.html';
  })