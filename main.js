let toggle = document.querySelector("header .container .toggle label input");
let lightTheme = {
  "--header-b": "#f8f9fe",
  "--paragraph-c": "#646776",
  "--h1-c": "#1e212a",
  "--box-b": "#f0f3fa",
  "--body-b": "#fff",
  "--h2-c": "#1b1e27",
  "--footer-c": "#111",
  " --h4-c": "#111",
};
let darkTheme = {
  "--header-b": "#20222f",
  "--paragraph-c": "#767d99",
  "--h1-c": "#feffff",
  "--box-b": "#252b43",
  "--body-b": "#1d2029",
  "--h2-c": "#fffffb",
  "--footer-c": "#eee",
  " --h4-c": "#fff",
};
let theme;

function checkStorage() {
  if (window.localStorage.getItem("theme") == "dark") {
    toggle.checked = true;
    cToggle();
  } else {
    toggle.checked = false;
    cToggle();
  }
  if (window.localStorage.getItem("theme") != null) {
    changeTheme(`${window.localStorage.getItem("theme")}Theme`);
  }
}
checkStorage();

toggle.addEventListener("change", cToggle);
function cToggle() {
  if (toggle.checked) {
    toggle.parentElement.style.backgroundImage =
      "linear-gradient(to right ,hsl(210, 78%, 56%), hsl(146, 68%, 55%))";
    theme = "dark";
  } else {
    toggle.parentElement.style.backgroundColor = "#aeb2cb";
    toggle.parentElement.style.backgroundImage = "none";
    theme = "light";
  }
  if (theme == "dark") {
    changeTheme(darkTheme);
    window.localStorage.setItem("theme", "dark");
  } else {
    changeTheme(lightTheme);
    window.localStorage.setItem("theme", "light");
  }
}
cToggle();

function changeTheme(theme) {
  let varN = Object.keys(theme);
  let varV = Object.values(theme);
  for (let i = 0; i < varN.length; i++) {
    document.documentElement.style.setProperty(varN[i], varV[i]);
  }
}
