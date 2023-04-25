var clientURL = location.origin + location.pathname.split('/').slice(0, location.pathname.split('/').length - 1).join('/')

window.onload = function(){
    fetch('http://localhost:3000/books')
    .then(response => response.json())
    .then(data => {
        const table = document.getElementById('tableList');
        if(table){
            data.forEach(element => {
                const tr = document.createElement('tr');
                const tdId = document.createElement('td');
                const tdTitle = document.createElement('td');
                const tdDescription = document.createElement('td');
                const tdPrice = document.createElement('td');
                const actions = document.createElement('td');

                const updateButton = document.createElement('a');
                updateButton.innerText = 'Update';
                updateButton.href = `${clientURL}/editBook.html?id=${element.id}`;
                const deleteButton = document.createElement('a');
                deleteButton.innerText = 'Delete';
                deleteButton.href = "#";
                deleteButton.style = "padding: 0 0 0 10px";
                deleteButton.addEventListener('click', () => {
                    fetch(`http://localhost:3000/books/${element.id}`, { method: 'DELETE' })
                    .then(() => location.reload());
                });

                actions.appendChild(updateButton);
                actions.appendChild(deleteButton);

                tdId.innerText = element.id;
                tdTitle.innerText = element.title;
                tdDescription.innerText = element.description;
                tdPrice.innerText = element.price;

                tr.appendChild(tdId);
                tr.appendChild(tdTitle);
                tr.appendChild(tdDescription);
                tr.appendChild(tdPrice);
                tr.appendChild(actions);

                table.appendChild(tr);
            });
        }
    });

    const params = new URLSearchParams(window.location.search);
    if (params.get('id')) {
        fetch(`http://localhost:3000/books/${params.get('id')}`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
            document.getElementById('error').innerText = data.error;
            } else {
            Object.keys(data).forEach((key) => {
                document.getElementById(key).value = data[key];
            });
            }
        });
    }

    const submit = document.getElementById("bookSubmit");
    const form = document.getElementById("addBookForm");
    if(form){
        form.addEventListener("submit", function (e) {
            e.preventDefault();
    
            const body = {};

            body.id = document.getElementById("id").value;
            body.title = document.getElementById("title").value;
            body.description = document.getElementById("description").value;
            body.price = document.getElementById("price").value;

            const url = body.id ? `http://localhost:3000/books/${body.id}` : 'http://localhost:3000/books';
            const method =  body.id ? 'PUT' : 'POST';

            fetch(url, {
                method,
                body: JSON.stringify(body),
                headers: {'Content-Type': 'application/json'},
            })
            .then(response => response.json())
            .then(data => {
                console.log("data", data);
            })
        })
    }
}