import { Tile } from './tiles/api.js';
import { fireGirl, uh, brownWiz, fireball, purp, whiteWiz } from './tiles/imageTiles/tr.js';
import { rasterize } from './tiles/observe/rasterize.js';
import { renderRaster } from './tiles/observe/renderRaster.js';

const width = 600,
      height = 600;

const canvas = document.querySelector('#canvas');
canvas.width = width;
canvas.height = height;

const ctx = canvas?.getContext('2d');

// const tile = Tile.swirl(
//   Tile.above(
//     Tile.swirl(
//       Tile.above(
//         Tile.pure('red'),
//         fireGirl
//       )
//     ),
//     Tile.beside(
//       uh, 
//       Tile.pure('blue')
//     )
//   )
// );

//const tile = Tile.swirl(Tile.above(Tile.swirl(Tile.above(Tile.pure('red'),fireGirl)),Tile.beside(uh, Tile.pure('blue'))));

export const trTile = Tile.swirl(
  Tile.above(fireball,
    Tile.beside(
      brownWiz
    )
  
  )
);

console.log('done');