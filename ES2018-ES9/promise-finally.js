// finally() allow you to run some code regardless of the successful or not successful execution of the promise:

fetch('file.json')
    .then(data => data.json())
    .catch(error => console.error(error))
    .finally(() => console.log('finished'))
