var dots = document.querySelectorAll('.column')
var dots2 =document.querySelectorAll('.column2')
var nav = document.querySelector(".nav")
var nav2 = document.querySelector(".nav2")
var prev = document.querySelector(".prev")
var next = document.querySelector(".next")
var prev2 = document.querySelector(".prev2")
var next2 = document.querySelector(".next2")
var slideindex = 0
var slideindex2 = 0
showDot(slideindex , dots)
showDot(slideindex2 , dots2)

function showDot(n , col){

    if(n > col.length-1){
       
       n = 0
     
    }
    if(n < 0 ){
        n =col.length - 1
       
    }
    for(var i = 0 ; i < col.length ; i++){
        col[i].className = col[i].className.replace
        ("active" ," ")  
     
     }
    
     col[n].className += " active"
}

dots.forEach(function (item , index){
    item.addEventListener("click" , function(){
        slideindex = index
        showDot(slideindex ,dots)
    })
   
})


next.addEventListener("click" , function(){
    nav.scrollLeft += dots[0].offsetWidth
    if(slideindex===dots.length-1){
        slideindex = -1
        nav.scrollLeft = 0
    }
    showDot(slideindex+=1 ,dots)

})

prev.addEventListener("click" , function(){
    nav.scrollLeft -= dots[0].offsetWidth
    if(slideindex<= 0){
        slideindex = dots.length 
        nav.scrollLeft = nav.scrollWidth
    }

    showDot(slideindex-=1 ,dots)


})

dots2.forEach(function (item , index){
    item.addEventListener("click" , function(){
        slideindex2 = index
        showDot(slideindex2 ,dots2)
    })
   
})


next2.addEventListener("click" , function(){
    nav2.scrollLeft += dots2[0].offsetWidth
    if(slideindex2===dots2.length-1){
        slideindex2 = -1
        nav2.scrollLeft = 0
    }
    showDot(slideindex2+=1 ,dots2)

})

prev2.addEventListener("click" , function(){
    nav2.scrollLeft -= dots2[0].offsetWidth
    if(slideindex2<= 0){
        slideindex2 = dots2.length 
        nav2.scrollLeft = nav2.scrollWidth
    }

    showDot(slideindex2-=1 ,dots2)


})

