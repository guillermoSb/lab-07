
document.body.appendChild(header());

document.body.appendChild(progressBar(100))

const content = document.createElement('section');
content.innerHTML = `
       <h2>No hay nadie</h2>
      <p>
        Has logrado aterrizar bien, pero no hay nadie que te reciba. Sales a ver
        el paisaje y lo ultimo que ves es un oso polar :O
      </p>
`

document.body.appendChild(content);

document.body.appendChild(footer([
  { content: 'Volver a jugar ', src: '/src/index.html' }
]));
