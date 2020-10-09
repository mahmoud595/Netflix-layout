var dots = document.querySelectorAll('.column')
var dots2 =document.querySelectorAll('.column2')
var dots3 =document.querySelectorAll('.column3')
var dots4 =document.querySelectorAll('.column4')

var nav = document.querySelector(".nav")
var nav2 = document.querySelector(".nav2")
var nav3 = document.querySelector(".nav3")
var nav4 = document.querySelector(".nav4")

var prev = document.querySelector(".prev")
var next = document.querySelector(".next")

var prev2 = document.querySelector(".prev2")
var next2 = document.querySelector(".next2")

var prev3 = document.querySelector(".prev3")
var next3 = document.querySelector(".next3")

var prev4 = document.querySelector(".prev4")
var next4 = document.querySelector(".next4")


var slideindex = 0
var slideindex2 = 0
var slideindex3 = 0
var slideindex4 = 0


showDot(slideindex , dots)
showDot(slideindex2 , dots2)
showDot(slideindex3 , dots3)
showDot(slideindex4 , dots4)

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




dots3.forEach(function (item , index){
    item.addEventListener("click" , function(){
        slideindex3 = index
        showDot(slideindex3 ,dots3)
    })   
})

next3.addEventListener("click" , function(){
    nav3.scrollLeft += dots3[0].offsetWidth
    if(slideindex3===dots3.length-1){
        slideindex3 = -1
        nav3.scrollLeft = 0
    }
    showDot(slideindex3+=1 ,dots3)
})

prev3.addEventListener("click" , function(){
    nav3.scrollLeft -= dots3[0].offsetWidth
    if(slideindex3<= 0){
        slideindex3 = dots3.length 
        nav3.scrollLeft = nav3.scrollWidth
    }

    showDot(slideindex3-=1 ,dots3)
})










dots4.forEach(function (item , index){
    item.addEventListener("click" , function(){
        slideindex4 = index
        showDot(slideindex4 ,dots4)
    })
   
})


next4.addEventListener("click" , function(){
    nav4.scrollLeft += dots4[0].offsetWidth
    if(slideindex4===dots4.length-1){
        slideindex4 = -1
        nav4.scrollLeft = 0
    }
    showDot(slideindex4+=1 ,dots4)

})

prev4.addEventListener("click" , function(){
    nav4.scrollLeft -= dots4[0].offsetWidth
    if(slideindex4<= 0){
        slideindex4 = dots4.length 
        nav4.scrollLeft = nav4.scrollWidth
    }

    showDot(slideindex4-=1 ,dots4)


})