window.onload = () => {
    // XMLHttpRequest
    var request = new XMLHttpRequest();
    //new connection, using the GET request on the URL endpoint
    request.open("GET","https://project-622bb.firebaseio.com/BeCode.json", true);
    request.send()
    request.onload = function () {
        //Begin accesing JSON data here
        console.log(request)
        if (request.status == 200 ) {
            console.log(request)
            var data = JSON.parse(request.response);

            console.log(data)
        }else {
            console.log('error')
        }   
    }
}