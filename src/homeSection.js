
function createHomeSection() {
  const main = document.getElementById("content");

  const home = document.createElement("section");
  main.appendChild(home);
  home.classList.add("home");

    const sectionTitle = document.createElement("div");
    home.appendChild(sectionTitle);
    sectionTitle.classList.add("sectionTitle");
    sectionTitle.textContent = "Home";

    const imagePhoto = document.createElement("div");
    home.appendChild(imagePhoto);
    imagePhoto.classList.add("imagePhoto");

      
}

export {createHomeSection};