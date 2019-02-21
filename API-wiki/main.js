window.onload = () => {
    // XMLHttpRequest
    var inputUser = document.querySelector("input")
    var btn = document.querySelector("button")

    btn.addEventListener("click", function(e){
        e.preventDefault();
        var request = new XMLHttpRequest();
        var link = "https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search="+inputUser.value;
        request.open("GET", link);
        request.send()
        request.onload = function () {

            console.log(request)
            if (request.status === 200) {
                console.log(request.response)
                var data = JSON.parse(request.response);
                console.log(data)
            } else {
                console.log("error")
            }

        }
    
        })
    

}