'use strict';

// Selecting elements
const resultEl = document.getElementById('result');
const btnCheck = document.getElementById('btn');

const reverseWord = function (word) {
  let reversedWord = '';
  for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
  }
  return reversedWord;
};

const isPalindrome = function (word) {
  const reversedWord = reverseWord(word);
  if (reversedWord === word) {
    return true;
  }
  return false;
};

const performFunction = function (sentence, classType) {
  resultEl.classList.remove('no-value', 'success', 'error');
  setTimeout(() => {
    resultEl.textContent = sentence;
    resultEl.classList.add(classType);
  }, 10);
};

btnCheck.addEventListener('click', function () {
  const inputEl = document.getElementById('input-text');

  if (inputEl.value === '') {
    performFunction('⛔Invalid input', 'no-value');
    return;
  }

  // Checking word is palindrome
  isPalindrome(inputEl.value.toLowerCase())
    ? performFunction("👌Yes, it's a palindrome!", 'success')
    : performFunction("👎No, it isn't a palindrome!", 'error');
});
