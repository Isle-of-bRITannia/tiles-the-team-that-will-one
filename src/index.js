import { brTile } from './bottom-right.js';
import { Tile } from './tiles/api.js';
import { fireGirl, purpleWiz, uh, redWiz, fireBall } from './tiles/imageTiles/index.js';
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

const tile = Tile.beside(
  Tile.above(
    Tile.beside(
      Tile.quad(
        redWiz,
        fireBall,
        Tile.quad(
          redWiz,
          redWiz,
          fireBall,
          redWiz
        ),
        redWiz
      ),
      Tile.beside(
        fireBall,
        purpleWiz
        )
    )
    ,
    Tile.beside(
      Tile.quad(
        fireBall,
        redWiz,
        fireBall,
        redWiz
      ),
      Tile.beside(
        Tile.quad(
          redWiz,
          Tile.quad(
            redWiz,
            redWiz,
            purpleWiz,
            purpleWiz
          ),
          redWiz,
          Tile.above(
            purpleWiz,
            fireBall
          )
        ),
        purpleWiz
      )
    )
  ),
  Tile.above(
    Tile.flipVertical(fireBall),
    brTile
  )
); 


const raster = rasterize({width, height})(tile);

renderRaster(raster)(ctx);

console.log('done');