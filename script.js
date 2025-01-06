const tabMenuContainer = document.querySelector(".tab-menu");
const swiperContainers = document.querySelectorAll(".swiper");

// Inicialize os Swipers
const swipers = {
  aparelhos: new Swiper('.swiper.aparelhos', {
    pagination: {
      el: '.swiper.aparelhos .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper.aparelhos .swiper-button-next',
      prevEl: '.swiper.aparelhos .swiper-button-prev',
    },
    breakpoints: {
      1400: { slidesPerView: 3.1 },
      1200: { slidesPerView: 2.5 },
      1000: { slidesPerView: 2.2 },
      700: { slidesPerView: 1.5 },
      0: { spaceBetween: 20, slidesPerView: 1.2 },
    },
  }),
  
  facial: new Swiper('.swiper.facial', {
    pagination: {
      el: '.swiper.facial .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper.facial .swiper-button-next',
      prevEl: '.swiper.facial .swiper-button-prev',
    },
    breakpoints: {
      1400: { slidesPerView: 3.1 },
      1200: { slidesPerView: 2.5 },
      1000: { slidesPerView: 2.2 },
      700: { slidesPerView: 1.5 },
      0: { spaceBetween: 20, slidesPerView: 1.2 },
    },
  }),

  massagens: new Swiper('.swiper.massagens', {
    pagination: {
      el: '.swiper.massagens .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper.massagens .swiper-button-next',
      prevEl: '.swiper.massagens .swiper-button-prev',
    },
    breakpoints: {
      1400: { slidesPerView: 3.1 },
      1200: { slidesPerView: 2.5 },
      1000: { slidesPerView: 2.2 },
      700: { slidesPerView: 1.5 },
      0: { spaceBetween: 20, slidesPerView: 1.2 },
    },
  }),
};


// Função para ativar o botão clicado
function setActiveButton(clickedButton) {
  document.querySelectorAll(".tab-menu button").forEach((button) => {
    button.classList.toggle("active", button === clickedButton);
  });
}

// Função para alternar a visibilidade dos Swipers
function toggleVisibility(targetClass) {
  swiperContainers.forEach((swiper) => {
    swiper.classList.toggle("hidden", !swiper.classList.contains(targetClass));
  });

  // Atualize o Swiper visível para garantir funcionalidade
  const activeSwiper = Object.values(swipers).find(
    (swiperInstance) =>
      swiperInstance.el.classList.contains(targetClass) &&
      !swiperInstance.el.classList.contains("hidden")
  );
  if (activeSwiper) {
    activeSwiper.update();
  }
}

function changeButtonActiveModals(value){
  console.log(value)
  document.querySelectorAll(".buttons-left-right").forEach((el) => {
    if(el.classList.contains(value)){
      el.classList.remove("hidden")
    }else{
      el.classList.add("hidden")
    }
  })
}
// Eventos do menu de abas
tabMenuContainer.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const clickedButton = event.target;
    setActiveButton(clickedButton);
    const targetClass = clickedButton.innerText.trim().toLowerCase();
    toggleVisibility(targetClass);
    changeButtonActiveModals(targetClass)
  }
});


// Controle do menu mobile
const menuMobile = document.querySelector(".desktopHidden");
document.querySelectorAll(".menuActive").forEach((el) => {
  el.addEventListener("click", () => {
    menuMobile.classList.toggle("active");
  });
});

// Função para navegar no swiper
function addNavigationListener(swiperClass, direction) {
  const directionClass = direction === "prev" ? ".left" : ".right";
  const swiperElement = document.querySelector(`.swiper.${swiperClass}`).swiper;

  document.querySelector(`.buttons-left-right.${swiperClass} ${directionClass}`).addEventListener("click", () => {
    if (direction === "prev") {
      swiperElement.slidePrev(); // Navega para o slide anterior
    } else {
      swiperElement.slideNext(); // Navega para o próximo slide
    }
  });
}

// Adicionar ouvintes de navegação para os três swipers
addNavigationListener("aparelhos", "prev");
addNavigationListener("aparelhos", "next");
addNavigationListener("facial", "prev");
addNavigationListener("facial", "next");
addNavigationListener("massagens", "prev");
addNavigationListener("massagens", "next");
