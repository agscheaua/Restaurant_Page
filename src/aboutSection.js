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
      localMeeting.appendChild(textInContainerTitleDev);
      textInContainerTitleDev.classList.add("textInContainerTitleDev");
      textInContainerTitleDev.textContent = "Delivery information:";

      const textInContainerDescripDev = document.createElement("div");
      localMeeting.appendChild(textInContainerDescripDev);
      textInContainerDescripDev.classList.add("textInContainerDescripDev");
      textInContainerDescripDev.textContent = "Phone number for placing deliveries: 0000 000 000, email addres for placing deliverise: patronElPapaBunos@shawarmaGood.com.";



};

export {createAboutSection};