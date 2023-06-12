let contactsArr = document.querySelectorAll(".list-item");
let textContactsArr = document.querySelectorAll(".list-text");
let imgContactsArr = document.querySelectorAll(".client-img");

textContactsArr.forEach((textItem, index) => {
  textItem.addEventListener("mouseover", (event) => {
    imgContactsArr[index].style.opacity = "1";
    imgContactsArr[index].style.zIndex = "1";
  });
  textItem.addEventListener("mouseout", (event) => {
    imgContactsArr[index].style.opacity = "0";
    imgContactsArr[index].style.zIndex = "-1";
  });
});

imgContactsArr.forEach((img, index) => {
  img.addEventListener("mouseover", (event) => {
    img.style.opacity = "1";
    img.style.zIndex = "1";
  });
  img.addEventListener("mouseout", (event) => {
    img.style.opacity = "0";
    img.style.zIndex = "-1";
  });
});
