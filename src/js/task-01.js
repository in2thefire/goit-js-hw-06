const list = document.querySelector("#categories");
console.log(`Number of categories: ${list.children.length}`);
const item = document.querySelector(".item");
[...list.children].forEach((item) => {
  console.log(
    `Category: ${item.firstElementChild.textContent}\nElements: ${item.lastElementChild.children.length}`
  );
});
