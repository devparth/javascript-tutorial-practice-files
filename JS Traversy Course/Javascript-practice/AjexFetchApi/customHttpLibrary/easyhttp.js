function Http() {
    this.http = new XMLHttpRequest();
}


// Make Get Request
Http.prototype.get = function (url, callback) {
    this.http.open('GET', url, true);

    let that = this;
    this.http.onload = function () {
        if(that.http.status === 200){
            callback(null, that.http.responseText);
        }else{
            callback(`Error: ${that.http.status}`);
        }
    }

    this.http.send();
}
// Make Post Request
Http.prototype.post = function (url, data, callback) {
    this.http.open('POST', url, true);

    // set the content type
    this.http.setRequestHeader('content-type', 'application/json');

    let that = this;
    this.http.onload = function () {
        callback(null, that.http.responseText);
    }

    this.http.send(JSON.stringify(data));
}

// Make Put Request
Http.prototype.put = function (url, data, callback) {
    this.http.open('PUT', url, true);

    this.http.setRequestHeader('content-type', 'application/json');

    let that = this;
    this.http.onload = function () {
        callback(null, that.http.responseText);
    }

    this.http.send(JSON.stringify(data));
}

// Make Delete Request
Http.prototype.delete = function (url, callback) {
    this.http.open('DELETE', url, true);

    let that = this;
    this.http.onload = function () {
        if(that.http.status === 200){
            callback(null, "Post Deleted");
        }else{
            callback(`ERROR: ${that.http.status}`);
        }
    }

    this.http.send();
}