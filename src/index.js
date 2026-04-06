import "./styles.css";
import {createHomeSection} from "./homeSection.js";
import {createMenuSection} from "./menuSection.js";
import {createAboutSection} from "./aboutSection.js";

function createTheSections() {
  const homeButton = document.querySelector(".homeButton");
  const menuButton = document.querySelector(".menuButton");
  const aboutButton = document.querySelector(".aboutButton");
  
  let homeSectionStatus = false;
  let menuSectionStatus = false;

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
    if (menuSectionStatus === false) {
      createMenuSection();
      menuSectionStatus = true;
    }
    else{
      return;
    };
  });

  aboutButton.addEventListener("click", () => {
    alert("not yet ready 2");
  });
};
createTheSections();
createAboutSection();