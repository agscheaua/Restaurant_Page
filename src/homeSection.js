import homePhoto from "../images/shawarma.avif";

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

      const imageContainer = document.createElement("div");
      imagePhoto.appendChild(imageContainer);
      imageContainer.classList.add("imageContainer")

        const imageHome = document.createElement("img");
        imageContainer.appendChild(imageHome);
        imageHome.setAttribute("src", homePhoto);
        imageHome.setAttribute("alt", "a very beautiful shawarma, yummy");
        imageHome.setAttribute("width", "500");
        imageHome.setAttribute("height", "500");

    const textImage = document.createElement("div");
    home.appendChild(textImage);
    textImage.classList.add("textImage");
    textImage.textContent = "The best shawarmas in the world!";

    const introductionStory = document.createElement("div");
    home.appendChild(introductionStory);
    introductionStory.classList.add("introductionStory");
    introductionStory.textContent = "Welcome to our shawarma spot—where bold flavors meet fresh ingredients. Every wrap is crafted with perfectly seasoned meat, slow-roasted to perfection, then paired with crisp vegetables and rich, homemade sauces. Whether you're grabbing a quick bite or satisfying a late-night craving, we serve shawarma that’s simple, authentic, and unforgettable.";

    const openHours = document.createElement("div");
    home.appendChild(openHours);
    openHours.classList.add("openHours");

      const openHoursTitle = document.createElement("div");
      openHours.appendChild(openHoursTitle);
      openHoursTitle.textContent = "Open hours:"

      for (let i = 0; i < 7; i++) {
        const openHoursDay = document.createElement("div");
        openHours.appendChild(openHoursDay);

        if (i === 0) {
          openHoursDay.textContent = "Monday: 8:00 - 00:00";
        }
        else if (i === 1) {
          openHoursDay.textContent = "Tuesday: 8:00 - 00:00";
        }
        else if (i === 2) {
          openHoursDay.textContent = "Wednesday: 8:00 - 00:00";
        }
        else if (i === 3) {
          openHoursDay.textContent = "Thursday: 8:00 - 00:00";
        }
        else if (i === 4) {
          openHoursDay.textContent = "Friday: 8:00 - 00:00";
        }
        else if (i === 5) {
          openHoursDay.textContent = "Saturday: 8:00 - 00:00";
        }
        else if (i === 6) {
          openHoursDay.textContent = "Sunday: 8:00 - 00:00";
        }
        else {};
      };
    
    const location = document.createElement("div");
    home.appendChild(location);
    location.classList.add("location");

      const locationTitle = document.createElement("div");
      location.appendChild(locationTitle);
      locationTitle.textContent = "Location:";

      const adress = document.createElement("div");
      location.appendChild(adress);
      adress.classList.add("adress");
      adress.textContent = "Mun. Bucharest, Str. 45 Mai, nr. 23, Sector 8";

        
};

export {createHomeSection};