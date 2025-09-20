const item = document.querySelectorAll(".item");
console.log(`Number of categories: ${item.length}`);

item.forEach(element => {
    const title = element.querySelector("h2");
    const titlee = title.textContent.trim();
    const all = element.querySelectorAll('ul li').length;
    console.log(`Category: ${titlee}`);
    console.log(`Elements: ${all}`);
});
