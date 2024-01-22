// nome

console.log(process.argv);

const args = process.argv.slice(2);

console.log(args);

if (args.length < 1) {
  console.error('Por favor, forneça pelo menos um argumento.');
} else {
  const keyValue = args[0].split('=');

  if (keyValue.length === 2 && keyValue[0] === 'nome') {
    const nome = keyValue[1];
    console.log('Nome:', nome);
  } else {
    console.error('Argumento inválido. Certifique-se de fornecer um argumento na forma "nome=valor".');
  }
}
