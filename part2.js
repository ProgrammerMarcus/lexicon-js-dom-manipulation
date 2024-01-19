console.log("part2")
// 1
document.querySelector("body > header > p").style.color = "#384241"
// 2
document.querySelector("body > header").style["justify-content"] = "left"
// 3
document.querySelector("body > header").style["border-bottom"] = "1px solid lightgrey"
// 4
document.querySelector("#recipe-name").innerText = "Frozen Cheescake"
// 5
document.querySelector("body > main > section.introduction > article.description-container > div > span:nth-child(1)").classList.add("material-icons")
// 6
document.querySelector("body > main > section.introduction > article.description-container > div > span.time").innerText = "60+ min"
// 7
document.querySelector("body > main > section.introduction > article.image-container > img").src = "/assets/frozen-cheesecake-slice.jpg"
// 8
document.querySelector("body > main > section.how-to-do > article.ingredients-container").style.background = "#f9f9f9"
// 9
const biscuit = document.createElement("li")
biscuit.innerText = "15st digistivetex"
const butter = document.createElement("li")
butter.innerText = "Lite smör"
document.querySelector("body > main > section.how-to-do > article.ingredients-container > ul.ingredients-list-bottom > p").remove()
document.querySelector("body > main > section.how-to-do > article.ingredients-container > ul.ingredients-list-bottom").append(biscuit, butter)
// 10
document.querySelector("body > main > section.how-to-do > article.ingredients-container > ul.ingredients-list-paste > li:nth-child(3)").innerText = "3tsk vaniljsocker"
// 11
const cheese = document.createElement("li")
cheese.innerText = "400g naturell philadelphiaost"
document.querySelector("body > main > section.how-to-do > article.ingredients-container > ul.ingredients-list-paste").appendChild(cheese)
// 12
document.querySelector("body > main > section.how-to-do > article.instructions-container > h3").style["box-shadow"] = "none"
// 13
document.querySelector("body > main > section.how-to-do > article.instructions-container > ol > li:nth-child(9)").innerText = "Ställ in i frysen över natten."
document.querySelector("body > main > section.how-to-do > article.instructions-container > ol > li:nth-child(2)").innerHTML = "Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke."
