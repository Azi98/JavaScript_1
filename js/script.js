"use strict"

const numberOfFilms = +prompt('Сколько фильмов ты посмотрел?', 'Тебя ебет?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const rateOfFilms = prompt("Один из последних просмотренных фильмов?", ""),
    answer = +prompt("На сколько его оцените", "");

const rateOfFilms1 = prompt("Один из последних просмотренных фильмов?", ""),
    answer1 = +prompt("На сколько его оцените", "");

personalMovieDB.movies[rateOfFilms] = answer;
personalMovieDB.movies[rateOfFilms1] = answer1;

console.log(personalMovieDB.movies);


