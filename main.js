document.querySelector('#submit').addEventListener('click', function() {

    const firstName = document.querySelector('#first').value
    console.log(firstName, 'firstname')
    
    
        try {
            fetch(`http://localhost:8000/api/${firstName}`)

                .then( res => res.json())
                .then( data => console.log('data', data))
        }
        catch {
            console.log('big time error')
        }
    
    

})