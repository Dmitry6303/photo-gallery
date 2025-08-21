const gallery = document.getElementById("lightgallery");
const loadMoreButton = document.getElementById("loadMore");
let currentPage = 1;
let photosPerPage;

if (window.innerWidth > 768) {
    photosPerPage = 24;
} else {
    photosPerPage = 9;
}

const photoData = [
    { thumb: "./img/icons/1i.jpg", full: "./img/1.jpg", category: "landscapes", alt: "" },
    { thumb: "./img/icons/2i.jpg", full: "./img/2.jpg", category: "landscapes", alt: "" },
    { thumb: "./img/icons/3i.jpg", full: "./img/3.jpg", category: "landscapes", alt: "" },
    { thumb: "./img/icons/4i.jpg", full: "./img/4.jpg", category: "landscapes", alt: "" },
    { thumb: "./img/icons/5i.jpg", full: "./img/5.jpg", category: "landscapes", alt: "" },
    { thumb: "./img/icons/6i.jpg", full: "./img/6.jpg", category: "other", alt: "" },
    { thumb: "./img/icons/7i.jpg", full: "./img/7.jpg", category: "landscapes", alt: "" },
    { thumb: "./img/icons/8i.jpg", full: "./img/8.jpg", category: "other", alt: "" },
    { thumb: "./img/icons/9i.jpg", full: "./img/9.jpg", category: "other", alt: "" },
    { thumb: "./img/icons/10i.jpg", full: "./img/10.jpg", category: "other", alt: "" },
    { thumb: "./img/icons/11i.jpg", full: "./img/11.jpg", category: "other", alt: "" },
    { thumb: "./img/icons/12i.jpg", full: "./img/12.jpg", category: "other", alt: "" },
    { thumb: "./img/icons/13i.jpg", full: "./img/13.jpg", category: "other", alt: "" },
    { thumb: "./img/icons/14i.jpg", full: "./img/14.jpg", category: "other", alt: "" },
    { thumb: "./img/icons/15i.jpg", full: "./img/15.jpg", category: "other", alt: "" },
    { thumb: "./img/icons/16i.jpg", full: "./img/16.jpg", category: "other", alt: "" },
    { thumb: "./img/icons/17i.jpg", full: "./img/17.jpg", category: "other", alt: "" },
    { thumb: "./img/icons/18i.jpg", full: "./img/18.jpg", category: "other", alt: "" },
    { thumb: "./img/icons/19i.jpg", full: "./img/19.jpg", category: "animals", alt: "" },
    { thumb: "./img/icons/20i.jpg", full: "./img/20.jpg", category: "animals", alt: "" },
    { thumb: "./img/icons/21i.jpg", full: "./img/21.jpg", category: "animals", alt: "" },
    { thumb: "./img/icons/22i.jpg", full: "./img/22.jpg", category: "animals", alt: "" },
    { thumb: "./img/icons/23i.jpg", full: "./img/23.jpg", category: "other", alt: "" },
    { thumb: "./img/icons/24i.jpg", full: "./img/24.jpg", category: "animals", alt: "" },
    { thumb: "./img/icons/25i.jpg", full: "./img/25.jpg", category: "animals", alt: "" },
    { thumb: "./img/icons/26i.jpg", full: "./img/26.jpg", category: "landscapes", alt: "" },
    { thumb: "./img/icons/27i.jpg", full: "./img/27.jpg", category: "animals", alt: "" },
    { thumb: "./img/icons/28i.jpg", full: "./img/28.jpg", category: "landscapes", alt: "" },
    { thumb: "./img/icons/29i.jpg", full: "./img/29.jpg", category: "landscapes", alt: "" },
    { thumb: "./img/icons/30i.jpg", full: "./img/30.jpg", category: "landscapes", alt: "" },
    { thumb: "./img/icons/31i.jpg", full: "./img/31.jpg", category: "other", alt: "" },
    { thumb: "./img/32.jpg", full: "./img/32.jpg", category: "astro", alt: "" },
    { thumb: "./img/33.jpg", full: "./img/33.jpg", category: "astro", alt: "" },
    { thumb: "./img/34.jpg", full: "./img/34.jpg", category: "astro", alt: "Saturn" },
    { thumb: "./img/35.jpg", full: "./img/35.jpg", category: "astro", alt: "" },
    { thumb: "./img/36.jpg", full: "./img/36.jpg", category: "astro", alt: "" },
    { thumb: "./img/37.jpg", full: "./img/37.jpg", category: "astro", alt: "" },
    { thumb: "./img/icons/38i.jpg", full: "./img/38.jpg", category: "landscapes", alt: "" },
    { thumb: "./img/icons/39i.jpg", full: "./img/39.jpg", category: "other", alt: "" },
    { thumb: "./img/icons/40i.jpg", full: "./img/40.jpg", category: "other", alt: "" },
    { thumb: "./img/icons/41i.jpg", full: "./img/41.jpg", category: "landscapes", alt: "" },
    { thumb: "./img/icons/42i.jpg", full: "./img/42.jpg", category: "landscapes", alt: "" },
    { thumb: "./img/icons/43i.jpg", full: "./img/43.jpg", category: "other", alt: "" },
    { thumb: "./img/icons/44i.jpg", full: "./img/44.jpg", category: "landscapes", alt: "" },
    { thumb: "./img/icons/45i.jpg", full: "./img/45.jpg", category: "landscapes", alt: "" },
    { thumb: "./img/icons/46i.jpg", full: "./img/46.jpg", category: "landscapes", alt: "" },
    { thumb: "./img/icons/47i.jpg", full: "./img/47.jpg", category: "landscapes", alt: "" },
    { thumb: "./img/icons/48i.jpg", full: "./img/48.jpg", category: "landscapes", alt: "" },
    { thumb: "./img/icons/49i.jpg", full: "./img/49.jpg", category: "other", alt: "" },
    { thumb: "./img/icons/50i.jpg", full: "./img/50.jpg", category: "other", alt: "" },
    { thumb: "./img/icons/51i.jpg", full: "./img/51.jpg", category: "landscapes", alt: "" },
    { thumb: "./img/icons/52i.jpg", full: "./img/52.jpg", category: "landscapes", alt: "" },
    { thumb: "./img/icons/53i.jpg", full: "./img/53.jpg", category: "landscapes", alt: "" },
    { thumb: "./img/icons/54i.jpg", full: "./img/54.jpg", category: "landscapes", alt: "" },
    { thumb: "./img/icons/55i.jpg", full: "./img/55.jpg", category: "landscapes", alt: "" },
    { thumb: "./img/icons/56i.jpg", full: "./img/56.jpg", category: "landscapes", alt: "" },
    { thumb: "./img/icons/57i.jpg", full: "./img/57.jpg", category: "landscapes", alt: "" },
    { thumb: "./img/icons/58i.jpg", full: "./img/58.jpg", category: "other", alt: "" },
    { thumb: "./img/icons/59i.jpg", full: "./img/59.jpg", category: "landscapes", alt: "" },
    { thumb: "./img/icons/60i.jpg", full: "./img/60.jpg", category: "astro", alt: "" },
    { thumb: "./img/icons/61i.jpg", full: "./img/61.jpg", category: "landscapes", alt: "" },
    { thumb: "./img/icons/62i.jpg", full: "./img/62.jpg", category: "landscapes", alt: "" },
    { thumb: "./img/icons/63i.jpg", full: "./img/63.jpg", category: "other", alt: "" },
    { thumb: "./img/icons/64i.jpg", full: "./img/64.jpg", category: "animals", alt: "" },
    { thumb: "./img/icons/65i.jpg", full: "./img/65.jpg", category: "animals", alt: "" },
    { thumb: "./img/icons/66i.jpg", full: "./img/66.jpg", category: "landscapes", alt: "" },
    { thumb: "./img/icons/67i.jpg", full: "./img/67.jpg", category: "landscapes", alt: "" },
    { thumb: "./img/icons/68i.jpg", full: "./img/68.jpg", category: "animals", alt: "" },
    { thumb: "./img/icons/69i.jpg", full: "./img/69.jpg", category: "landscapes", alt: "" },
    { thumb: "./img/icons/70i.jpg", full: "./img/70.jpg", category: "other", alt: "" },
    { thumb: "./img/icons/71i.jpg", full: "./img/71.jpg", category: "animals", alt: "" },
    { thumb: "./img/icons/72i.jpg", full: "./img/72.jpg", category: "landscapes", alt: "" },
    { thumb: "./img/icons/73i.jpg", full: "./img/73.jpg", category: "landscapes", alt: "" },
    { thumb: "./img/icons/74i.jpg", full: "./img/74.jpg", category: "animals", alt: "" },
    { thumb: "./img/icons/75i.jpg", full: "./img/75.jpg", category: "landscapes", alt: "" },
    { thumb: "./img/icons/76i.jpg", full: "./img/76.jpg", category: "astro", alt: "" },
    { thumb: "./img/icons/77i.jpg", full: "./img/77.jpg", category: "astro", alt: "" },
    { thumb: "./img/icons/78i.jpg", full: "./img/78.jpg", category: "astro", alt: "" },
    { thumb: "./img/icons/79i.jpg", full: "./img/79.jpg", category: "astro", alt: "" },
    { thumb: "./img/icons/80i.jpg", full: "./img/80.jpg", category: "astro", alt: "" },
    { thumb: "./img/icons/81i.jpg", full: "./img/81.jpg", category: "astro", alt: "" },
    { thumb: "./img/icons/82i.jpg", full: "./img/82.jpg", category: "astro", alt: "" },
    { thumb: "./img/icons/83i.jpg", full: "./img/83.jpg", category: "astro", alt: "" },
    { thumb: "./img/icons/84i.jpg", full: "./img/84.jpg", category: "landscapes", alt: "" },
    { thumb: "./img/icons/85i.jpg", full: "./img/85.jpg", category: "landscapes", alt: "" },
    { thumb: "./img/icons/86i.jpg", full: "./img/86.jpg", category: "landscapes", alt: "" },
    { thumb: "./img/icons/87i.jpg", full: "./img/87.jpg", category: "landscapes", alt: "" },
    { thumb: "./img/icons/88i.jpg", full: "./img/88.jpg", category: "landscapes", alt: "" },
    { thumb: "./img/icons/89i.jpg", full: "./img/89.jpg", category: "landscapes", alt: "" },
    { thumb: "./img/icons/90i.jpg", full: "./img/90.jpg", category: "landscapes", alt: "" },
    { thumb: "./img/icons/91i.jpg", full: "./img/91.jpg", category: "landscapes", alt: "" },
    { thumb: "./img/icons/92i.jpg", full: "./img/92.jpg", category: "landscapes", alt: "" },
    { thumb: "./img/icons/93i.jpg", full: "./img/93.jpg", category: "landscapes", alt: "" },
    { thumb: "./img/icons/94i.jpg", full: "./img/94.jpg", category: "landscapes", alt: "" },
    { thumb: "./img/icons/95i.jpg", full: "./img/95.jpg", category: "landscapes", alt: "" },
    { thumb: "./img/icons/96i.jpg", full: "./img/96.jpg", category: "landscapes", alt: "" },
    { thumb: "./img/icons/97i.jpg", full: "./img/97.jpg", category: "animals", alt: "" },
    { thumb: "./img/icons/98i.jpg", full: "./img/98.jpg", category: "landscapes", alt: "" },
    { thumb: "./img/icons/99i.jpg", full: "./img/99.jpg", category: "astro", alt: "" },
    { thumb: "./img/icons/100i.jpg", full: "./img/100.jpg", category: "astro", alt: "" },
    { thumb: "./img/icons/101i.jpg", full: "./img/101.jpg", category: "astro", alt: "" },
    { thumb: "./img/icons/102i.jpg", full: "./img/102.jpg", category: "astro", alt: "" },
    { thumb: "./img/icons/103i.jpg", full: "./img/103.jpg", category: "astro", alt: "" },
    { thumb: "./img/icons/104i.jpg", full: "./img/104.jpg", category: "astro", alt: "" },
    { thumb: "./img/icons/105i.jpg", full: "./img/105.jpg", category: "astro", alt: "" },
    { thumb: "./img/icons/106i.jpg", full: "./img/106.jpg", category: "astro", alt: "" },
    { thumb: "./img/icons/107i.jpg", full: "./img/107.jpg", category: "astro", alt: "" },
    { thumb: "./img/icons/108i.jpg", full: "./img/108.jpg", category: "astro", alt: "" },
    { thumb: "./img/icons/109i.jpg", full: "./img/109.jpg", category: "astro", alt: "" },
    { thumb: "./img/icons/110i.jpg", full: "./img/110.jpg", category: "astro", alt: "" },
    {
        thumb: "https://dummyimage.com/300x300/ffffff/000000.png&text=GIF+1",
        full: "./img/animations/1.gif",
        category: "animation",
        alt: "",
    },
    {
        thumb: "https://dummyimage.com/300x300/ffffff/000000.png&text=GIF+2",
        full: "./img/animations/2.gif",
        category: "animation",
        alt: "",
    },
    {
        thumb: "https://dummyimage.com/300x300/ffffff/000000.png&text=GIF+3",
        full: "./img/animations/3.gif",
        category: "animation",
        alt: "",
    },
    {
        thumb: "https://dummyimage.com/300x300/ffffff/000000.png&text=GIF+4",
        full: "./img/animations/4.gif",
        category: "animation",
        alt: "",
    },
    {
        thumb: "https://dummyimage.com/300x300/ffffff/000000.png&text=GIF+5",
        full: "./img/animations/5.gif",
        category: "animation",
        alt: "",
    },
    {
        thumb: "https://dummyimage.com/300x300/ffffff/000000.png&text=GIF+6",
        full: "./img/animations/6.gif",
        category: "animation",
        alt: "",
    },
    {
        thumb: "https://dummyimage.com/300x300/ffffff/000000.png&text=GIF+7",
        full: "./img/animations/7.gif",
        category: "animation",
        alt: "",
    },
    {
        thumb: "https://dummyimage.com/300x300/ffffff/000000.png&text=GIF+8",
        full: "./img/animations/8.gif",
        category: "animation",
        alt: "",
    },
    {
        thumb: "https://dummyimage.com/300x300/ffffff/000000.png&text=GIF+9",
        full: "./img/animations/9.gif",
        category: "animation",
        alt: "",
    },
    {
        thumb: "https://dummyimage.com/300x300/ffffff/000000.png&text=GIF+10",
        full: "./img/animations/10.gif",
        category: "animation",
        alt: "",
    },
    {
        thumb: "https://dummyimage.com/300x300/ffffff/000000.png&text=GIF+11",
        full: "./img/animations/11.gif",
        category: "animation",
        alt: "",
    },
    {
        thumb: "https://dummyimage.com/300x300/ffffff/000000.png&text=GIF+12",
        full: "./img/animations/12.gif",
        category: "animation",
        alt: "",
    },
    {
        thumb: "https://dummyimage.com/300x300/ffffff/000000.png&text=GIF+13",
        full: "./img/animations/13.gif",
        category: "animation",
        alt: "",
    },
    {
        thumb: "https://dummyimage.com/300x300/ffffff/000000.png&text=GIF+14",
        full: "./img/animations/14.gif",
        category: "animation",
        alt: "",
    },
    {
        thumb: "https://dummyimage.com/300x300/ffffff/000000.png&text=GIF+15",
        full: "./img/animations/15.gif",
        category: "animation",
        alt: "",
    },
    {
        thumb: "https://dummyimage.com/300x300/ffffff/000000.png&text=GIF+16",
        full: "./img/animations/16.gif",
        category: "animation",
        alt: "",
    },
    {
        thumb: "https://dummyimage.com/300x300/ffffff/000000.png&text=GIF+17",
        full: "./img/animations/17.gif",
        category: "animation",
        alt: "",
    },
];

