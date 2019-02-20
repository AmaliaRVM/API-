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
            console.log(typeof request.response)
            var data = JSON.parse(request.response);

            var container = document.createElement('div')
            container.setAttribute('class', 'container')

            document.body.appendChild(container)

            for (i=0; i<data.length; i++) {
                var promo = document.createElement('div')
                promo.setAttribute('class', 'promo')//setAttribute, asign a class

                var firstName = document.createElement('h3')
                firstName.setAttribute('class','firstName')
                firstName.textContent = data[i].profile.firstname

                var lastName = document.createElement('h3')
                lastName.className = 'lastName'//another way to asign a class
                lastName.textContent = data[i].profile.lastname

                var history = document.createElement('p')
                history.className = 'history'
                history.textContent = data[i].history

                var image = document.createElement('img')
                image.className = 'image'
                image.src = data[i].image

                var link = document.createElement('a')
                link.textContent = 'Go Deeper'
                link.className = 'link'
                link.href = data[i].wiki

                container.appendChild(promo)
                promo.appendChild(firstName)
                promo.appendChild(lastName)
                promo.appendChild(history)
                promo.appendChild(image)
                promo.appendChild(link)

            }


            

        }else {
            console.log('error')
        }   
    }
}