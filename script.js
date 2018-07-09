var webTitle = document.querySelector('.web-title');
var webUrl = document.querySelector('.web-url');
var enterBtn = document.querySelector('.enter-btn');
var titleCardOne = document.querySelector('#Title-card-one');
var urlCardOne = document.querySelector('#Url-card-one');
var bookMarkSide = document.querySelector('.link-cards-wrapper');


enterBtn.addEventListener('click', grabLinks);

function grabLinks(event) {
  event.preventDefault();
  var webT = webTitle.value;
  console.log('yippe');
  var webU = webUrl.value;
  var bookMarkCard = ` <section class="link-one">
          <h2 id="Title-card-one">${webT}</h2>
          <h3 id="Url-card-one" >${webU}</h3>
          <button class="read-btn-one">Read</button>
          <button class="delete-btn-one">Delete</button>
        </section>`;

bookMarkSide.innerHTML += bookMarkCard
  // titleCardOne.innerHTML = webTitle.value
  // urlCardOne.innerHTML = webUrl.value 

}
