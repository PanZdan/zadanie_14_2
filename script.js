var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'Film o czarodzieju',
    img: './img/harry_potter.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    img: './img/krol_lew.jpg'
  },
  {
    id: 3,
    title: 'Ojciec chrzestny',
    desc: 'Film o szefie nowojorskiej mafii',
    img: './img/ojciec_chrzestny.jpg'
  },
  {
    id: 4,
    title: 'Człowiek który poznał nieskończonść',
    desc: 'Film o genialnym matematyku-samouku Srinivasa Ramanujan',
    img: './img/człowiek_nieskonczonosc.jpg'
  }
  ];

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('img', {src: movie.img})
    );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

ReactDOM.render(element, document.getElementById('app'));