console.log('me irl');

var likeCount = parseInt(document.querySelector('.like-count').textContent);
var likeLink = document.querySelector('.like-link');

likeLink.addEventListener('click', increaseLikes);

function increaseLikes(event){
  event.preventDefault();
  likeCount++;
  document.querySelector('.like-count').textContent = likeCount;
}

var submitButton = document.querySelector('button');

submitButton.addEventListener('click', addNewComment);

function addNewComment(event){
  event.preventDefault();

  var newComment = document.querySelector('#new-comment-body').value;

  var newCommentDiv = document.createElement('div');

  newCommentDiv.classList.add('comment');

  newCommentDiv.textContent = newComment;

  var parentCommentDiv = document.querySelector('#comments');

  parentCommentDiv.appendChild(newCommentDiv);

  document.querySelector('#new-comment').reset();
}
