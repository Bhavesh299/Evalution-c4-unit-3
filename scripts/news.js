import sidebar from "../components/sidebar.js";
console.log(sidebar)
let leftsidebar = document.getElementById("sidebar")

leftsidebar.innerHTML= sidebar()

import {apiCall,appendArticles,displaydetailes} from "../scripts/main.js"

let details = JSON.parse(localStorage.getItem("article"))
// console.log(details)
let parents = document.getElementById("container")

let showdata = displaydetailes(details,parents)