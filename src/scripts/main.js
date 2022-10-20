'use strict';

// the name of task 'Зробити перший символ великим'
// task 'зробіть першу літеру маленького регістру'.

let userName = prompt('Enter Your name', 'User'); 

// easy way alert(userName.toLowerCase());
// if we have to make lowercase first char, but i think it task misstake;

let upperCaseUserName = userName[0].toUpperCase() + userName.slice(1);

// let upperCaseUserName = userName[0].toLowerCase() + userName.slice(1);
// if we have to make first char lowercase.

alert(upperCaseUserName);