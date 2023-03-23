import {Alg} from '../algebra.js';

const inThisDir = (imagePath) => (
  new URL(imagePath, 'http://localhost/src/tiles/imageTiles/').pathname
);

const imgTile = (imgSrc) => {
  return new Promise(resolve => {
    const img = new Image();
    img.onload = function() {
        resolve(Alg.fromImage(img));
    };
    img.src = inThisDir(imgSrc);
  });
}

export const pWiz = await imgTile('./br-purple-wizard.jpg');
export const iOTS = await imgTile('./br-Invasion-of-the-Soul.jpg');
export const burningLand = await imgTile('./br-burning-land.jpg');
export const waterfall = await imgTile('./br-waterfall.jpeg');
export const fire = await imgTile('./br-ygo-orange.png');
export const fox = await imgTile('./br-fox.jpg');
export const princess = await imgTile('./br-fire-princess.png');