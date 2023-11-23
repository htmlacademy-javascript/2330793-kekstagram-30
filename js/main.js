import './util.js';
import {createComments, createPhotos} from './data.js';

createComments();
createPhotos();

console.log(
  createComments(), createPhotos()
);
