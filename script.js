var webTitle = document.querySelector('.web-title');
var webUrl = document.querySelector('.web-url');
var enterBtn = document.querySelector('.enter-btn');
var titleCardOne = document.querySelector('#Title-card-one');
var urlCardOne = document.querySelector('#Url-card-one');
var linksCardWrapper = document.querySelector('.link-cards-wrapper');
var readBtnOne = document.querySelector('.read-btn-one');
var deleteBtn = document.querySelector('.delete-btn-one');
var errorMessage = document.querySelector('.error');


enterBtn.addEventListener('click', function(event) {
  event.preventDefault()
<<<<<<< HEAD

  grabLinks()
  submitform()
  // returnError()

=======
  returnError()
  // grabLinks()
>>>>>>> 8d2293d9f6bdb8f3ace07df3cb2c8140ed6b3b75
});

linksCardWrapper.addEventListener('click', markAsRead);
webTitle.addEventListener('keyup', btnDisabled);
webUrl.addEventListener('keyup', btnDisabled);

function grabLinks(event) {
  
  var webT = webTitle.value;
  // console.log (webT)
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

  resetInput()
  btnDisabled()
}


function resetInput() { //rename to reset function 
  webTitle.value = '';
  webUrl.value = '';
  errorMessage.innerHTML = ' '
}



function markAsRead (event) {
  // event.target()
  if(event.target.className === 'read-btn-one' && event.target.parentElement.className === 'link-one') {
    event.target.parentElement.classList.add('red')
  } else {event.target.parentElement.classList.remove('red')}

  if(event.target.className === 'delete-btn-one') {
    event.target.parentElement.remove()
  }
}

 function returnError () {
<<<<<<< HEAD
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


 


=======
  var inputLengths = (webUrl.value.length * webTitle.value.length);
  if (inputLengths === 0){
    errorMessage.innerHTML = "Please Enter a Title and URL"
  } else { grabLinks()}
   
  }
  
>>>>>>> 8d2293d9f6bdb8f3ace07df3cb2c8140ed6b3b75


function btnDisabled(event) {
  if (webTitle.value !== '' && webUrl.value !== '') {
    enterBtn.disabled = false;
    console.log('if')
  } else {
    enterBtn.disabled = true;
    console.log('else')
  }
}


