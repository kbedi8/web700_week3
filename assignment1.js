/********************************************************************************
* WEB700 – Assignment 1
*
* I declare that this assignment is my own work in accordance with Seneca's
* Academic Integrity Policy:
*
* https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
*
* Name: Kunwar Bedi Student ID: 106681232 Date: 14 September 2025
*
*********************************************************************************/
// Step 2: Printing "Hello World"
console.log("Hello World!");

// Step 3: Server Arrays
const serverMethods = ["GET", "GET", "GET", "POST", "GET", "POST"];
const serverRoutes = ["/", "/store", "/store-admin", "/register", "/developer", "/login"];
const serverResponses = [
    "Home",
    "Main Storefront",
    "Manage Products",
    "Registered New User",
    "Developed by: Kunwar Bedi, kbedi8@myseneca.ca",
    "User Logged In"
];

// Step 4: Web Server Simulator
function processRequest(method, route) {
    for (let i = 0; i < serverRoutes.length; i++) {
        if (serverMethods[i] === method && serverRoutes[i] === route) {
            return `200: ${serverResponses[i]}`;
        }
    }
    return `404: Unable to process ${method} request for ${route}`;
}

// Step 5: Manual Testing
 console.log(processRequest("GET", "/"));        // 200: Home
 console.log(processRequest("GET", "/developer")); // 200: Developed by: ...
 console.log(processRequest("POST", "/register")); // 200: Registered New User
 console.log(processRequest("POST", "/"));         // 404: Unable to process POST request for /

// Step 6: Utility Function
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Step 6: Test Requests Function
function testRequests() {
    const testMethods = ["GET", "POST"];
    const testRoutes = [
        "/", "/store", "/store-admin", "/register",
        "/developer", "/login", "/notFound1", "/notFound2"
    ];

    function randomRequest() {
        let randMethod = testMethods[getRandomInt(testMethods.length)];
        let randRoute = testRoutes[getRandomInt(testRoutes.length)];
        console.log(processRequest(randMethod, randRoute));
    }

    setInterval(randomRequest, 1000); // runs every 1 second
}

// Step 7: Invoke testRequests
testRequests();