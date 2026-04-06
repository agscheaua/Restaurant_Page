import "./styles.css";
import {createHomeSection} from "./homeSection.js"

function createTheSections() {
  const homeButton = document.querySelector(".homeButton");
  const menuButton = document.querySelector(".menuButton");
  const aboutButton = document.querySelector(".aboutButton");
  
  let homeSectionStatus = false;

  homeButton.addEventListener("click", () => {
    if (homeSectionStatus === false) {
      createHomeSection();
      homeSectionStatus = true;
    }
    else{
      return;
    };

  });

  menuButton.addEventListener("click", () => {
    alert("not yet created");
  });

  aboutButton.addEventListener("click", () => {
    alert("not yet ready 2");
  });
};
createTheSections();