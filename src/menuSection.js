import chickenShawarmaPhoto from "../images/chickenShawarmaSmall.jpg";
import beefShawarmaPhoto from "../images/beefShawarmaSmall.jpg";
import friesPhoto from "../images/friesPatato.jpg";
import sodaPhoto from "../images/colaZero.jpg";

function createMenuSection(){
 const main = document.getElementById("content");

  const menu = document.createElement("section");
  main.appendChild(menu);
  menu.classList.add("menu")

    const sectionTitle = document.createElement("div");
    menu.appendChild(sectionTitle);
    sectionTitle.classList.add("sectionTitle");
    sectionTitle.textContent = "Menu";

    const shawarmaType = document.createElement("div");
    menu.appendChild(shawarmaType);
    shawarmaType.classList.add("shawarmaType", "foodTypes");
    shawarmaType.textContent = "Shawarmas";

    const chickenShawarma = document.createElement("div");
    menu.appendChild(chickenShawarma);
    chickenShawarma.classList.add("chickenShawarma", "titleName");

      const chickenName = document.createElement("div");
      chickenShawarma.appendChild(chickenName);
      chickenName.classList.add("chickenName", "typeName");
      chickenName.textContent = "Chicken Shawarma";
      
      const chickenDescription = document.createElement("div");
      chickenShawarma.appendChild(chickenDescription);
      chickenDescription.classList.add("chickenDescription", "typeDescription");
      chickenDescription.textContent = "Juicy, marinated chicken slow-roasted on a vertical spit, thinly sliced and wrapped in warm flatbread. Served with fresh vegetables and a rich garlic sauce, our chicken shawarma delivers a perfect balance of smoky flavor, tenderness, and bold Middle Eastern spices in every bite.";

      const chickenPrice = document.createElement("div");
      chickenShawarma.appendChild(chickenPrice);
      chickenPrice.classList.add("chickenPrice", "typePrice");
      chickenPrice.textContent = "Price: 6 Euro";

      const chickenImage = document.createElement("div");
      chickenShawarma.appendChild(chickenImage);
      chickenImage.classList.add("chickenImage", "typeImage");
      
        const imageContainerChicken = document.createElement("div");
        chickenImage.appendChild(imageContainerChicken);
        imageContainerChicken.classList.add("imageContainerChicken");
      
          const shawarmaImageChicken = document.createElement("img");
          imageContainerChicken.appendChild(shawarmaImageChicken);
          shawarmaImageChicken.classList.add("shawarmaImage", "foodImage");
          shawarmaImageChicken.setAttribute("src", chickenShawarmaPhoto);
          shawarmaImageChicken.setAttribute("alt", "a very beautiful chicken shawarma, yummy");
          shawarmaImageChicken.setAttribute("width", "500");
          shawarmaImageChicken.setAttribute("height", "500");
    
    const beefShawarma = document.createElement("div");
    menu.appendChild(beefShawarma);
    beefShawarma.classList.add("beefShawarma", "titleName");

      const beefName = document.createElement("div");
      beefShawarma.appendChild(beefName);
      beefName.classList.add("beefName", "typeName");
      beefName.textContent = "Beef Shawarma";
      
      const beefDescription = document.createElement("div");
      beefShawarma.appendChild(beefDescription);
      beefDescription.classList.add("beefDescription", "typeDescription");
      beefDescription.textContent = "Tender, slow-roasted beef seasoned with aromatic Middle Eastern spices, thinly sliced and wrapped in warm flatbread. Paired with crisp vegetables and a creamy tahini or garlic sauce, our beef shawarma offers a rich, savory flavor in every bite.";

      const beefPrice = document.createElement("div");
      beefShawarma.appendChild(beefPrice);
      beefPrice.classList.add("beefPrice", "typePrice");
      beefPrice.textContent = "Price: 7 Euro";

      const beefImage = document.createElement("div");
      beefShawarma.appendChild(beefImage);
      beefImage.classList.add("beefImage", "typeImage");
      
        const imageContainerBeef = document.createElement("div");
        beefImage.appendChild(imageContainerBeef);
        imageContainerBeef.classList.add("imageContainerBeef");
    
          const shawarmaImageBeef = document.createElement("img");
          imageContainerBeef.appendChild(shawarmaImageBeef);
          shawarmaImageBeef.classList.add("shawarmaImage", "foodImage");
          shawarmaImageBeef.setAttribute("src", beefShawarmaPhoto);
          shawarmaImageBeef.setAttribute("alt", "a very beautiful beef shawarma, yummy");
          shawarmaImageBeef.setAttribute("width", "500");
          shawarmaImageBeef.setAttribute("height", "500");
    
    const sideType = document.createElement("div");
    menu.appendChild(sideType);
    sideType.classList.add("sideType", "foodTypes");

    const friesSides = document.createElement("div");
    menu.appendChild(friesSides);
    friesSides.classList.add("friesSides", "titleName");

      const friesName = document.createElement("div");
      friesSides.appendChild(friesName);
      friesName.classList.add("friesName", "typeName");
      friesName.textContent = "French Fries";
      
      const friesDescription = document.createElement("div");
      friesSides.appendChild(friesDescription);
      friesDescription.classList.add("friesDescription", "typeDescription");
      friesDescription.textContent = "Crispy on the outside and fluffy on the inside, our golden French fries are perfectly seasoned and cooked to perfection. Served hot and fresh, they’re the ideal side to complement any meal.";

      const friesPrice = document.createElement("div");
      friesSides.appendChild(friesPrice);
      friesPrice.classList.add("friesPrice", "typePrice");
      friesPrice.textContent = "Price: 2 Euro";

      const friesImage = document.createElement("div");
      friesSides.appendChild(friesImage);
      friesImage.classList.add("friesImage", "typeImage");
      
        const imageContaineFries = document.createElement("div");
        friesImage.appendChild(imageContaineFries);
        imageContaineFries.classList.add("imageContaineFries");
    
          const sidesImage = document.createElement("img");
          imageContaineFries.appendChild(sidesImage);
          sidesImage.classList.add("sidesImage", "foodImage");
          sidesImage.setAttribute("src", friesPhoto);
          sidesImage.setAttribute("alt", "a very beautiful portion of golden fries with a toping of cheese, yummy");
          sidesImage.setAttribute("width", "500");
          sidesImage.setAttribute("height", "500");

    const beveregeType = document.createElement("div");
    menu.appendChild(beveregeType);
    beveregeType.classList.add("beveregeType", "foodTypes");

    const beveregeSoda = document.createElement("div");
    menu.appendChild(beveregeSoda);
    beveregeSoda.classList.add("beveregeSoda", "titleName");

      const beveregeName = document.createElement("div");
      beveregeSoda.appendChild(beveregeName);
      beveregeName.classList.add("beveregeName", "typeName");
      beveregeName.textContent = "Coca-Cola Zero Sugar";
      
      const beveregeDescription = document.createElement("div");
      beveregeSoda.appendChild(beveregeDescription);
      beveregeDescription.classList.add("beveregeDescription", "typeDescription");
      beveregeDescription.textContent = "A refreshing, zero-sugar soft drink with the classic taste of Coca-Cola. Coca-Cola Zero Sugar delivers bold flavor and crisp carbonation without the calories, making it the perfect guilt-free refreshment.";

      const beveregePrice = document.createElement("div");
      beveregeSoda.appendChild(beveregePrice);
      beveregePrice.classList.add("friesPrice", "typePrice");
      beveregePrice.textContent = "Price: 2 Euro";

      const beveregeImage = document.createElement("div");
      beveregeSoda.appendChild(beveregeImage);
      beveregeImage.classList.add("beveregeImage", "typeImage");
      
        const imageContaineSoda = document.createElement("div");
        beveregeImage.appendChild(imageContaineSoda);
        imageContaineSoda.classList.add("imageContaineSoda");
    
          const sodaImage = document.createElement("img");
          imageContaineSoda.appendChild(sodaImage);
          sodaImage.classList.add("sodaImage", "foodImage");
          sodaImage.setAttribute("src", sodaPhoto);
          sodaImage.setAttribute("alt", "a very beautiful portion of golden fries with a toping of cheese, yummy");
          sodaImage.setAttribute("width", "500");
          sodaImage.setAttribute("height", "500");  
}

export {createMenuSection};