import {LEVEL_1, LEVEL_2, LEVEL_3} from "./maze.js";

const mazeClasses = {
    '*': 'walls',
    '.': 'paths',
    'S': 'starter',
    'T': 'treasure'
  };

// Sélectionne l'élément <main>
const main = document.querySelector('main');

//générer un labyrinthe
function renderMaze(maze) {
  main.innerHTML = ''; // Vide le contenu précédent du <main> 
  const column = maze[0].length;
  console.log(column);

  main.style.display = 'grid';
  main.style.gridTemplateColumns = `repeat(${column},50px)`;
  main.style.alignItems = 'center';

  maze.forEach(row => {
    row.forEach(cell => {
      const div = document.createElement('div');
      const span = document.createElement('span');

      div.appendChild(span);

      span.textContent = cell;
      
      if (['*', '.', 'S', 'T'].includes(cell)) {
        span.classList.add('hidden-text');
      }
      

      div.classList.add(mazeClasses[cell] || 'unknown');

      main.appendChild(div);
    });
  });
}

renderMaze(LEVEL_1);
