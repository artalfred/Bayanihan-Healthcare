let articleForm = document.querySelector("#articleForm");

let articlesData = JSON.parse(localStorage.getItem("articles"));

let article = articlesData ? articlesData : [];

articleForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let articleTitle = document.querySelector("#article-title").value;
  let articleSubtitle = document.querySelector("#article-subtitle").value;
  let articleStory = document.querySelector("#article-story").value;

  article.unshift({
    articletitle: articleTitle,
    articleSubtitle: articleSubtitle,
    articleStory: articleStory,
  });

  localStorage.setItem("articles", JSON.stringify(article));

  window.location.href = "./donePublish.html";
});
