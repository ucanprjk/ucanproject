let reposData = []

fetch("https://api.github.com/users/ucanprjk/repos?sort=updated")
.then(res => res.json())
.then(data => {

document.getElementById("loading").style.display="none"

reposData = data

displayRepos(data)

})

function displayRepos(repos){

let container = document.getElementById("repos")

container.innerHTML=""

repos.forEach(repo => {

let cover =
`https://raw.githubusercontent.com/ucanprjk/${repo.name}/main/cover.png`

let card = document.createElement("div")

card.className="repo-card"

card.innerHTML = `

<img class="repo-img"
src="${cover}"
onerror="this.src='https://picsum.photos/400/200'">

<div class="repo-body">

<h3>${repo.name}</h3>

<p>${repo.description || "No description"}</p>

<div class="repo-buttons">

<a href="${repo.html_url}" target="_blank">
GitHub
</a>

<a href="${repo.html_url}/releases" target="_blank">
Download
</a>

</div>

</div>
`

container.appendChild(card)

})

}

document.getElementById("search").addEventListener("input", e => {

let value = e.target.value.toLowerCase()

let filtered = reposData.filter(repo =>
repo.name.toLowerCase().includes(value) ||
(repo.description && repo.description.toLowerCase().includes(value))
)

displayRepos(filtered)

})

document.getElementById("filter").addEventListener("change", e => {

let value = e.target.value

if(value === "all"){

displayRepos(reposData)

return

}

let filtered = reposData.filter(repo =>
repo.description &&
repo.description.toLowerCase().includes(value)
)

displayRepos(filtered)

})

if(localStorage.getItem("repos")){

displayRepos(JSON.parse(localStorage.getItem("repos")))

}

fetch("https://api.github.com/users/ucanprjk/repos")
.then(res=>res.json())
.then(data=>{

localStorage.setItem("repos",JSON.stringify(data))

displayRepos(data)

})