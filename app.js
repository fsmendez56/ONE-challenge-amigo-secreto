let friends = [];

function addFriend() {
  let friendName = document.getElementById('amigo').value;

  if (friendName !== '') {
    friends.push(friendName);
    clearInputField();
    updateFriendsList();
  } else {
    alert('Por favor, inserte un nombre.');
  }
}

function clearInputField() {
  document.getElementById('amigo').value = '';
}

function updateFriendsList() {
  let friendsList = document.getElementById('listaAmigos');
  let items = '';

  friendsList.innerHTML = '';

  for (let i = 0; i < friends.length; i++) {
    items += `<li>${friends[i]}</li>`;
  }

  friendsList.innerHTML = items;
}
