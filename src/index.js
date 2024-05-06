document.getElementById('loadButton').addEventListener('click', async () => {
    const { greet } = await import('./greet.js');
    const name = prompt('Enter your name:');
    alert(greet(name));
  });
  