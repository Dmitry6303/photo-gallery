const btnDarkMode = document.querySelector(".dark-mode-btn");
const inner_key = "darkMode";

if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    EnableDarkTheme();
}

if (localStorage.getItem(inner_key) === "dark") {
    EnableDarkTheme();
} else if (localStorage.getItem(inner_key) === "light") {
    DisableDarkTheme();
}

// If you change system settings, change theme
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
    const newColorScheme = event.matches ? "dark" : "light";

    if (newColorScheme === "dark") {
        EnableDarkTheme();
        localStorage.setItem(inner_key, "dark");
    } else {
        DisableDarkTheme();
        localStorage.setItem(inner_key, "light");
    }
});

btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    // Removing class from html tag, after set from html
    document.documentElement.classList.remove("dark");

    const isDark = document.body.classList.toggle("dark");
    if (isDark) {
        localStorage.setItem(inner_key, "dark");
    } else {
        localStorage.setItem(inner_key, "light");
    }
};

function EnableDarkTheme() {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
}

function DisableDarkTheme() {
    btnDarkMode.classList.remove("dark-mode-btn--active");
    document.body.classList.remove("dark");
    document.documentElement.classList.remove("dark");
}
