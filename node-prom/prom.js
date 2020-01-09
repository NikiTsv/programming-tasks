var request = require("request");
var userDetails;

function initialize() {
    // Setting URL and headers for request
    var options = {
        url: 'https://api.github.com/ushers/narenaryan',
        headers: {
            'User-Agent': 'request'
        }
    };
    // Return new promise
    return new Promise(function(resolve, reject) {
    	// Do async job
        request.get(options, function(err, resp, body) {
            const res = JSON.parse(body);
            if (err) {
                reject(err);
            }
            else if(res.message == 'Not Found'){
                    reject(res.message);
                }
            else {
                resolve(JSON.parse(body));
            }
        })
    })

}

function main() {
    var initializePromise = initialize();
    initializePromise.then(function(result) {
        userDetails = result;
        console.log("Initialized user details");
        // Use user details from here
        // console.log(userDetails)
    })
    .catch((err)=>{
        console.log('catch err', err);
    });
}

main();