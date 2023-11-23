import './util.js';
import {createComments, createPhotos} from './data.js';

createComments();
createPhotos();

import {formThumbnails} from './trumbnails.js';

formThumbnails(createPhotos());
