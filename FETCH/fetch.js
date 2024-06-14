
//api fetch
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
        id: 1,
      title: 'fooM',
      body: 'bar',
      userId: 1,
        
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
})
.then((res) =>{
    if(!res.ok){
        const message = `Error : ${res.status}`;
        throw new Error(message);
    }
    return  res.json();
})
.then((res) => console.log(res))
.catch((err) => console.log(err));


//api using async await
const makeRequest = async(url) => {
   const res = await fetch(url);

if(!res.ok){
    const message = `Error: ${res.status}`;
    throw new Error(message)
}

   const data =await res.json();
   return data;

}

const getData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/posts")
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
};

getData();



















