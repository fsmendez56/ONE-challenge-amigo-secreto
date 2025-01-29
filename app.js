let friends = [];

function addFriend() {
  let friendName = document.getElementById('amigo').value;

  if (friendName !== '') {
    friends.push(friendName);
    clearInputField();
  } else {
    alert('Por favor, inserte un nombre.');
  }
}

function clearInputField() {
  document.getElementById('amigo').value = '';
}
