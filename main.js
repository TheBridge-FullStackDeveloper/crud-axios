const getBtn = document.getElementById("getBtn");
const postBtn = document.getElementById("postBtn");
const putBtn = document.getElementById("putBtn");

const body = document.getElementById("body");
const postsDiv = document.querySelector(".posts");

let posts = [];

axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((res) => {
    posts = res.data;
  })
  .catch((err) => console.error(err));

function getPosts() {
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      res.data.forEach((post) => {
        postsDiv.innerHTML += `TITLE :  ${post.title} <br>    
         <button onclick="editPost(${post.id})">Put</button>
         <button onclick="deletePost(${post.id})">Delete</button>
        `;
      });
    })
    .catch((err) => console.error(err));
}
// axios.get("")
// axios.post("urlApi",{})

function addPost() {
  axios
    .post("https://jsonplaceholder.typicode.com/posts", {
      body: body.value,
      title: "Me estas mareando mucho",
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
}

function editPost(id) {
  axios
    .put("https://jsonplaceholder.typicode.com/posts/" + id, {
      title: "Post updated",
      body: body.value,
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
}

function deletePost(id) {
  axios
    .delete("https://jsonplaceholder.typicode.com/posts/" + id)
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
}

getBtn.addEventListener("click", getPosts);
postBtn.addEventListener("click", addPost);
// putBtn.addEventListener("click",editPost)
