const categoriesList = document.querySelector('#categories');

console.log('Numbers of categories ' + categoriesList.children.length);
for (let i = 0; i < categoriesList.children.length; i++) {
  console.log('Category: ' + categoriesList.children[i].firstElementChild.innerHTML);
  console.log('Elements: ' + categoriesList.children[i].lastElementChild.children.length);
}