document.getElementById('button1').addEventListener('click', loadCustomer);

// Load Customer
function loadCustomer(e) { 
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer.json', true);

    xhr.onload = function () { 
        if(this.status === 200){
            // console.log(this.responseText);

            const customer = JSON.parse(this.responseText);

            const output = `
                <ul>
                  <li>ID: ${customer.id}</li>
                  <li>Name: ${customer.name}</li>
                  <li>Company: ${customer.company}</li>
            `;

            document.getElementById('customer').innerHTML = output;
        }
    }

    xhr.send();

}


document.getElementById('button2').addEventListener('click', loadCustomers);

// Load Customers
function loadCustomers(e) { 
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customers.json', true);

    xhr.onload = function () { 
        if(this.status === 200){
            const customers = JSON.parse(this.responseText);

            console.log(customers);

            let output = '';

            // Using for loop
            // for(let i = 0; i < customers.length; i++){
            //     output += `
            //         <ul>
            //             <li>ID: ${customers[i].id}</li>
            //             <li>Name: ${customers[i].name}</li>
            //             <li>Company: ${customers[i].company}</li>
            //             <li>Company: ${customers[i].phone}</li>
            //         </ul>
            //     `;
            // }
            
            // Using for each
            customers.forEach(function (customer) { 
                output += `
                    <ul>
                        <li>ID: ${customer.id}</li>
                        <li>Name: ${customer.name}</li>
                        <li>Company: ${customer.company}</li>
                        <li>Company: ${customer.phone}</li>
                    </ul>
                `;
            });

            // Using for loop
            for(let i = 0; i < customers.length; i++){
                output += `
                    <ul>
                        <li>ID: ${customers[i].id}</li>
                        <li>Name: ${customers[i].name}</li>
                        <li>Company: ${customers[i].company}</li>
                        <li>Company: ${customers[i].phone}</li>
                    </ul>
                `;
            }

            document.getElementById('customers').innerHTML = output;
        }
    }

    xhr.send();

}