// asynchrnouse waay
// class EasyHTTP{
//     // make a HTTP get request
//     get(url){
//         fetch(url)
//             .then(res => res.json())
//             .then (data => console.log(data))
//             .catch(err => console.log(err));
//     }
// }


// synchrnouse waay
class EasyHTTP{
    // make a HTTP GET request
    get(url){
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(res => res.json())
            .then (data => resolve(data))
            .catch(err => reject(err));
        });
    }

    // make a HTTP POST reuqest 
    post(url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST', 
                headers:{
                    'Content-type': 'application/json'
                }, 
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then (data => resolve(data))
            .catch(err => reject(err));
        });
    }

    // make a HTTP PUT(update) reuqest 
    put(url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT', 
                headers:{
                    'Content-type': 'application/json'
                }, 
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then (data => resolve(data))
            .catch(err => reject(err));
        });
    }

    // Make DELETE reuqest
    // make a HTTP PUT(update) reuqest 
    delete(url){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELETE', 
                headers:{
                    'Content-type': 'application/json'
                }
            })
            .then(res => res.json())
            .then (() => resolve('Resourse Deleted...'))
            .catch(err => reject(err));
        });
    }
}