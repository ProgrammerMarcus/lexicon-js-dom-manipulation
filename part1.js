console.log("part 1")

const part1 = {
    recipeName: document.getElementById("recipe-name"),
    description: document.querySelector(".description"),
    image: document.getElementsByTagName("img")
}

// 1
console.log(part1.recipeName.innerHTML)
// 2
console.log(part1.recipeName.tagName)
// 3
console.log(getComputedStyle(part1.description)["font-size"])
// 4
console.log(part1.image[0].alt)
// 5
const img = {
    url: part1.image[0].src,
    height: part1.image[0].height,
    width: part1.image[0].width,
}
console.log(img)

// 1
const pasteList = document.getElementsByClassName("ingredients-list-paste")[0]
console.log(pasteList.children.length)
// 2
console.log(pasteList.children[3].innerText)
// 3
const instructions = document.getElementsByClassName("instructions-list")[0]
const stuff = []
for (i = 0; i < instructions.children.length; i++) {
    stuff.push({order: i + 1, text: instructions.children[i].innerText})
}
console.log(stuff)


