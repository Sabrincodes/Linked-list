var webTitle = document.querySelector('.web-title');
var webUrl = document.querySelector('.web-url');
var enterBtn = document.querySelector('.enter-btn');
var titleCardOne = document.querySelector('#Title-card-one');
var urlCardOne = document.querySelector('#Url-card-one');
var linksCardWrapper = document.querySelector('.link-cards-wrapper');
var readBtnOne = document.querySelector('.read-btn-one');
var deleteBtn = document.querySelector('.delete-btn-one');



enterBtn.addEventListener('click', function(event) {
  event.preventDefault()

  grabLinks()
  submitform()
  // returnError()

});
linksCardWrapper.addEventListener('click', markAsRead);
// deleteBtn.addEventListener('click', deleteLinkButton)


function grabLinks(event) {
  
  var webT = webTitle.value;
  console.log (webT)
  var webU = webUrl.value;
  var bookMarkCard = ` 
    <section class="link-one">
      <h2 id="Title-card-one">${ webT }</h2>
      <h3 id="Url-card-one" >${ webU }</h3>
      <button class="read-btn-one">Read</button>
      <button class="delete-btn-one">Delete</button>
    </section>
  `;

  linksCardWrapper.innerHTML += bookMarkCard

  deleteLinks()
}


function deleteLinks() { //rename to reset function 
  webTitle.value = '';
  webUrl.value = '';
}



function markAsRead (event) {
  // event.target()
  if(event.target.className === 'read-btn-one' && event.target.parentElement.className === 'link-one') {
  

  } else { event.target.parentElement.classList.remove('red')

   if(event.target.className === 'delete-btn-one') {
    event.target.parentElement.remove()
  }
}
}


 function returnError () {
   if (webTitle.value.length == '') {
 document.querySelector('.error').innerText = 'Ground control, we have an emergency';

  //  if (webUrl.value.length < 0) {
  // document.querySelector('.error').innerText = 'Ground control, we have an emergency';
  //  }
  }
 }

 function submitform() {
  var f = document.getElementsByTagName('form')[0];
  if(f.checkValidity()) {
    f.submit();
  } else {
    alert(document.getQuerySelector('example').validationMessage);
  }
}



 //    return error
 // }

// If the user omits the title or the URL, the application should not 
// create the link and should instead display an error.




// function deleteLinkButton(event) {
//  if (event.target.classList.contains("delete-button")) {
//    event.target.parentNode.remove();
//  }
// }


//   if(event.target.parentElement.className === 'delete-btn-one' && event.target.parentElement.className === 'delete-btn-one') {
//     console.log(event)

//    var linkDad = document.querySelector('link-one')
// // }
//   var takeAway = linkDad.removeChild()


 






