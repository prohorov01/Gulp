const btnSearch = document.getElementById("btn__search");
const btnComments = document.getElementById("btn__comments");
const searchInput = document.getElementById("search__input");
const commentsList = document.getElementById("comments__list");
export function comments () {
const renderComments = (comments) => {
  commentsList.innerHTML = "";
  comments.forEach((comment) => {
    const divListComments = document.createElement("div.list__comments");
    divListComments.innerHTML = `
      <h2 > ${comment.email}</h2>
      <p>${comment.body}</p>
    `;
    commentsList.appendChild(divListComments);
  });
};


const fetchComments = async (idComments) => {
  try {
    const apiUrl = `https://jsonplaceholder.typicode.com/comments/${idComments}`;
    const response = await fetch(apiUrl)
    const comment = await response.json();
    return comment;
  } catch (error) {
    console.error(error);
  }
}

btnComments.addEventListener("click", () => {
  const idComments = searchInput.value;
    fetchComments(idComments)
      .then((comment) => [comment])
      .then((comments) => {
        renderComments(comments);
      })
      .catch((error) => {
        console.log(error);
      });

});
}
comments()