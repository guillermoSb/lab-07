const { header, footer, progressBar } = require("../shared/shared");

document.body.appendChild(header());

document.body.appendChild(progressBar(100))

const content = document.createElement('section');
content.classList.add('container-fluid');
content.classList.add('my-5');
content.innerHTML = `

        <h2>Has Muerto</h2>
        <p>
            Cuando desacoplaste la cápsula esta no tenía suficiente energía para
            activar sus retro-propulsores. Por lo que has quedado a la deriva en el
            espacio.
        </p>

`

document.body.appendChild(content);

document.body.appendChild(footer([
    { content: 'Intentar De Nuevo ', src: 'index.html' }
]));
