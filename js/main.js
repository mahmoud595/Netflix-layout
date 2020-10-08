var dots = document.querySelectorAll('.column')
let slideindex = 0
showDot(slideindex)
function showDot(n){

    if(n > dots.length-1){
       
       n = 0
     
    }
    if(n < 0 ){
        n =dots.length - 1
       
    }
    for(var i = 0 ; i < dots.length ; i++){
        dots[i].className = dots[i].className.replace
        ("active" ," ")  
     
     }
    
     dots[n].className += " active"
}

dots.forEach(function (item , index){
    item.addEventListener("click" , function(){
        slideindex = index
        showDot(slideindex)
    })
   
})

var nav = document.querySelector(".nav")
var prev = document.querySelector(".prev")
var next = document.querySelector(".next")

next.addEventListener("click" , function(){
    nav.scrollLeft += dots[0].offsetWidth
    if(slideindex===dots.length-1){
        slideindex = -1
        nav.scrollLeft = 0
    }
    showDot(slideindex+=1)

})

prev.addEventListener("click" , function(){
    nav.scrollLeft -= dots[0].offsetWidth
    if(slideindex<= 0){
        slideindex = dots.length 
        nav.scrollLeft = nav.scrollWidth
    }

    showDot(slideindex-=1)


})