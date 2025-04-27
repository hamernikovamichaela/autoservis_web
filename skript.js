/* =============================
   ZMĚNA POZADÍ SEKCE HERO
   ============================= */

   const images = [
    'img/Hero/IMG_2467.webp',
    'img/Hero/IMG_2459.webp',
    'img/Hero/IMG_2466.webp'
  ];
  
  // Výběr tří pozadí
  const bg1 = document.querySelector('.hero__bg--1');
  const bg2 = document.querySelector('.hero__bg--2');
  const bg3 = document.querySelector('.hero__bg--3');
  
  let current = 0;
  let backgrounds = [bg1, bg2, bg3]; // Pole pro všechny 3 pozadí
  let showingBg = 0; // Ukazatel na aktuální pozadí
  
  function changeBackground() {
    // Získáme další obrázek
    const nextImage = images[current];
  
    // Skrytí aktuálního pozadí
    backgrounds[showingBg].style.opacity = '0';
  
    // Nastavení nového obrázku pro další pozadí
    const nextBg = (showingBg + 1) % 3; // Přepnutí na další pozadí v cyklu (0 -> 1 -> 2 -> 0)
    backgrounds[nextBg].style.backgroundImage = `url('${nextImage}')`;
    backgrounds[nextBg].style.opacity = '1'; // Nastavení opacity na 1 (ukáže pozadí)
  
    // Nastavení nového indexu
    showingBg = nextBg;
    current = (current + 1) % images.length; // Přepnutí obrázku cyklicky
  }
  
  // Spustíme hned a opakujeme každých 5 sekund
  changeBackground();
  setInterval(changeBackground, 5000);

// Inicializace Swiper galerie
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1, // Počet zobrazených obrázků najednou
  spaceBetween: 10, // Vzdálenost mezi obrázky
  loop: true, // Povolení nekonečného posouvání
  navigation: {
    nextEl: '.swiper-button-next', // Tlačítko pro posun na další obrázek
    prevEl: '.swiper-button-prev', // Tlačítko pro posun na předchozí obrázek
  },
  pagination: {
    el: '.swiper-pagination', // Element pro zobrazení číselné navigace
    clickable: true, // Povolení klikání na čísla pro přímý přechod
  },
  keyboard: {
    enabled: true, // Povolení ovládání klávesnicí
    onlyInViewport: true, // Ovládání pouze pokud je swiper v zobrazené oblasti
  },
  mousewheel: {
    invert: false, // Směr posouvání kolečkem myši
  },
});
// ==============================
// ===== Tlačítko "Scroll to Top" =====
// ==============================

/**
 * Zobrazuje tlačítko "Scroll to Top" po odscrollování a nastavuje jeho funkčnost.
 */
const scrollTopBtn = document.getElementById("scrollTopBtn");

function handleScrollToTopVisibility() {
    if (window.innerWidth > 1024 && window.scrollY > 300) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
}

// Při scrollu a při změně velikosti okna
window.addEventListener("scroll", handleScrollToTopVisibility);
window.addEventListener("resize", handleScrollToTopVisibility);

// Při načtení stránky (pro jistotu)
document.addEventListener("DOMContentLoaded", handleScrollToTopVisibility);

// Kliknutí na tlačítko – plynulé posunutí nahoru
scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
/* =============================
   RESPOZIVNÍ HAMBURGER MENU
   ============================= */

/**
 * Výběr elementu, který obsahuje ikonku menu.
 * @type {HTMLElement}
 */
const menuIcon = document.querySelector(".menu-icon");

/**
 * Výběr elementu navigačního menu.
 * @type {HTMLElement}
 */
const menuList = document.querySelector("nav");

/**
 * Výběr elementu ikonky, která obsahuje class "fa-solid".
 * Používá se pro změnu mezi ikonou hamburgeru a křížku.
 * @type {HTMLElement}
 */
const hamburgerIcon = document.querySelector(".fa-solid");

/**
 * Event listener pro kliknutí na element menuIcon (hamburger).
 * Přepíná třídu "active" na navigaci a mění ikonu mezi hamburgerem a křížkem.
 */
menuIcon.addEventListener("click", () => {
  // Přepínání třídy active – pokud je přítomna, menu se zobrazí (podle CSS v query)
  menuList.classList.toggle("active");

  // Přepnutí ikonky – pokud obsahuje třídu "fa-bars", nahradíme ji třídou "fa-xmark"
  if (hamburgerIcon.classList.contains("fa-bars")) {
    hamburgerIcon.classList.replace("fa-bars", "fa-xmark");
  } else {
    // Jinak vrátíme ikonku na hamburger (fa-bars) a odstraníme fa-xmark
    hamburgerIcon.classList.replace("fa-xmark", "fa-bars");
  }
});

/**
 * Event listener, který zavře menu, když uživatel klikne mimo oblast menu nebo ikonky.
 */
document.addEventListener("click", (event) => {
  // Pokud kliknutí nebylo v elementu s class "menu-icon" nebo v "nav"
  if (!event.target.closest(".menu-icon") && !event.target.closest("nav")) {
    // Odebereme třídu active, což podle CSS způsobí skrytí menu
    menuList.classList.remove("active");
    // Reset ikonky na hamburger (fa-bars)
    hamburgerIcon.classList.replace("fa-xmark", "fa-bars");
  }
});

/**
 * Event listener pro změnu velikosti okna.
 * Pokud se šířka okna zvětší nad 600px, zajistí, že:
 * - Menu bude zobrazeno.
 * - Třída "active" bude odebrána z menu.
 * - Ikonka bude resetována na hamburger (fa-bars).
 */
window.addEventListener("resize", () => {
  if (window.innerWidth > 769) {
    menuList.classList.remove("active");
    menuList.style.display = "block";

    if (hamburgerIcon.classList.contains("fa-xmark")) {
      hamburgerIcon.classList.replace("fa-xmark", "fa-bars");
    }
  }
});