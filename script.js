'use strict';

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();
const date = now.getDate();
const hour = now.getHours();
const min = now.getMinutes();
let am_pm_hour
let am_pm

if(hour >= 12) {
  am_pm_hour = hour - 12;
  am_pm = "p.m.";
} else {
  am_pm_hour = hour;
  am_pm = "a.m.";
}

const output = `${year}/${month + 1}/${date} ${am_pm_hour}:${min}${am_pm}`;
document.getElementById('time').textContent = output;
