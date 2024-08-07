module.exports = function check(str, bracketsConfig) {

  const openBrackets = ['(', '{', '[', '1', '3', '5']
  const closeBrackets = {
    [')']: '(',
    ['}']: '{',
    [']']: '[',
    ['2']: '1',
    ['4']: '3',
    ['6']: '5',
  }
  const sameBrackets = ['|', '7', '8']

  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let element = str[i];
    if (sameBrackets.includes(element)) {
      if (stack.length === 0) { stack.push(element) }
      else {
        let lastElement = stack[stack.length - 1]
        if (lastElement === element) { stack.pop(); } else { stack.push(element) }
      }
    } else {


      if (openBrackets.includes(element)) {
        stack.push(element)
      } else {
        if (stack.length === 0) {  return false };

        let passedElement = stack[stack.length - 1];
        if (closeBrackets[element] === passedElement) {
          stack.pop();
        } else {console.log(passedElement); console.log(element); console.log(stack);  return false }
      }

    }

  }

  return stack.length === 0
}

