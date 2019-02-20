// The new construct for-await - of allows you to use an async iterable object as the loop iteration:

(async function () {
    for await (const line of readLines(filePath)) {
        console.log(line)
    }
})()

