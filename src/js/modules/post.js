const btnSearch = document.getElementById("btn__search");
const searchInput = document.getElementById("search__input");
const postList = document.getElementById("post__list");
const btnComments = document.getElementById("btn__comments");
const commentsList = document.getElementById("comments__list");
export function post () {
const renderPosts = (posts) => {
  postList.innerHTML = "";
  posts.forEach((post) => {
    const divList = document.createElement("div.list");
    divList.innerHTML = `
      <h2 class="post__title">${post.title}</h2>
      <p>${post.body}</p>
    `;
    btnComments.style.display = 'block'
    postList.appendChild(divList);
  });
};

const fetchPost = async (idPost) => {
  try {
    const apiUrl = `https://jsonplaceholder.typicode.com/posts/${idPost}`;
    const response = await fetch(apiUrl)
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error(error);
  }
}

btnSearch.addEventListener("click", () => {
  const idPost = searchInput.value;
  if (idPost >= 1 && idPost <= 100) {
    fetchPost(idPost)
      .then((posts) => {
        renderPosts([posts]);
      })
      .catch((error) => {
        console.log(error);
      });
  }else {
    alert(`Please enter post ID (from 1 to 100)!`);
  }
  commentsList.innerHTML = ''
});
}
post()
