const DESCRIPTIONS = [
  'Отдых на яхте',
  'Гора Килиманджару',
  'Вечерний закат',
  'Звездное небо',
  'Венецианский канал',
  'Млечный путь',
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Глеб',
  'Ярослав',
  'Борис',
  'Марина',
  'Анна',
  'Нина',
  'Толя',
  'Егор',
];

const PHOTO_COUNT = 25;

const likesRange = {
  MIN: 15,
  MAX: 200,
};

const commentsRange = {
  MIN: 0,
  MAX: 30,
};

const avatarRange = {
  MIN: 1,
  MAX: 6,
};

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomArrayElement = (elements) =>
  elements[getRandomInt(0, elements.length - 1)];

const createComment = (id) => ({
  id: ++id,
  avatar: `avatar/${getRandomInt(avatarRange.MIN, avatarRange.MAX)}.svg`,
  message: `${getRandomArrayElement(COMMENTS)}`,
  name: `${getRandomArrayElement(NAMES)}`,
});

const createPhoto = (id) => ({
  id: ++id,
  name: `${getRandomArrayElement(NAMES)}`,
  url: `photos/${id}.jpg`,
  DESCRIPTIONS: `${getRandomArrayElement(DESCRIPTIONS)}`,
  likes: getRandomInt(likesRange.MIN, likesRange.MAX),
  COMMENTS: createComment(),
});

const createComments = () =>
  Array.from(
    { length: getRandomInt(commentsRange.MIN, commentsRange.MAX) },
    (_, index) => createComment(index + 1)
  );

const createPhotos = () =>
  Array.from({ length: PHOTO_COUNT }, (_, index) => createPhoto(index + 1));

console.log {createComments, createPhotos};
