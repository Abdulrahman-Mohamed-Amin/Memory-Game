let controlBtn = document.querySelector(".control-btn")

let picCont = document.querySelector(".container")

let picture = document.querySelectorAll(".container .game-cont")

let cong = document.querySelector(".cong")
let congbtn = document.querySelector(".cong button")

congbtn.addEventListener("click" , () =>{
    window.location.reload()
})
///////// start control btn /////////////////

controlBtn.onclick = () =>{
    
    let name = window.prompt("Enter Your Name")
    
    if(name == null || name == ""){
        document.querySelector(".name span").innerHTML = "Unknown"
    }else{
        document.querySelector(".name span").innerHTML = name
        
    }
    controlBtn.parentElement.remove()
}

///////// end control btn /////////////////


///////// start shuffl and flip  /////////////////

let block = Array.from(picCont.children)
let orderBlock = [...Array(block.length).keys()]

picture.forEach((pic , ind) =>{
    pic.style.order = shuffl(orderBlock)[ind]

    // add flip
    pic.addEventListener("click" , (e) =>{
        flip(pic)
    let checkMatch= Array.from(picture).filter(e =>e.classList.contains("match"))

    if(checkMatch.length == picture.length){
        cong.style.display = "flex"
    }
    })
})



function flip(selectItem){
    
    selectItem.classList.add("flip")
    let checkFlip = Array.from(picture).filter(e =>e.classList.contains("flip"))
    
    if(checkFlip.length == 2){
        stopClick()
        isMatch(checkFlip[0] , checkFlip[1])
    }
}

function stopClick(){
    picCont.classList.add("stop")

    setTimeout(() =>{
    picCont.classList.remove("stop")
    },1000)
}

function isMatch(ele1 , ele2){
    let tries = document.querySelector('.tries span')

    if(ele1.dataset.tec == ele2.dataset.tec){
        ele1.classList.remove("flip")
        ele2.classList.remove("flip")

        ele1.classList.add("match")
        ele2.classList.add("match")
    }else{
        tries.innerHTML = parseInt(tries.innerHTML) + 1

        setTimeout(() => {
            ele1.classList.remove("flip")
            ele2.classList.remove("flip")
        }, 1000);
    }
}

function shuffl(arr) {
    let cur = arr.length ,
    temp,
    random

    while(cur > 0){
        random = Math.floor(Math.random() * cur)
        
        cur--

        temp = arr[cur];

        arr[cur] = arr[random]

        arr[random] = temp

    }
    return arr
}
