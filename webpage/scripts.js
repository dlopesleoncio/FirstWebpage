let txt1 = document.querySelector("#cs50")
txt1.addEventListener("mouseout",function(){
        txt1.style.color = "white";
});

txt1.addEventListener("mouseover",function(){
        txt1.style.color = "grey";
});

let img = document.querySelector("#ld")
img.addEventListener("mouseover",function(){
        let img1 = document.getElementById('img1')
        img1.innerHTML= "<img alt='ln' src='ln.jpeg' width='25%'>"
});

img.addEventListener("mouseout",function(){
        let img1 = document.getElementById('img1')
        img1.innerHTML= ''
});
