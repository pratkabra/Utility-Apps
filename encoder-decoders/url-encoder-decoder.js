const input = document.querySelector('#input');
const encodeButton = document.querySelector('#encode-btn');
const decodeButton = document.querySelector('#decode-btn');
const output = document.querySelector('#output');

encodeButton.addEventListener('click', () => {
  const url = input.value;
  output.value = encodeURIComponent(url);
});

decodeButton.addEventListener('click', () => {
  const encodedURL = input.value;
  output.value = decodeURIComponent(encodedURL);
});
