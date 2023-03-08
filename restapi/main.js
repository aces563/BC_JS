



fetch('https://jsonplaceholder.typicode.com/users/')
.then(response => response.json())
.then(json => showList(json))

const showList = (data) => {
        let usersList = document.querySelector('.users-list');
        usersList.innerHTML = data.map(data => { return `<li>${data.name}</li>`})
    }




