const numOfCategories = document.querySelector("#categories").childElementCount;
console.log("Number of categories: "+ numOfCategories);

const categoryNames = document.querySelectorAll("#categories .item");

categoryNames.forEach(category => {
    const title = category.querySelector("h2").textContent;
    const itemCount = category.querySelector("ul").childElementCount;
    console.log(`Category: ${title}`)
    console.log(`Elements: ${itemCount}`)
});

