
//API Axios




//getData
axios.get("https://jsonplaceholder.typicode.com/posts")
.then((res) => console.log(res.data))
.catch((err) => console.log(err));

//createData
axios.post("https://jsonplaceholder.typicode.com/posts", {
    method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
.then((res) => console.log(res.data))
.catch((err) => console.log(err));




//axios using async await
const makeRequest = async (config) => {
    return  await axios(config);
}

//getData
const getData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/posts")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
getData();


//update 
const updateData = () => {
    makeRequest({
        url : "https://jsonplaceholder.typicode.com/posts/1" ,
        method: 'PUT',
  data: JSON.stringify({
    id:1,
    title: 'fooma',
    body: 'bar',
    userId: 1,
}),

    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
}
updateData();