
document.body.appendChild(header());

document.body.appendChild(progressBar(100))

const content = document.createElement('section');
content.innerHTML = `
      <h2>La cápsula no está preparada para el mar</h2>
      <p>El agua le empieza a entrar a la cápsula. No lograste sobrevivir :(</p>
`

document.body.appendChild(content);

document.body.appendChild(footer([
    { content: 'Volver a jugar ', src: 'index.html' }
]));
