
let mainDropdownButton = document.querySelector('.headerBar-mainDropdown-button');
let mainNav = document.querySelector('.lower-headerBar nav');

// add eventListener
mainDropdownButton.addEventListener('click', toggleNavDropdown);


let subDropdownButtons = document.querySelectorAll('.headerBar-subDropdown-wrapper');
let subNavs = document.querySelectorAll('.headerBar-subDropdown-wrapper');

// add eventListeners
for (let i = 0; i < subDropdownButtons.length; i++) {
    console.log(subDropdownButtons[i]);
    subDropdownButtons[i].addEventListener('click', toggleSubDropdown);
}


function toggleNavDropdown(){
    mainNav.classList.toggle('mainNavDropdownActive');
}

function toggleSubDropdown(){
    if (!this.classList.contains('subNavDropdownActive')) {
        // toggle all subDropdowns closed and re-open "this" one
        for (let i = 0; i < subDropdownButtons.length; i++) {
            subDropdownButtons[i].classList.remove('subNavDropdownActive');
        }
        this.classList.add('subNavDropdownActive');
    }else{
        // toggle all subDropdowns closed and DON'T re-open "this" one
        for (let i = 0; i < subDropdownButtons.length; i++) {
            subDropdownButtons[i].classList.remove('subNavDropdownActive');
        }
    }
}
