const baseURL = 'https://call-of-duty-modern-warfare.p.rapidapi.com/warzone-matches'
const headers = {"headers":{
    "x-rapidapi-host": "call-of-duty-modern-warfare.p.rapidapi.com",
    "x-rapidapi-key": "1b362a3c69msh699f66ee6c9667bp1c4e4cjsn81568c35ea64"
}}

let searchForm = document.querySelector('form')

let username = document.getElementById('username')
let platform = document.getElementById('platform')
console.log(username.value);

let url;

searchForm.addEventListener('submit', fetchMatchHistory)

function fetchMatchHistory(e) {
    e.preventDefault()

    let userPlatform = platform.options[platform.selectedIndex].value
    let newUser = username.value.replace("#", "%23")

    url = `${baseURL}/${newUser}/${userPlatform}`
    console.log(url)
    fetch(url, {
        "headers":{
            "x-rapidapi-host": "call-of-duty-modern-warfare.p.rapidapi.com",
            "x-rapidapi-key": "1b362a3c69msh699f66ee6c9667bp1c4e4cjsn81568c35ea64"
        }
    })
    .then(res => res.json())
    .then(data => console.log(data))
    
}

let recentMatches = document.getElementById('recent-games')

function displayMatchHistory(data) {
    let match = document.createElement("a")
    match.innerHTML = data.matches.mode
    recentMatches.appendChild(match)
}
