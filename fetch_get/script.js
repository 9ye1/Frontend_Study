/*
//get 활용하기
async function getPost(id) {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    let data = await response.json(); // 여기도 꼭 await 를 해주어야 함
    return data;
}

getPost(1).then(data => {
    let title = document.getElementById('title');
    let body = document.getElementById('body');
    console.log(data);
    title.innerText = data.title;
    body.innerText = data.body;
}).catch(error => {
    console.log(error); // 발생한 에러 처리
});
*/

//위의 코드 함수화하기 
async function getPost(id) {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (response.ok) {
      let data = await response.json(); // 여기도 꼭 await 를 해주어야 함
      return data;
    }
    return new Error(response.status + '에러 발생'); // 
  }
  
async function insertPost(id) {
    try {
      let data = await getPost(id);
      let title = document.getElementById('title');
      let body = document.getElementById('body');
      title.innerText = data.title;
      body.innerText = data.body;
    } catch(err) {
      console.log(err); // try 절 (await 절 포함) 에서 발생한 에러 처리
    }
}

insertPost(2);