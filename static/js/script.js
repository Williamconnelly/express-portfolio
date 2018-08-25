// Add img src swapping when hovered
var addGifHover = () => {
  const previews = Array.from(document.getElementsByClassName("preview-image"));
  previews.forEach(image => {
    image.addEventListener("mouseover", () => {
      switch(true) {
        case(image.classList.contains("danmaku-img")):
          image.src = "../img/danmaku.gif";
          break;
        case(image.classList.contains("movielist-img")):
          image.src = "../img/movielist.gif"
          break;
        case(image.classList.contains("punchcard-img")):
          image.src = "../img/punchcard.gif"
          break;
        case(image.classList.contains("goodmarket-img")):
          image.src = "../img/goodmarket.gif"
          break;
        default:
          break;
      }
    })
    image.addEventListener("mouseout", () => {
      switch(true) {
        case(image.classList.contains("danmaku-img")):
          image.src = "../img/danmaku.png";
          break;
        case(image.classList.contains("movielist-img")):
          image.src = "../img/movielist.png"
          break;
        case(image.classList.contains("punchcard-img")):
          image.src = "../img/punchcard.png"
          break;
        case(image.classList.contains("goodmarket-img")):
          image.src = "../img/goodmarket.png"
          break;
        default:
          break;
      }
    });
  });
};

document.addEventListener("DOMContentLoaded", e => {
  addGifHover();
});
