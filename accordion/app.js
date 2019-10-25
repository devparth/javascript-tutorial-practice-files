// get the accordion
const allAccordion = document.querySelectorAll('.acc-toggle');

// for all the accordion
allAccordion.forEach(function (toggle) {
    // listining to toggle click
    toggle.addEventListener('click', accFunction);
});

// var init to store function this
let accThis;
let childEle;

// accordion Function
function accFunction(e) {
    // storing function this in variable
    accThis =  this;
    childEle = this.parentElement.parentElement;
    
    if(this.parentElement.classList.contains('acc-open') === true){
        // Close the clicked accordion
        this.parentElement.classList.remove('acc-open');
        this.parentElement.querySelector('.acc-body').classList.remove('acc-body-active');
    }else{
        // Close the sibling accordions
        closeSiblings();

        // Open the clicked accordion
        this.parentElement.classList.add('acc-open');
        this.parentElement.querySelector('.acc-body').classList.add('acc-body-active');
    }    
}

/*
    On toggle Click Check other 
    open siblings and close those
    open siblings
*/
function closeSiblings() {

    // checking all the parents with "acc-open" class
    for(let i = 0; i <= childEle.childElementCount - 1 ; i++){
        
        if(childEle.children[i].classList.contains('acc-open') === true){

            // checking all the parents children with "acc-body-active" class
            for(let j = 0; j <= childEle.children[i].childElementCount - 1; j++){
                
                if(childEle.children[i].children[j].classList.contains('acc-body-active') === true){

                    // closing 'acc-body-active' by removing 'acc-body-active' class
                    childEle.children[i].classList.remove('acc-open');
                    childEle.children[i].children[j].classList.remove('acc-body-active');
                }
            }
        }
    }
}