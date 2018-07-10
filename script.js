var webTitle = document.querySelector('.web-title');
var webUrl = document.querySelector('.web-url');
var enterBtn = document.querySelector('.enter-btn');
var titleCardOne = document.querySelector('#Title-card-one');
var urlCardOne = document.querySelector('#Url-card-one');
var listCardsWrapper = document.querySelector('.link-cards-wrapper');
var readBtnOne = document.querySelector('.read-btn-one');



enterBtn.addEventListener('click', grabLinks);
listCardsWrapper.addEventListener('click', markAsRead);


function grabLinks(event) {
  event.preventDefault();
  var webT = webTitle.value;
  var webU = webUrl.value;
  var bookMarkCard = ` 
    <section class="link-one">
      <h2 id="Title-card-one">${ webT }</h2>
      <h3 id="Url-card-one" >${ webU }</h3>
      <button class="read-btn-one">Read</button>
      <button class="delete-btn-one">Delete</button>
    </section>
  `;

  listCardsWrapper.innerHTML += bookMarkCard

  deleteLinks()
}


function deleteLinks() {
  webTitle.value = '';
  webUrl.value = '';
}



function markAsRead (event) {
  // event.target()

  if(event.target.className === 'read-btn-one') {
    event.target.parentElement.classList.add('red')
  } else {event.target.parentElement.classList.remove('red')}
  console.log(event.target.parentElement.classList.remove)
  }

  

