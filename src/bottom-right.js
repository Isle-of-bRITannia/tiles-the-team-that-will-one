import { Tile } from './tiles/api.js';

import { fireGirl, uh } from './tiles/imageTiles/index.js';
import { pWiz, iOTS, burningLand, waterfall, fire, fox, princess, bigFire } from './tiles/imageTiles/br-tiles.js';
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

export const brTile = Tile.above(Tile.beside(Tile.above(
    Tile.beside(
    pWiz, iOTS, 
    Tile.above(iOTS, burningLand), 
    waterfall), fire),Tile.above(bigFire,fire)),
    Tile.beside(fox, princess));

//const raster = rasterize({width, height})(tile);

//renderRaster(raster)(ctx);

console.log('done');
