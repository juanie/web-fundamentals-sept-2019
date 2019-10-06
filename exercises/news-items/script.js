var ul = document.getElementsByTagName('ul')[0];
var data = [];

getData();

async function getData(){
  var url ='https://newsapi.org/v2/everything?q=bitcoin&from=2019-09-06&sortBy=publishedAt&apiKey=981074e132db4680991359b7db4944b5';
  var request = new Request(url);
  var response = await fetch(request);
  var responseBody = await response.json();
  data = responseBody.articles;
  addItemsToPage()
  console.log(data);
}

//https://newsapi.org/v2/everything?q=bitcoin&from=2019-09-06&sortBy=publishedAt&apiKey=981074e132db4680991359b7db4944b5




function addItemsToPage(){
  for (var i = 0; i < data.length; i++) {
    var item = data[i];

    // Create list item
    var li = document.createElement('li');

    addThisToTheList('h4', item.publishedAt, li);
    addThisToTheList('h6', item.author, li);
    addThisToTheList('p', item.title, li);
    addThisToTheList('img', item.urlToImage, li);

    // Add list item to list
    ul.appendChild(li);
  };
}
function addThisToTheList (type, text, container)  {
  // Create the element
  var element = document.createElement(type);
element.
  // Add some text to it
  if (type === 'img') {
    element.src = text;
  } else {
    element.innerText = text;
  }

  // Add child to container
  container.appendChild(element);
}




