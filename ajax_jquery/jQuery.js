//ajax-> Assynchronous Javascript and xml

const makeRequest =async (url,method,data) =>{
      
  try{
    const result = await $.ajax({
        url : url,
        method : method,
        data : data,
    });
   return result;
  }catch(err){
    console.log(err);
  }
};

//get
const getData = ()=>{
    makeRequest("https://jsonplaceholder.typicode.com/posts/1", "GET")
    .then((res) => console.log(res))
}

getData();

//post
const createData = ()=>{
    makeRequest("https://jsonplaceholder.typicode.com/posts/", "POST", {
        title: 'foo',
        body: 'bar',
        userId: 1,

    })
    .then((res) => console.log(res))
}

createData();

