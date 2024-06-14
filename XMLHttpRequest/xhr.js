//event -> onload,onerror
//function -> open(), send(), setRequestHeader()


const makeRequest = (method,url,data) => {
 
    const xhr = new XMLHttpRequest();
    xhr.open(method,url);

    xhr.setRequestHeader('Content-Type','application/json')
    xhr.onload = () => {
        let data=xhr.response;
        console.log(JSON.parse(data))
    }
xhr.onerror = () => {
    console.log('error is here');
}

    xhr.send(JSON.stringify(data));

}

//getData
const getData = () => {
    makeRequest('GET','https://jsonplaceholder.typicode.com/posts')
}
//getData();

//sendData
const sendData = () => {
    makeRequest('POST','https://jsonplaceholder.typicode.com/posts',{
        title: 'foo',
    body: 'bar',
    userId: 1,
    });
}
//sendData();

//updateData
const updateData = () => {
    makeRequest('PUT','https://jsonplaceholder.typicode.com/posts/1',{
        id: 1,
    title: 'fooNA',
    body: 'barMa',
    userId: 1,
    });
}
//updateData();

//updateSingleData
const updateSingleData = () => {
    makeRequest('PATCH','https://jsonplaceholder.typicode.com/posts/1',{
        
    title: 'change',
   
    });
}
//updateSingleData();


//deleteData
const deleteData = () => {
    makeRequest('DELETE','https://jsonplaceholder.typicode.com/posts/1');
}
//deleteData();