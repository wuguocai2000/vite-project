export const lightTheme = () => {
  document.documentElement.style.setProperty("--theme_dark_bg_color", '#ffffff');
  document.documentElement.style.setProperty("--theme_dark_color", '#000');
  document.getElementById("app").className = "light"
  localStorage.setItem("skin", 'light');
}

export const darkTheme = () => {
  document.documentElement.style.setProperty("--theme_dark_bg_color", '#242424');
  document.documentElement.style.setProperty("--theme_dark_color", 'rgba(255, 255, 255, 0.87)');
  document.getElementById("app").className = "dark"
  localStorage.setItem("skin", "dark");
}

export const isMobile = () => {
  let flag = navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  );
  return flag;
}