const searchForm = document.querySelector('.search-form');

searchForm.addEventListener("submit", function () {

});


// ******** You guys can use this example code below for reference if you need help with eventListener handling. This is what I have from my current HW assignment and it works for posting a comment.

// const createForm = document.querySelector('.create-form');
// const postTitle = document.querySelector('input#create-title');
// const postContent = document.querySelector('input#create-content');

// // event handler to redirect to 
// createForm.addEventListener('click', event => {
//     event.preventDefault();

//     const postData = {
//         title: postTitle.value.trim(),
//         content: postContent.value.trim()
//     };

//     if (postData.title && postData.content) {
//         createPostHandler(postData.title, postData.content);
//     } else {
//         alert("Post unsuccessful. Ensure all necessary fields are filled in and try again.");
//         return;
//     }
// });

// async function createPostHandler(title, content) {

//     await fetch('/api/blog/', {
//         method: 'POST',
//         body: JSON.stringify({title, content}),
//         headers: { 'Content-Type': 'application/json' },
//     }).then((response) => {

//         console.log(response);
        
//         document.location.replace('/dashboard');

//     }).catch((err) => {
//         if (err) throw err;
//     });
// };