/*
    What is Patterns are ?
        --> Resuable solution.
        --> Programming Templates.
        --> Specific way for writing code.
*/

/*-------------------------------------
    1. Reveling Module Pattern
-------------------------------------*/
//  Basic Structure

// (function () {
//     // Declare Private VAR and Fucntions

//     return {
//         // Declate Public VAR and Functions
//     }
// })();

//---> Standard Module Pattern <--- //

// const UICtrl = (function () {
//     let text = 'Hello World';

//     const changeText = function () {
//         const el  = document.querySelector('h1');
//         el.textContent = text;
//     }

//     return{
//         callChangeText: function () {
//             changeText();
//             console.log(text);

//         }
//     }
// })();

// UICtrl.callChangeText();
// // UICtrl.changeText();

// console.log(UICtrl.text);


//---> Reveling Module Pattern <--- //
// create an item controller
// const itemCtrl = (function () {
//     let data = [];

//     function add(item) {
//         data.push(item);
//         console.log('Item added...');

//     }

//     function get(id) {
//         return data.find(item => {
//             return item.id === id;
//         });
//     }

//     return {
//         add: add,
//         get: get
//     }
// })();

// itemCtrl.add({id: 1, name: 'Parth'});
// itemCtrl.add({id: 2, name: 'Darshan'});
// console.log(itemCtrl.get(2).name);

//---> Singleton Pattern <--- //
/*
    --> Singlton objetc is immidiate anonymouse function
    --> Only returns one instunce of an object at a time
*/

// const Singleton = (function () {
//     let instance;

//     function createInstance() {
//         const obj = new Object({Name: 'Parth'});

//         return obj;
//     }


//     return {
//         getInstance: function () {
//             if(!instance){
//                 instance = createInstance();
//             }

//             return instance;
//         }
//     }
// })();


// const instunceA = Singleton.getInstance();
// const instunceB = Singleton.getInstance();

// console.log(instunceA);
// console.log(instunceB);


// State Pattern
const PageState = function () {
    let currState = new homeState(this);

    this.init = function () {
        this.change(new homeState);
    }

    this.change = function (state) {
        currState = state;
    }
};

//Home State
const homeState = function (page) {
    document.querySelector('#heading').textContent = null;
    document.querySelector('#content').innerHTML = `
    <div class="jumbotron">
        <h1>Hello, world!</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quae cupiditate aperiam quod fugit autem quaerat aspernatur dolorem quia beatae?
        </p>
        <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
    </div>
    `;
}

// About State
const aboutState = function (page) {
    document.querySelector('#heading').textContent = 'About Us';
    document.querySelector('#content').innerHTML = `
        <p>This is the about page</p>
    `;
}

// Contact State
const contactState = function (page) {
    document.querySelector('#heading').textContent = 'Contact Us';
    document.querySelector('#content').innerHTML = `
        <form class="navbar-form navbar-left">
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Search">
            </div>
            <button type="submit" class="btn btn-default">Submit</button>
        </form>
    `;
}

// instantitate pageState
const page = new PageState();

// init the first state
page.init();

//Ui Vars
const home = document.getElementById('home'),
      about = document.getElementById('about')
      contact = document.getElementById('contact');

home.addEventListener('click', (e) => {
    page.change(new homeState);

    e.preventDefault();
});

about.addEventListener('click', (e) => {
    page.change(new aboutState);

    e.preventDefault();
});


contact.addEventListener('click', (e) => {
    page.change(new contactState);

    e.preventDefault();
});

jQuery('.product-item-actions .tocart').click(function () {
    jQuery(this).children('span').remove();
    jQuery(this).html('<label><i class="fas fa-lg fa-spinner fa-spin"></i></label>');
});

jQuery('.action.tocart > span').on('click', function () {
    console.log('Child');
    
});