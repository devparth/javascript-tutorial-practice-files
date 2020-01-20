/*
----------------------
   Ajex And Fetch API
----------------------
<-- AJEX = ASynchronous Javascript And XML -->

=> Synchronous Programming
---> Wait Untill Data Fetch and DO next thing after Data Featch and operation COmpletes.

=> ASynchronous Programming
---> We can Do another things while he Data Feathing is in process.

=> Ways to WORK with Async COde
---> Callbacks
---> Promises(ES2106)
---> Async/Await(New Feature)

--------------------
   What Is Ajax ?
--------------------
--> Asynchronous JS and XML
--> Set of web tech
--> Send and recive data Asynchronously
--> Does not Interfears with the current page
--> JSON has replaced the XML

--> Make Async request in the background
--> NO page Reload/Refresh
--> Featch Data
--> Very Interactve

*/

// // XHR Object Method
// document.querySelector('#get-data').addEventListener('click', loadData);

// // loadData Function
// function loadData() {
//     // create en XHR object
//     const xhr = new XMLHttpRequest();

//     // Open the XHR
//     xhr.open('GET', 'data.txt', true);

//     // Optional - Used for Loaders/Sipnners
//     xhr.onprogress = function () {
//         console.log('ReadyState', xhr.readyState);
//     }

//     // Call XHROnLoad
//     xhr.onload = function () {

//         console.log('ReadyState', xhr.readyState);

//         if(this.status === 200){
//             // console.log(xhr.responseText);

//             document.querySelector('.output').innerHTML = `
//                 <h2>${this.responseText}</h2>
//             `;
//         }
//     }

//     // error
//     xhr.onerror = function () {
//         console.log('Resquest Err');
//     }

//     // send XHR
//     xhr.send();
// }

/*
   ------------------
    AJEX Steps
   ------------------

   1. Create New XHR Objext
   --> const newXHR = new XMLHttpRequest();

   2. Open The XHR
   --> newXHR.open('GET,POST', 'fileName', true(asynchronous)/false(synchronous));

   3. Class XHR Onload
   --> newXHR.onload = function(){}

   4. Check for OK Status
   --> newXHR.onload = function(){
       if(this.status === 200){
        //  Perform the operation
       }
   }

   5. Check if there any err whicle data fetching
   --> newXHR.onerror = function () {
        console.log('Resquest Err');
       }

    6. Send the responce
    --> newXHR.send();
*/


// AJEX - Working With JSON File(For Only One Customer)
document.querySelector('.customer').addEventListener('click', loadCustomer);

function loadCustomer() {
    // insatntiate new XHR object
    const customer = new XMLHttpRequest();

    // Open the reuqest
    customer.open('GET', 'customer.json', true);

    // onload
    customer.onload = function () {
        // check if status is 200 or not
        if(customer.status === 200){
            // console.log(this.responseText);
            const customerInfo = JSON.parse(this.responseText);

            // output var
            const output = `
                <ul>
                    <li><strong>Id: </strong> ${customerInfo.id}</li>
                    <li><strong>Name: </strong> ${customerInfo.name}</li>
                    <li><strong>Company: </strong> ${customerInfo.company}</li>
                    <li><strong>Phone: </strong> ${customerInfo.phone}</li>
                </ul>
            `;

            // append output to div
            document.querySelector('.customer-output').innerHTML = output;
        }
    }

    // send the request
    customer.send();
}


// AJEX - Working With JSON File(For Only One Customer)
document.querySelector('.customers').addEventListener('click', loadCustomers);
// document.addEventListener('DOMContentLoaded', loadCustomers);

function loadCustomers() {
    // insatntiate new XHR object
    const customers = new XMLHttpRequest();

    // Open the reuqest
    customers.open('GET', 'customers.json', true);

    // onload
    customers.onload = function () {
        // check if status is 200 or not
        if(customers.status === 200){
            // console.log(this.responseText);
            const customersInfo = JSON.parse(this.responseText);

            // output
            let output = '';

            customersInfo.forEach(function (customer) {
                output += `
                    <ul>
                        <li><strong>Id: </strong> ${customer.id}</li>
                        <li><strong>Name: </strong> ${customer.name}</li>
                        <li><strong>Company: </strong> ${customer.company}</li>
                        <li><strong>Phone: </strong> ${customer.phone}</li>
                    </ul>
                `;

                // append output to div
                document.querySelector('.customers-output').innerHTML = output;
            });
        }
    }

    // send the request
    customers.send();
}