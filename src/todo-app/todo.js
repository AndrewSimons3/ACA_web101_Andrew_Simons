// click button, add todo to list item

function addItem () {
  //get input
  let input = $('input')
  console.log('input', input)
  //get value of input
} let inputVal = input.val()
  console.log('inputVal', inputVal)
  // // add value to list of items in $(.todo-list)
  let list = $('.todo-list')
  //create element to append to list
  let listItem = $("<input type='checkbox'<li></li>")
  // add inputVal to listItem
  let listItemVal = listItem.text(inputVal)
  // add listItem to list
  list.append(listItemVal)
  // clear input
  input.val('')