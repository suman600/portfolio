let hasThemeLoaded = localStorage.getItem("themeLoaded");
let eleAppRoot = document.getElementsByClassName('hidden');
let eleTheme = document.getElementsByClassName('theme-loader');
if(hasThemeLoaded){
  eleAppRoot.item(0).classList.remove('hidden');
  eleTheme.item(0).classList.add('hidden')
}
setTimeout(setStorage, 2000);
function setStorage(){
  localStorage.setItem('themeLoaded', true);
  eleAppRoot.item(0).classList.remove('hidden');
  eleTheme.item(0).classList.add('hidden');
}
