const btn = document.getElementById('btn');

const text = document.getElementById('text');

btn.addEventListener('click',() => {
  const childlist = document.createElement('li');

childlist.textcontent = 'ボタンをクリックしました。';

text.appendChild(childlist);

text.textContent = "ボタンをクリックしました。";

});