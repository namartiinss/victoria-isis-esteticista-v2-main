// Função para inicializar os Swipers dentro de um contêiner específico
function initializeSwipers(containerId) {
  const container = document.querySelector(`#${containerId}`);
  if(container){

    const swiperContainers = container.querySelectorAll(".swiper");
  
    // Inicialização dos Swipers
    const swipers = {
      aparelhos: new Swiper(`#${containerId} .swiper.aparelhos`, {
        pagination: {
          el: `#${containerId} .swiper.aparelhos .swiper-pagination`,
          clickable: true,
        },
        navigation: {
          nextEl: `#${containerId} .swiper.aparelhos .swiper-button-next`,
          prevEl: `#${containerId} .swiper.aparelhos .swiper-button-prev`,
        },
        breakpoints: {
          1400: { slidesPerView: 3.1 },
          1200: { slidesPerView: 2.5 },
          1000: { slidesPerView: 2.2 },
          700: { slidesPerView: 1.5 },
          0: { spaceBetween: 20, slidesPerView: 1.2 },
        },
      }),
      facial: new Swiper(`#${containerId} .swiper.facial`, {
        pagination: {
          el: `#${containerId} .swiper.facial .swiper-pagination`,
          clickable: true,
        },
        navigation: {
          nextEl: `#${containerId} .swiper.facial .swiper-button-next`,
          prevEl: `#${containerId} .swiper.facial .swiper-button-prev`,
        },
        breakpoints: {
          1400: { slidesPerView: 3.1 },
          1200: { slidesPerView: 2.5 },
          1000: { slidesPerView: 2.2 },
          700: { slidesPerView: 1.5 },
          0: { spaceBetween: 20, slidesPerView: 1.2 },
        },
      }),
      massagens: new Swiper(`#${containerId} .swiper.massagens`, {
        pagination: {
          el: `#${containerId} .swiper.massagens .swiper-pagination`,
          clickable: true,
        },
        navigation: {
          nextEl: `#${containerId} .swiper.massagens .swiper-button-next`,
          prevEl: `#${containerId} .swiper.massagens .swiper-button-prev`,
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
  
    // Função para alternar visibilidade dos Swipers
    function toggleVisibility(targetClass) {
      swiperContainers.forEach((swiper) => {
        swiper.classList.toggle("hidden", !swiper.classList.contains(targetClass));
      });
  
      // Atualizar o Swiper visível
      const activeSwiper = Object.values(swipers).find(
        (swiperInstance) =>
          swiperInstance.el.classList.contains(targetClass) &&
          !swiperInstance.el.classList.contains("hidden")
      );
      if (activeSwiper) activeSwiper.update();
    }
  
    // Adicionar evento de clique ao menu de abas
    const tabMenuContainer = container.querySelector(".tab-menu");
    tabMenuContainer.addEventListener("click", (event) => {
      if (event.target.tagName === "BUTTON") {
        const clickedButton = event.target;
  
        // Ativar o botão clicado
        tabMenuContainer.querySelectorAll("button").forEach((button) => {
          button.classList.toggle("active", button === clickedButton);
        });
  
        // Alternar visibilidade dos Swipers
        const targetClass = clickedButton.innerText.trim().toLowerCase();
        toggleVisibility(targetClass);
  
        // Alternar visibilidade dos botões de navegação
        container.querySelectorAll(".buttons-left-right").forEach((el) => {
          el.classList.toggle("hidden", !el.classList.contains(targetClass));
        });
      }
    });
  
    // Adicionar eventos aos botões de navegação
    function addNavigationListeners(swiperClass) {
      const leftButton = container.querySelector(`.buttons-left-right.${swiperClass} .left`);
      const rightButton = container.querySelector(`.buttons-left-right.${swiperClass} .right`);
      const swiperInstance = swipers[swiperClass];
  
      if (leftButton && rightButton && swiperInstance) {
        leftButton.addEventListener("click", () => swiperInstance.slidePrev());
        rightButton.addEventListener("click", () => swiperInstance.slideNext());
      }
    }
  
    addNavigationListeners("aparelhos");
    addNavigationListeners("facial");
    addNavigationListeners("massagens");
  }
}

// Inicializar os carrosséis

initializeSwipers("carrossel1");
initializeSwipers("carrossel2");
initializeSwipers("nossos-servicos");
