// Get all the dropdown from document
document.querySelectorAll('.dropdown-toggle').forEach(dropDownFunc);
document.querySelectorAll('.submenu').forEach(submenuFunc);

// Dropdown Open and Close function
function dropDownFunc(dropDown) {
    if (dropDown.classList.contains('click-dropdown') === true) {
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

    if (dropDown.classList.contains('hover-dropdown') === true) {

        dropDown.onmouseover = dropDown.onmouseout = dropdownHover;

        function dropdownHover(e) {
            if (e.type == 'mouseover') {
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
        container.classList.remove('dropdown-open');
    });

    document.querySelectorAll('.dropdown-menu').forEach(function (menu) {
        menu.classList.remove('dropdown-active');
    });
}

// close the dropdown on mouse out from the dropdown list
document.querySelectorAll('.dropdown-menu').forEach(function (dropDownList) {
    // close the dropdown after user leave the list
    dropDownList.onmouseleave = function () { 
        // onmouseleave check if submenu is open or not
        dropDownList.querySelectorAll('li.submenu').forEach(function (li) {
            if(li.classList.contains(submenu-open) == false){
                closeDropdown();
            }
        });
    };
});


/*---- Submenu Logic ----*/

// submenu
function submenuFunc(submenuHover) {
    // checking submenu mouse hover and mouse leave event
    submenuHover.onmouseover = submenuHover.onmouseout = submenu;
};

// submenu 
function submenu(e) {
    // if mouse hover
    if (e.type == 'mouseover') {
        if (this.classList.contains('submenu') == true) {
            // closing other open submenu classes
            submenuClose();
            // adding class to submenu li
            this.classList.add('submenu-open');
        }
    }
    // if mouse leave
    if (e.type == 'mouseout') {
        // closing the submenu
        submenuClose();
    }
}

// close other submenu
function submenuClose() {
    // performing close function for all the open submenus
    document.querySelectorAll('.submenu').forEach(function (subMenu) {
        subMenu.classList.remove('submenu-open');
    });
}