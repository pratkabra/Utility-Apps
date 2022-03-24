const input = document.querySelector('#input');
const encodeButton = document.querySelector('#encode-btn');
const decodeButton = document.querySelector('#decode-btn');
const output = document.querySelector('#output');

encodeButton.addEventListener('click', () => {
  const baseInput = input.value;
  output.value = btoa(baseInput);
});

decodeButton.addEventListener('click', () => {
  const encodedString = input.value;
  output.value = atob(encodedString);
});
