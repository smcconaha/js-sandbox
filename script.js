async function populate() {
  //will use the Fetch API to retrieve JSON from the server
  const requestURL = 'https://rickandmortyapi.com/api/character';
  //initiating a new request object
  const request = new Request(requestURL);

  //fetch method makes network request and returns Response object
  const response = await fetch(request);
  //response retrieved as JSON using json() fn of the Response object
  const characters = await response.json();

  populateHeader(characters);
  populateCharacters(characters);
  // console.log(characters)

}

function populateHeader(obj) {
  const header = document.querySelector('header');
  const myH1 = document.createElement('h1');
  myH1.textContent = 'Rick and Morty Characters';
  header.appendChild(myH1);
}

function populateCharacters(obj) {
  const section = document.querySelector('section');
  const characters = obj.results;
  // console.log(characters)

  for (const char of characters) {
    const myArticle = document.createElement('article');
    const myH2 = document.createElement('h2');
    const myPara1 = document.createElement('p');
    const myPara2 = document.createElement('p');
    const myPara3 = document.createElement('p');
    const myPara4 = document.createElement('p');
    const myPara5 = document.createElement('p');
    const myList = document.createElement('ul');

    myH2.textContent = char.name;
    myPara1.textContent = `Name: ${char.name}`;
    myPara2.textContent = `Status: ${char.status}`;
    myPara3.textContent = `Species: ${char.species}`;
    myPara4.textContent = `Location: ${char.location.name}`;
    // myPara5.textContent = 'Episodes:';

    // const characterEpisodes = char.episode;
    // for (const item of episodes) {
    //   const listItem = document.createElement('li');
    //   listItem.textContent = item;
    //   myList.appendChild(listItem);
    // }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myPara4);    
    myArticle.appendChild(myPara5);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}

populate();