// Функция для создания миниатюр
function createThumbnailElement(photo) {
    return `
                <a href="${photo.full}" class="photo" data-sub-html="${photo.alt}">
                    <img src="${photo.thumb}" alt="${photo.alt}">
                </a>
            `;
}

// Обработчики фильтров
document.querySelectorAll(".filter-button").forEach((button) => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".filter-button").forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
        const category = button.getAttribute("data-filter");
        currentPage = 1; // Сброс на первую страницу при смене фильтра
        gallery.innerHTML = ""; // Очистка галереи
        displayThumbnails(currentPage, category);
    });
});

// Отображение миниатюр на текущей странице с фильтрацией
function displayThumbnails(page, category) {
    const filteredPhotos = category === "all" ? photoData : photoData.filter((photo) => photo.category === category);

    const startIndex = (page - 1) * photosPerPage;
    const endIndex = Math.min(startIndex + photosPerPage, filteredPhotos.length);

    for (let i = startIndex; i < endIndex; i++) {
        gallery.innerHTML += createThumbnailElement(filteredPhotos[i]);
    }

    // Инициализация LightGallery после добавления новых фото
    lightGallery(gallery, {
        selector: "a",
        thumbnail: window.innerWidth > 768,
        download: true,
        speed: 500,
        plugins: [lgZoom, lgFullscreen],
        mobileSettings: {
            controls: true,
            showCloseIcon: true,
            download: false,
            rotate: false,
            actualSize: false,
        },
    });

    // Проверяем, есть ли еще фото для загрузки
    if (endIndex >= filteredPhotos.length) {
        loadMoreButton.style.display = "none"; // Скрываем кнопку, если все фото загружены
    } else {
        loadMoreButton.style.display = "";
    }
}

// Обработчик кнопки "Загрузить больше"
loadMoreButton.addEventListener("click", () => {
    const activeFilter = document.querySelector(".filter-button.active").getAttribute("data-filter");
    currentPage++;
    displayThumbnails(currentPage, activeFilter);
});

// Инициализация галереи с фильтром "Все"
displayThumbnails(currentPage, "all");
