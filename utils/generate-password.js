function generatePassword(options){

  // 檢查options
  const length = parseInt(options['password-length'])|| '8'
  const excludeCharacters = options['exclude-characters'] 

  const lowercase = 'abcdefghijklmnopqrstuvwxyz'
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const numbers = '1234567890'
  const symbols = '!@#$%^&*'

  // <-- test -->
  // const options = {
  //   length: 5,
  //   lowercase: 'on', 
  //   uppercase: 'on',
  //   numbers: 'on',
  //   symbols: 'on',
  //   excludeCharacters: '01234'
  // }

  // 判斷options
  let collection = [];
  console.log(`test`,collection)

  if (options.lowercase === 'on') {
    collection = collection.concat(lowercase.split(''));
  }

  if (options.uppercase === 'on') {
    collection = collection.concat(uppercase.split(''));
  }

  if (options.numbers === 'on') {
    collection = collection.concat(numbers.split(''));
  }

  if (options.symbols === 'on') {
    collection = collection.concat(symbols.split(''));
  }

  if(excludeCharacters){
    collection = collection.filter((character) => {
     return !excludeCharacters.includes(character)
    })
  }

  if (collection.length === 0) {
    return 'You must select at least one character set.';
  }

  let password = ''
  for(let i = 0; i < length; i++){
    password += collection[Math.floor(Math.random() * collection.length)]
  }


  console.log(`collection : ${collection}`);
  console.log(password);
  return password

}

module.exports = { generatePassword };
