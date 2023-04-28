function articData() {
  let headline = document.querySelector("#headline");

  let headlineArticles = JSON.parse(localStorage.getItem("articles"));

  let head = headlineArticles.slice(0, 1).map((articles, index) => {
    let title = articles.articletitle;
    let subtitle = articles.articleSubtitle;
    let description = articles.articleStory;

    return `
            <h6>Latest article</h6>
            <h1 class="fw-bold vio-green">
                ${title}
            </h1>
            <h6 class='fw-semibold vio-green'>${subtitle}</h6>
            <p class="vio-green my-3" style="font-size: 16px">
            ${description}
            </p>
            <hr>
          `;
  });

  headline.innerHTML = head.join("");
}

articData();

function articleOld() {
  let oldArticle = document.querySelector("#old_article");

  let headlineArticles = JSON.parse(localStorage.getItem("articles"));

  let head = headlineArticles.slice(1).map((articles, index) => {
    let title = articles.articletitle;
    let subtitle = articles.articleSubtitle;
    let description = articles.articleStory;

    return `
            <h5 class="fw-bold vio-green mt-4">
                ${title}
            </h5>
            <h6 class='fw-semibold vio-green'>${subtitle}</h6>
            <p class="vio-green my-3" style="font-size: 16px">
                ${description}
            </p>
    `;
  });

  oldArticle.innerHTML = head.join("");
}

articleOld();
