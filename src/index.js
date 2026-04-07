import "./styles.css";
import {createHomeSection} from "./homeSection.js";
import {createMenuSection} from "./menuSection.js";
import {createAboutSection} from "./aboutSection.js";

function createTheSections() {
  const homeButton = document.querySelector(".homeButton");
  const menuButton = document.querySelector(".menuButton");
  const aboutButton = document.querySelector(".aboutButton");

  const mainContent = document.getElementById("content");
  
  let homeSectionStatus = true;
  let menuSectionStatus = false;
  let aboutSectionStatus = false;

  createHomeSection();

  homeButton.addEventListener("click", () => {
    if (homeSectionStatus === false) {
      while(mainContent.firstChild) {
        mainContent.removeChild(mainContent.firstChild);
      }; 
      createHomeSection();
      homeSectionStatus = true;
      menuSectionStatus = false;
      aboutSectionStatus = false;
    }
    else{
      return;
    };
  });

  menuButton.addEventListener("click", () => {
    if (menuSectionStatus === false) {
      while(mainContent.firstChild) {
        mainContent.removeChild(mainContent.firstChild);
      };
      createMenuSection();
      homeSectionStatus = false;
      menuSectionStatus = true;
      aboutSectionStatus = false;
    }
    else{
      return;
    };
  });

  aboutButton.addEventListener("click", () => {
    if (aboutSectionStatus === false) {
      while(mainContent.firstChild) {
        mainContent.removeChild(mainContent.firstChild);
      };
      createAboutSection();
      homeSectionStatus = false;
      menuSectionStatus = false;
      aboutSectionStatus = true;
    }
    else{
      return;
    };
  });
};
createTheSections();
