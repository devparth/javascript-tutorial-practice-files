document.querySelectorAll(".click-me").forEach(function (openContent) { 
    openContent.addEventListener('click', myFunc);
});
var textContainer = document.querySelectorAll(".text-container");

function myFunc(e){
    e.preventDefault();
    let target = this.nextElementSibling;
    console.log(target.classList.contains('open'));

    if(target.classList.contains('open') === true){
        target.style.cssText += "height: 0px;"
        setTimeout(function(){
            target.removeAttribute('style');
            target.classList.remove('open');
        }, 500);
    }else{
        textContainer.forEach(function (allContent) {
            allContent.style.cssText += "height: 0px;";
            allContent.removeAttribute('style');
            allContent.classList.remove('open');
        });
        target.classList.add('open');
        target.style.cssText += "display:block; overflow: hidden; transition: all ease-in-out 0.3s;"
        setTimeout(function(){
            target.style.cssText += "height: 230px;"
        }, 50);
    }
}