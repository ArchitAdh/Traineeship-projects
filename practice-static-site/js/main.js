const viewSwitch = document.getElementById("view-switch");
const btnManager = document.querySelector(".btn-manager");
const btnClient = document.querySelector(".btn-client");
const imgManager = document.querySelector(".manager-image");
const imgClient = document.querySelector(".client-image");

viewSwitch.addEventListener("click", (e) => {
  const classList = e.target.classList;

  if (classList.contains("btn-manager")) {
    //change btn color
    btnManager.classList.add("active");
    btnClient.classList.remove("active");

    //switch image
    if (!imgManager.classList.contains("active-img")) {
      imgManager.classList.add("active-img");
      imgClient.classList.remove("active-img");
    }
  } else if (classList.contains("btn-client")) {
    //change btn color
    btnManager.classList.remove("active");
    btnClient.classList.add("active");

    //switch image
    if (!imgClient.classList.contains("active-img")) {
      imgClient.classList.add("active-img");
      imgManager.classList.remove("active-img");
    }
  }
});
