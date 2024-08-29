document.querySelector('.search-box').addEventListener('input', function() {
    let searchTerm = this.value;

    // データをGoogle Apps Scriptに送信
    fetch('https://script.google.com/u/0/home/projects/1TyZmWK2Pr7lbQsq-Bd4ABp6Xa5WePM-4ARUbRKLkxpc_4xrU3fpSpnRe/edit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ searchTerm: searchTerm }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
