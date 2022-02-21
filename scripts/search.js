import sidebar from "../components/sidebar.js";
console.log(sidebar)
let leftsidebar = document.getElementById("main")

leftsidebar.innerHTML= sidebar()

// let searchvalue = localStorage.getItem("search")

// console.log(searchvalue)


async function storeSearchterm(term) {

    let res = await fetch (term)

    let data = await res.json()

    return data 

}

export default storeSearchterm