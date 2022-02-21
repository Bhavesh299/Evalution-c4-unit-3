async function apiCall(url) {

    let res = await fetch(url) ;

    let data = await res.json() ;
    // console.log(data)

    return data ;
   
    //add api call logic here


}


function appendArticles(articles, main) {

    articles.forEach(function(el){
        let div = document.createElement("div")

        let img = document.createElement("img")
        img.src = el.urlToImage
        img.setAttribute( "class" , "image" )

        let title = document.createElement("h3")
        title.innerHTML=el.title

        div.append(img,title)

        div.addEventListener("click",function(){
            localStorage.setItem("article",JSON.stringify(el))
            // console.log(el)
            window.location.href="news.html"
        })

        main.append(div)
    })


    //add append logic here
}

function displaydetailes(data,main){
    // console.log(data)
    let div = document.createElement("div")

    let img = document.createElement("img")
    img.src= data.urlToImage
    img.setAttribute("class","image") 

    let title = document.createElement("h1")
    title.innerHTML=data.title

    let dis = document.createElement("h3")
    dis.innerHTML=data.description

    let release = document.createElement("h3")
    release.innerHTML=data.publishedAt

    let content = document.createElement("p")
    content.innerHTML=data.content


    div.append(img,title,release,content,dis)

    main.append(div)
}

export { apiCall, appendArticles,displaydetailes }