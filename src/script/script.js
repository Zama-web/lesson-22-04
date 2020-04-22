
function changeVal() {
  let cur = $(this);
  let curText = cur.text();
  let input = $('<input>');
  input.val(curText);
  let parent = cur.closest('.item');
  parent.prepend(input);
  cur.remove();
  input.on('blur', saveChange);

}

function saveChange() {
  let cur = $(this);
  let curText = cur.val();
  let h2Elem = $('<h2>');
  h2Elem.text(curText);
  let parent = cur.closest('.item');
  parent.prepend(h2Elem);
  cur.remove();


}

function addItem(title, descr) {
  let container = $('<div>');
  let titleElem = $('<h2>');
  let descrElem = $('<p>');
  container.append(titleElem);
  container.append(descrElem);
  container.addClass('item');

  titleElem.on('dblclick', changeVal);
  titleElem.text(title);
  descrElem.text(descr);
  return container
}


$('.to-do-form').on('submit', function (event) {
  event.preventDefault();
  let title = $('.title').val();
  let descr = $('.descr').val();

  $('.output').append(addItem(title, descr));

})

