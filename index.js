// Add your code here


function submitData(name, email) {
    let newUser = {
        name: name, 
        email: email
    }
    let reqObj = {
        headers: {"Content-Type": 'application/json', "Accept": "application/json"}, 
        method: "POST", 
        body: JSON.stringify(newUser)
    }
    fetch('http://localhost:3000/users', reqObj)
        .then(r => r.json())
        .then(json => addId(json.id))
}

function addId(id) {
    document.getElementsByTagName("body").innerText = id
}
submitData("bill", "b@b.com")