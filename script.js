//slider----
const rightbtn =document.querySelector('.ti-angle-right')
const leftbtn =document.querySelector('.ti-angle-left')
const imgNumber = document.querySelectorAll('.slider-left-top img')
const imgtitle = document.querySelectorAll('.slider-left-bottom li')
console.log(imgNumber.length)
let index =0
rightbtn.addEventListener ( "click", function()  {
    index = index+1
    if(index>imgNumber.length-1){
        index=0
    }
    removeactive()
    document.querySelector(".slider-left-top").style.right = index * 100 +"%" 
    imgtitle[index].classList.add("active")
})
leftbtn.addEventListener("click",function()
{
    index = index -1
    if(index=0)
    {
        index=imgNumber.length-1
    }
    removeactive()
    document.querySelector(".slider-left-top").style.right = index*100+"%"
    imgtitle[index].classList.add("active")
})
//sub-slider

console.log(imgtitle)
imgtitle.forEach(function(image,index) {
    image.addEventListener("click",function(){
        removeactive()
    document.querySelector(".slider-left-top").style.right = index * 100 +"%" 
        image.classList.add("active")
    })
});
function removeactive(){
    let imgactive =document.querySelector('.active')
    imgactive.classList.remove("active")
}
function imgAuto()
{
    index = index +1
    if(index>imgNumber.length-1)
    {
        index=0
    }
    removeactive()
    document.querySelector(".slider-left-top").style.right = index * 100 +"%" 
    imgtitle[index].classList.add("active")
    
}
setInterval(imgAuto,5000)



 
