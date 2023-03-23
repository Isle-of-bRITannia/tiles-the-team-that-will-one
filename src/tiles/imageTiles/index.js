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

export const uh = await imgTile('./uh.png');
export const fireGirl = await imgTile('./fireGirl.jpg');
export const fireBall = await imgTile('./fireball.jpg');
export const redWiz = await imgTile('./redWiz.jpg');
export const purpleWiz = await imgTile('./purpleWiz.jpg');