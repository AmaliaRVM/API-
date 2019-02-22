window.onload = () => {
    // XMLHttpRequest
    var inputUser = document.querySelector("input")
    var btn = document.querySelector("button")

    btn.addEventListener("click", function(){
        var request = new XMLHttpRequest();
        var link = "https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search="+inputUser.value;
        request.open("GET", link);
        request.send()
        request.onload = function () {

            console.log(request)
            if (request.status === 200) {
                console.log(request.response)
                var data = JSON.parse(request.response);
                console.log(data);

                var section = document.getElementsByTagName("section")[0]
                
                    for (i=0; i<data[1].length; i++) {

                        var container = document.createElement("div")
                        container.className = "container"

                        var topics = document.createElement("h3")
                        topics.className = "topics"
                        topics.textContent = data[1][i];
                        
                        var info = document.createElement("p")
                        info.className = "info"
                        info.textContent = data[2][i];

                        var link = document.createElement("a")
                        link.className = "link"
                        link.textContent = "wiki links"
                        link.href = data[3][i];


                        section.appendChild(container)
                        container.appendChild(topics)
                        container.appendChild(info)
                        container.appendChild(link)
                        
                    }


            } else {
                console.log("error")
            }


        }
    
        })
    

}