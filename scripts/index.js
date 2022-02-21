import sidebar from "../components/sidebar.js";
// console.log(sidebar)

import {apiCall,appendArticles} from "../scripts/main.js"


let leftsidebar = document.getElementById("sidebar")

leftsidebar.innerHTML= sidebar()

let articles = await apiCall("https://shrouded-earth-23381.herokuapp.com/api/headlines/india") 

let parents = document.getElementById("main")

let display =  appendArticles(articles, main)

let searchbar = document.getElementById("searchbar")

searchbar.addEventListener("keypress",function(e){
    if (e.key == "Enter"){
        var value = document.getElementById("searchbar").value ;
        localStorage.setItem("search_term",value) ;
        window.location.href="search.html"

    }
})



