// global variables from elements in comment.handlebars
const commentForm = document.querySelector('.create-comment');
const title = document.querySelector('#create-title');
const comment = document.querySelector('#create-comment');
const rating = document.querySelector('input.form-check-input');
const trailID = document.querySelector('#trail-id');

// Button handler for submitting a comment 
commentForm.addEventListener('submit', event => {

    event.preventDefault();

    const commentData = {
        title: title.value,
        comment: comment.value,
        rating: rating.value,
        search_id: trailID.value     
    }

    if (commentData.title && commentData.comment && commentData.rating && commentData.search_id) {

        submitCommentHandler(commentData.title, commentData.comment, commentData.rating, commentData.search_id);

    } else {
        alert("You must enter a rating, title, and comment to submit this form.");
    }
});

// Async function to post comment
async function submitCommentHandler(title, comment, rating, search_id) {

    const response = await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({ title, comment, rating, search_id }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        alert('Comment submitted successfully.')
        document.location.replace('/profile');
    } else {
        alert(response.statusText);
    }
}