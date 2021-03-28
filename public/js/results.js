// global variables from elements in homepage.handlebars
const trailForm = document.querySelector('.result-form');
const trail = document.querySelector('option');
// empty variable to store trailId for url query
let trailID;

// Button handler for homepage datalist 
trailForm.addEventListener('submit', event => {
  event.preventDefault();
  
  // set the trail ID equal to trail.id
  trailID = trail.id;
  // Call the findTrailHandler function
  findTrailHandler(trailID);
  
});
  
// Async function to recieve trail information
async function findTrailHandler(id) {

  await fetch(`api/trails/${id}`)
  
  .then((response) => {
    console.log(response);
    // document.location.replace('/results'); //Redirect to result page
  })

  .catch((err) => {
    console.log(err);
  });
}