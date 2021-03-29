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

  // fetch the url associated with api/trails
  const response = await fetch(`/results/${id}`);

  console.log(response);
  
  if (response.ok) {
    document.location.replace(`/results/${id}`);
  } else {
    alert(response.statusText);
  }

}