const categoriesEl = document.getElementById('categories').children.length;
console.log(`Number of categories: ${categoriesEl}`);

const arrayTitlesCategories = document.querySelectorAll('h2');
arrayTitlesCategories.forEach((title) => {
  console.log('Category:', title.textContent);
  console.log('Elements:', title.nextElementSibling.children.length);
});