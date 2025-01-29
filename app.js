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

function raffleSecretFriend() {
  console.log(friends.length, typeof friends.length);
  if (friends.length !== 0) {
    let randomIndex = Math.floor(Math.random() * friends.length);

    document.getElementById(
      'resultado'
    ).innerHTML = `<li>${friends[randomIndex]}</li>`;
  }
}
