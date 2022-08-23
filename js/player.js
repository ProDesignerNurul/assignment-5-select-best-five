function addPlayers (playerList) {
    const player = playerList.parentNode.parentNode.children[0].innerText;
    console.log(player);
    const li = document.createElement('li');
    li.innerText = player;

    const ol = document.getElementById('ol');
    const ulLength = ol.children.length;
    
    if (ulLength < 5) {
        ol.appendChild(li);
        playerList.disabled = true;
        playerList.style.backgroundColor = '#c73452';
    }
    else {
        alert('Please Do Not Select More Then Five');
        return;
    }
 
}

