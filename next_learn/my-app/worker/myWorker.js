onmessage = (event) => {
    postMessage('Hello, ' + event.data);

    for (let i = 0; i < 10000; i++) {
        if (i % 20) {
            console.warn(i);
        }
    }    
}
