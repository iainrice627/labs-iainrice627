function createNode(element) {
    return document.createElement(element);
  }

  function append(parent, el) {
    return parent.appendChild(el);
  }
  // const numberOfUsers = 10;
  const ul = document.getElementById('authors');
  const url = 'https://www.omdbapi.com/?s=Harry+Potter&apikey=5775a488'; //+ numberOfUsers;
  fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
      let authors = data.results;
      console.log(authors)
      return authors.map(function(author) {
        let li = createNode('li'),
            img = createNode('img'),
            span = createNode('span');
      img.src = author.picture.medium;
      span.innerHTML = `${author.name.first} ${author.name.last}`;
      append(li, img);
      append(li, span);
      append(ul, li);
      })
    })
    .catch(function(error) {
      console.log(error);
    });