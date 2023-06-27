async function addPost(post) { 
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts`,{
        method : 'POST',
        body: JSON.stringify(post),
        headers: {
            'Content-type': 'application/json',
        },
    });
    if(response.ok){
        let data = await response.json();
        return data;
    }else{
        return new Error(response.status + '에러발생');
    }
    
};

async function submitPost() {
    try {
        let post = {
            title : document.getElementById('title').value,
            body : document.getElementById('body').value,
        }
        let result = await addPost(post);
        console.log(result);
    } catch (error) {
        console.log(err);
    }
}