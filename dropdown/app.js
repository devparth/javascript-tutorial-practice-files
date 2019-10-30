
// Get all the dropdown from document
document.querySelectorAll('.dropdown-toggle').forEach(dropDownFunc);
document.querySelectorAll('.submenu').forEach(submenuFunc);

// Dropdown Open and Close function
function dropDownFunc(dropDown) {
    console.log(dropDown.classList.contains('click-dropdown'));

    if(dropDown.classList.contains('click-dropdown') === true){
        dropDown.addEventListener('click', function (e) {
            e.preventDefault();        
    
            if (this.nextElementSibling.classList.contains('dropdown-active') === true) {
                // Close the clicked dropdown
                this.parentElement.classList.remove('dropdown-open');
                this.nextElementSibling.classList.remove('dropdown-active');
    
            } else {
                // Close the opend dropdown
                closeDropdown();
    
                // add the open and active class(Opening the DropDown)
                this.parentElement.classList.add('dropdown-open');
                this.nextElementSibling.classList.add('dropdown-active');
            }
        });
    }

    if(dropDown.classList.contains('hover-dropdown') === true){

        dropDown.onmouseover  =  dropDown.onmouseout = dropdownHover;

        function dropdownHover(e){
            if(e.type == 'mouseover'){
                // Close the opend dropdown
                closeDropdown();

                // add the open and active class(Opening the DropDown)
                this.parentElement.classList.add('dropdown-open');
                this.nextElementSibling.classList.add('dropdown-active');
            }
        }
    }
};

// Listen to the doc click
window.addEventListener('click', function (e) {
    // Close the menu if click happen outside menu
    if (e.target.closest('.dropdown-container') === null) {
        // Close the opend dropdown
        closeDropdown();
    }
});


// Close the openend Dropdowns
function closeDropdown() { 
    // remove the open and active class from other opened Dropdown (Closing the opend DropDown)
    document.querySelectorAll('.dropdown-container').forEach(function (container) { 
        container.classList.remove('dropdown-open')
    });

    document.querySelectorAll('.dropdown-menu').forEach(function (menu) { 
        menu.classList.remove('dropdown-active');
    });

    submenuClose();
}

// close the dropdown on mouse out from the dropdown list
document.querySelectorAll('.dropdown-menu').forEach(function (dropDownList) { 
    // close the dropdown after user leave the list
    dropDownList.onmouseleave = closeDropdown;
});


// submenu
function submenuFunc(submenuHover){
    submenuHover.onmouseover = submenuHover.onmouseout = submenu;
};

// submenu 
function submenu(e) {
    if(e.type == 'mouseover'){
        if(this.classList.contains('submenu') == true){
            submenuClose();
            this.classList.add('submenu-open');
        }
    }
    if(e.type == 'mouseout'){
        submenuClose();
    }
}

// close other submenu
function submenuClose() { 
    document.querySelectorAll('.submenu').forEach(function (subMenu) { 
        subMenu.classList.remove('submenu-open');
    });
}
