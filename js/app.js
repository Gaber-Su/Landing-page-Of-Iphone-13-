new WOW().init();

var imgSlider = document.querySelectorAll(".slider img");
var currentImgSrc;
var imageCol = document.getElementById('imageCol');
console.log(imageCol)

for(let i=0; i < imgSlider.length; i++) {
    imgSlider[i].addEventListener("click", function(event){
        currentImgSrc =  event.target.src;
        imageCol.src = currentImgSrc;

        if(i == 0 ) {
            document.body.style.backgroundColor = '#bfa04c'
        }
       else if(i == 1 ) {
            document.body.style.backgroundColor = '#1f6db1'
        }
       else if(i == 2 ) {
            document.body.style.backgroundColor = '#1b1a1b'
        }
       else if(i == 3 ) {
            document.body.style.backgroundColor = '#b48c4d'
        }
       else if(i == 4 ) {
            document.body.style.backgroundColor = '#b52123'
        }
    })
}