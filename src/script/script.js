
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
  let titleContainer = $('<div>');
  let descrContainer = $('<div>');

  let closeElem = $('<div>');
  closeElem.addClass('close');
  closeElem.text('x');
  container.append(closeElem);

  closeElem.on('click', function(){
    $(this).closest('.item').remove();
  });


  let titleElem = $('<h2>');
  let descrElem = $('<p>');

  titleContainer.append(titleElem);
  descrContainer.append(descrElem);

  container.append(titleContainer);
  container.append(descrContainer);
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






function getData (){
  $.ajax({
    url: 'https://reqres.in/api/users?page=2',
    success: function(data){
      console.log(data);
    }
  })
}
getData();

let testUser = {
  avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg",
  email: "michael.lawson@reqres.in",
  first_name: "Michael",
  id: 7,
  last_name: "Lawson"
}

function addUser(user) {
  let container = $('<div>');
  let emailUser = $('<div>');
  let first_nameUser = $('<div>');
  let last_nameUser = $('<div>');
  let avatarUser = $('<img>');

  emailUser.text(user.email);
  first_nameUser.text(user.first_name);
  last_nameUser.text(user.last_name);
  avatarUser.attr('src', user.avatar);

  container.append(emailUser);
  container.append(first_nameUser);
  container.append(last_nameUser);
  container.append(avatarUser);
  container.addClass('user');

  $('.users').append(container);
}

addUser(testUser);