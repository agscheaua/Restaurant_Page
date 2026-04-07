import locationPhoto from "../images/locationRestaurant.png";

function createAboutSection() {
 const main = document.getElementById("content");

  const contact = document.createElement("section");
  main.appendChild(contact);
  contact.classList.add("contact");

    const titleSection = document.createElement("div");
    contact.appendChild(titleSection);
    titleSection.classList.add("titleSection");
    titleSection.textContent = "About us";

    const localMeeting = document.createElement("div");
    contact.appendChild(localMeeting);
    localMeeting.classList.add("localMeeting");

      const textInContainerTitleLocal = document.createElement("div");
      localMeeting.appendChild(textInContainerTitleLocal);
      textInContainerTitleLocal.classList.add("textInContainerTitleLocal");
      textInContainerTitleLocal.textContent = "Visit us:";

      const textInContainerDescripLocal = document.createElement("div");
      localMeeting.appendChild(textInContainerDescripLocal);
      textInContainerDescripLocal.classList.add("textInContainerDescripLocal");
      textInContainerDescripLocal.textContent = "You can find us between 8:00 - 00:00, any day of the week, at our location in Mun. Bucharest, Str. 45 Mai, nr. 23, Sector 8.";

    const deliveryInfo = document.createElement("div");
    contact.appendChild(deliveryInfo);
    deliveryInfo.classList.add("deliveryInfo");
    
      const textInContainerTitleDev = document.createElement("div");
      deliveryInfo.appendChild(textInContainerTitleDev);
      textInContainerTitleDev.classList.add("textInContainerTitleDev");
      textInContainerTitleDev.textContent = "Delivery information:";

      const textInContainerDescripDev = document.createElement("div");
      deliveryInfo.appendChild(textInContainerDescripDev);
      textInContainerDescripDev.classList.add("textInContainerDescripDev");
      textInContainerDescripDev.textContent = "Phone number for placing deliveries: 0000 000 000, email addres for placing deliverise: patronElPapaBunos@shawarmaGood.com.";

    const colaborationInfo = document.createElement("div");
    contact.appendChild(colaborationInfo);
    colaborationInfo.classList.add("colaborationInfo");
    
      const textInContainerTitleLoc = document.createElement("div");
      colaborationInfo.appendChild(textInContainerTitleLoc);
      textInContainerTitleLoc.classList.add("textInContainerTitleLoc");
      textInContainerTitleLoc.textContent = "For any other informations or colaborations:";

      const textInContainerDescripLoc = document.createElement("div");
      colaborationInfo.appendChild(textInContainerDescripLoc);
      textInContainerDescripLoc.classList.add("textInContainerDescripLoc");
      textInContainerDescripLoc.textContent = "You can contact our El Patron at the phone number 1111 111 111, or you can use the email addres ElPatronsNumero1@shawarmaGood.com, or you can visit us any day of the week between our working hours, to speech with him.";

      const locationContainer = document.createElement("div");
      colaborationInfo.appendChild(locationContainer);
      locationContainer.classList.add("locationContainer");

        const imageLocationContainer = document.createElement("div");
        locationContainer.appendChild(imageLocationContainer);
        imageLocationContainer.classList.add("imageLocationContainer");

          const imagelocation = document.createElement("img");
          imageLocationContainer.appendChild(imagelocation);
          imagelocation.classList.add("imagelocation");
          imagelocation.setAttribute("src", locationPhoto);
          imagelocation.setAttribute("alt", "a very beautiful map");
          imagelocation.setAttribute("width", "1000");
          imagelocation.setAttribute("height", "500");

};

export {createAboutSection};