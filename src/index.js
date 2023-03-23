import { Tile } from './tiles/api.js';

import { fireGirl, uh, brownWiz, fireball, purp, whiteWiz } from './tiles/imageTiles/index.js';
import { rasterize } from './tiles/observe/rasterize.js';
import { renderRaster } from './tiles/observe/renderRaster.js';

const width = 600,
      height = 600;

const canvas = document.querySelector('#canvas');
canvas.width = width;
canvas.height = height;

const ctx = canvas?.getContext('2d');

const tile = Tile.swirl(
  Tile.above(
   fireball,
    Tile.beside(
      brownWiz
    )
  )
);

const raster = rasterize({width, height})(tile);

renderRaster(raster)(ctx);

console.log('done');