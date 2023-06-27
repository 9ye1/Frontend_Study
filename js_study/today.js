/*
(글 삭제하기) get 요청으로 글 리스트를 받아와서 html 문서에 표시하고,
 각 글마다 삭제 버튼이 있어서 삭제 버튼을 누르면 해당 글에 대한 delete 
 요청이 되도록 구현해보세요.
async function getPosts(){
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    let data = await response.json();
    console.log(data);
    return data;
    
}

async function deletePost(id){
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
        method: 'DELETE',
    });
    let deletediv = document.getElementById(id);
    deletediv.remove();
    let data = await response.json();
    console.log(data);
}

async function insertPosts() {
    let posts = await getPosts();
    posts.forEach(post => {
        document.body.insertAdjacentHTML('afterBegin', `
			<div id="${post.id}">
				<h1>${post.title}</h1>
				<p>${post.body}</p>
				<button onclick="deletePost(${post.id})">삭제하기</button>
			</div>
		`)
    });
}

insertPosts();




*/

//(글 수정하기) get 요청으로 1번 글을 받아와서 제목과 내용을 각각의 
//input 태그에 넣고, 수정하기 버튼을 누르면 해당 input 태그에 입력한 
//내용대로 1번 글에 대한 put 요청이 되도록 구현해보세요.


async function getPost(id){
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    let data = await response.json();
    return data;
    
}

async function putPost(){
    let post = {
        title: document.getElementById('title').value,
        body: document.getElementById('body').value,
    }

    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/1`,{
        method: 'PUT',
        body: JSON.stringify(post),
        headers: {
            'Content-type': 'application/json',
        },
    });
    let data = await response.json();
    console.log(data);    
}

getPost(1).then(data => {
    let title = document.getElementById('title');
    let body = document.getElementById('body');
    console.log(data);
    title.value = data.title;
    body.value = data.body;
});
