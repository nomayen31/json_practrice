function Loadpost() {
    fetch ('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displaypost(data));
}


function displaypost(posts) {
    const PostContainer =document.getElementById('posts-container');

    for (const post of posts) {
        const postDiv =document.createElement('div');

        postDiv.classList.add('post')
        console.log(post);
        postDiv.innerHTML = `
        <h4>User-${post.userId}</h4>
        <h5>Post: ${post.title}</h5>
        <p>Post Description: ${post.body}</p>
        `;

        PostContainer.appendChild(postDiv);
    }
}
Loadpost()


