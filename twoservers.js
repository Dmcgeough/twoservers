var http = require("http");
var PORT = 7000;
function handleRequest(request, response) {
    response.end("You have kind eyes" + request.url);
}
var server = http.createServer(handleRequest);
server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);

});
var PORT2 = 7500;
function handleRequest2(request, response) {
    response.end("You need to get swoll" + request.url);
}
var server2 = http.createServer(handleRequest2);
server2.listen(PORT2, function(){
    console.log("Server listening on: http://localhost:%s", PORT2);
});