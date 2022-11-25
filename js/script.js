/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */
'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const movieDB = {
    movies: [
      'Логан',
      'Лига справедливости',
      'Ла-ла лэнд',
      'Одержимость',
      'Скотт Пилигрим против...',
    ],
  };
  const input = document.querySelector('.adding__input').value;

  const adv = document.querySelectorAll('.promo__adv img');
  adv.forEach((item) => {
    item.remove();
  });

  const img = document.querySelector('.promo__bg');
  img.style.backgroundImage = 'url(../img/bg.jpg)';

  const genre = img.querySelector('.promo__genre');
  genre.innerHTML = 'Drama';

  const movieList = document.querySelector('.promo__interactive-list');

  movieList.innerHTML = '';
  const newList = document.querySelector('.promo__interactive-title');

  movieDB.movies.sort();
  movieDB.movies.forEach((item, i) => {
    movieList.innerHTML += `<li class="promo__interactive-item">${
      i + 1
    } ${item}.<div class="delete"></div></li>`;
  });
});
