function ajax(src, callback) {
    fetch(src)
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            render(data)
        })
}

function render(data) {
    const container = document.getElementById('container');
    for (let i = 0; i < data.length; i++) {
        const newDiv = document.createElement('DIV');
        newDiv.innerHTML = `${data[i].name}: ${data[i].price} NTD`;
        container.appendChild(newDiv);
    }
}

ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function(response) {
    render(response);
})