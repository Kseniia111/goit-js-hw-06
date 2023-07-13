// Get the list of categories by id
const categories = document.getElementById("categories");

// Get the list items by class name
const items = categories.getElementsByClassName("item");

// Count and display the number of categories
console.log(`Number of categories: ${items.length}`);

// Loop through each item using forEach()
items.forEach(item => {
  // Get the heading text by tag name
  const heading = item.getElementsByTagName("h2")[0].textContent;

  // Get the nested list elements by tag name
  const elements = item.getElementsByTagName("li");

  // Count and display the heading text and the number of elements
  console.log(`Category: ${heading}`);
  console.log(`Elements: ${elements.length}`);
});