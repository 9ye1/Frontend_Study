/*
//fetch 예제
let promise = fetch(url, {
    method: "GET",
    headers: {
        Authorization: 인증 토큰 등 
    },
    body: 리퀘스트 데이터 
});
*/

/*
//fetch연습 - get
async function getPosts(id) {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    let data = await response.json();
    console.log(data);
}

getPosts(1);
*/

/*
//fetch연습 - post
let post = {
    title: '새로운 글',
    body: '내용'
}
async function addPost(post) {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts`,{
        method : 'POST',
        body : JSON.stringify(post),
        headers: {
            'Content-type': 'application/json', // json 이라고 명시
          }
    });
    let data = await response.json();
    console.log(data);
}

addPost(post);
*/

/*
//fetch연습 - put
let post = {
    title: '글 수정하기',
    body: '수정된 내용'
}
async function updatePost(id, post) {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
        method : 'PUT',
        body : JSON.stringify(post),
        headers: {
            'Content-type': 'application/json', // json 이라고 명시
          }
    });
    let data = await response.json();
    console.log(data);
}

updatePost(1, post);
*/

//fetch연습 - delete
async function deletePost(id) {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
        method : 'DELETE'
    });
    let data = await response.json();
    console.log(data);
}
deletePost(1);