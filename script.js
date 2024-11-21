// * are walls, . are paths, S is the starting point of the player and T is the treasure you should reach in order to end the game.
import {LEVEL_1} from "./maze.js";

const mazeClasses = {
    '*': 'walls',
    '.': 'paths',
    'S': 'starter',
    'T': 'treasure'
  };

  // Sélectionne l'élément <main>
const main = document.querySelector('main');

// Fonction pour générer un labyrinthe
function renderMaze(maze) {
  main.innerHTML = ''; // Vide le contenu précédent du <main> 


  maze.forEach(row => {
    row.forEach(cell => {
      const div = document.createElement('div');
      div.textContent = cell;

      div.classList.add(mazeClasses[cell] || 'unknown');

      main.appendChild(div);
    });
  });
}

renderMaze(LEVEL_1);
