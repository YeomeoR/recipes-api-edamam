// grab and store the search button
const searchButton = document.querySelector('#search');
// grab the input from the form
const input = document.querySelector('input');

// add an event listener to the button that runs the function sendApiRequest when it is clickedIndex
searchButton.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('button clicked');
    // call the function requesting the api search
  sendApiRequest();
});

// an asynchronous function to fetch data from the api endpoint. info 'props' passed through from the event listener
async function sendApiRequest() {
    const response = await fetch(
    // input.value is the value entered in the input field of the form
    `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=${input.value}`,
  );
  console.log(response);
  let data = await response.json();
  console.log(data);
  useApiData(data);
  useApiData1(data);
  useApiData2(data);
  useApiData3(data);
  useApiData4(data);
  useApiData5(data);
  useApiData6(data);
  useApiData7(data);
  useApiData8(data);
}

// function that does something with the data received from the api. The name of the function should be customised to whatever you are doing with the data returned
function useApiData(data) {
  document.getElementById(
    'content',
  ).innerHTML = `<div class="card row " style="width: 18rem;">
<img src="${data.hits[0].recipe.image}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${data.hits[0].recipe.label}</h5>
  <p class="card-text">Source: ${data.hits[0].recipe.source}</p>
  <a href="${data.hits[0].recipe.url}" target="_blank" class="btn btn-primary">View the Recipe</a>
</div>
</div>`;
}
function useApiData1(data) {
  document.getElementById(
    'content1',
  ).innerHTML = `<div class="card row " style="width: 18rem;">
<img src="${data.hits[1].recipe.image}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${data.hits[1].recipe.label}</h5>
  <p class="card-text">Source: ${data.hits[1].recipe.source}</p>
  <a href="${data.hits[1].recipe.url}" target="_blank" class="btn btn-primary">View the Recipe</a>
</div>
</div>`;
}
function useApiData2(data) {
  document.getElementById(
    'content2',
  ).innerHTML = `<div class="card row " style="width: 18rem;">
<img src="${data.hits[2].recipe.image}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${data.hits[2].recipe.label}</h5>
  <p class="card-text">Source: ${data.hits[2].recipe.source}</p>
  <a href="${data.hits[2].recipe.url}" target="_blank" class="btn btn-primary">View the Recipe</a>
</div>
</div>`;
}
function useApiData3(data) {
  document.getElementById(
    'content3',
  ).innerHTML = `<div class="card row " style="width: 18rem;">
<img src="${data.hits[3].recipe.image}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${data.hits[3].recipe.label}</h5>
  <p class="card-text">Source: ${data.hits[3].recipe.source}</p>
  <a href="${data.hits[3].recipe.url}" target="_blank" class="btn btn-primary">View the Recipe</a>
</div>
</div>`;
}
function useApiData4(data) {
  document.getElementById(
    'content4',
  ).innerHTML = `<div class="card row " style="width: 18rem;">
<img src="${data.hits[4].recipe.image}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${data.hits[4].recipe.label}</h5>
  <p class="card-text">Source: ${data.hits[4].recipe.source}</p>
  <a href="${data.hits[4].recipe.url}" target="_blank" class="btn btn-primary">View the Recipe</a>
</div>
</div>`;
}
function useApiData5(data) {
  document.getElementById(
    'content5',
  ).innerHTML = `<div class="card row " style="width: 18rem;">
<img src="${data.hits[5].recipe.image}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${data.hits[5].recipe.label}</h5>
  <p class="card-text">Source: ${data.hits[5].recipe.source}</p>
  <a href="${data.hits[5].recipe.url}" target="_blank" class="btn btn-primary">View the Recipe</a>
</div>
</div>`;
}
function useApiData6(data) {
  document.getElementById(
    'content6',
  ).innerHTML = `<div class="card row " style="width: 18rem;">
<img src="${data.hits[6].recipe.image}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${data.hits[6].recipe.label}</h5>
  <p class="card-text">Source: ${data.hits[6].recipe.source}</p>
  <a href="${data.hits[6].recipe.url}" target="_blank" class="btn btn-primary">View the Recipe</a>
</div>
</div>`;
}
function useApiData7(data) {
  document.getElementById(
    'content7',
  ).innerHTML = `<div class="card row " style="width: 18rem;">
<img src="${data.hits[7].recipe.image}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${data.hits[7].recipe.label}</h5>
  <p class="card-text">Source: ${data.hits[7].recipe.source}</p>
  <a href="${data.hits[7].recipe.url}" target="_blank" class="btn btn-primary">View the Recipe</a>
</div>
</div>`;
}
function useApiData8(data) {
  document.getElementById(
    'content8',
  ).innerHTML = `<div class="card row " style="width: 18rem;">
<img src="${data.hits[8].recipe.image}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${data.hits[8].recipe.label}</h5>
  <p class="card-text">Source: ${data.hits[8].recipe.source}</p>
  <a href="${data.hits[8].recipe.url}" target="_blank" class="btn btn-primary">View the Recipe</a>
</div>
</div>`;
}
// should have just used .map() but will come back to it later.