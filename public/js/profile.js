const updateComments = document.querySelector('#delete-form');
// const editBtn = document.querySelector('#edit-comment');
const deleteBtn = document.querySelector('#delete-comment');
const checkBoxDelete = document.querySelector('input');

// function to handle deleting comments by a user
async function deleteBtnHandler () {

    const commentID = checkBoxDelete.value;
    console.log(commentID);

    const response = await fetch(`/api/comment/${commentID}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        alert('success')
        document.location.replace('/profile');
    } else {
        alert('Failed to delete post.');
    }    
}

updateComments.addEventListener('submit', event => {
    event.preventDefault();

    deleteBtnHandler();
}); 

// async function deleteComment (id) {

//     const response = await fetch(`/api/comment/${id}`, {
//         method: 'DELETE',
//     });

//     console.log(response)

//     if (response.ok) {
//         alert('success')
//         // document.location.replace('/profile');
//     } else {
//         alert('Failed to delete post.');
//     }    
// }