//for loading check storage
var checked = JSON.parse(sessionStorage.getItem("change-theme"));
    document.getElementById("change-theme").checked = checked;
//
if (JSON.parse(sessionStorage.getItem('dark-theme-enabled'))) {
    document.body.classList.add('light-mode');
}

//click on theme change
document.getElementById('change-theme').addEventListener('click', function () {
  //setting checkbox active status
    var checkbox = document.getElementById("change-theme");
    sessionStorage.setItem("change-theme", checkbox.checked);
  //theme changing with light mode
      let darkThemeEnabled = document.body.classList.toggle('light-mode');
    sessionStorage.setItem('dark-theme-enabled', darkThemeEnabled);
});