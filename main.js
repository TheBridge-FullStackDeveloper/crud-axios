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

async function getPosts() {
  // axios
  //   .get("https://jsonplaceholder.typicode.com/posts")
  //   .then((res) => {
  //     res.data.forEach((post) => {
  //       postsDiv.innerHTML += `TITLE :  ${post.title} <br>
  //        <button onclick="editPost(${post.id})">Put</button>
  //        <button onclick="deletePost(${post.id})">Delete</button>
  //       `;
  //     });
  //   })
  //   .catch((err) => console.error(err));
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    res.data.forEach((post) => {
      postsDiv.innerHTML += `TITLE :  ${post.title} <br>    
           <button onclick="editPost(${post.id})">Put</button>
           <button onclick="deletePost(${post.id})">Delete</button>
          `;
    });
  } catch (error) {
    console.error(error);
  }
}
// axios.get("")
// axios.post("urlApi",{})

async function addPost() {
  // axios
  //   .post("https://jsonplaceholder.typicode.com/posts", {
  //     body: body.value,
  //     title: "Me estas mareando mucho",
  //   })
  //   .then((res) => console.log(res))
  //   .catch((err) => console.error(err));
  try {
    await axios.post("https://jsonplaceholder.typicode.com/posts", {
      body: body.value,
      title: "Me estas mareando mucho",
    });
  } catch (error) {
    console.error(error);
  }
}

async function editPost(id) {
  // axios
  //   .put("https://jsonplaceholder.typicode.com/posts/" + id, {
  //     title: "Post updated",
  //     body: body.value,
  //   })
  //   .then((res) => console.log(res))
  //   .catch((err) => console.error(err));
  try {
    await axios.put("https://jsonplaceholder.typicode.com/posts/" + id, {
      title: "Post updated",
      body: body.value,
    });
  } catch (error) {
    console.error(error);
  }
}

async function deletePost(id) {
  try {
    const res = await axios.delete("https://jsonplaceholder.typicode.com/posts/" + id);
    console.log(res)
  } catch (error) {
    console.error(error);
  }
}

getBtn.addEventListener("click", getPosts);
postBtn.addEventListener("click", addPost);
// putBtn.addEventListener("click",editPost)
