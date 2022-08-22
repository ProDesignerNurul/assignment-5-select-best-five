
// const playersArray = [];

// function playerNameDisplay(playerDisplay){
//     console.log(playerDisplay);
//     const tableBody = document.getElementById('player-display');
//     tableBody.innerHTML = '';
//     for (let i = 0; i < playerDisplay.length; i++) {
//         const pName = playersArray[i].playersName;
//         const tr = document.createElement('tr');
//         tr.innerHTML = 
//         `
//         <th> ${i + 1} </th>
//         <td>${pName}</td>
//         <td>${pName}</td>
        
//         `;
//         tableBody.appendChild(tr);
//     }
// }

// function addToPlayer(elementId) {
//     // console.log(elementId.parentNode.parentNode.children[0].innerText);

//     const playersName = elementId.parentNode.parentNode.children[0].innerText;

//     playersArray.push(playersName);
    
    
//     playerNameDisplay(playersArray);
// }


document.getElementById('player-btn-1').addEventListener('click', function(){
    const listContainer = document.getElementById('player-display');

    const li = document.createElement('li');
    li.innerText = 'M Salah';
    listContainer.appendChild(li);
})
document.getElementById('player-btn-2').addEventListener('click', function(){
    const listContainer = document.getElementById('player-display');

    const li = document.createElement('li');
    li.innerText = 'Ronaldo';
    listContainer.appendChild(li);
})
document.getElementById('player-btn-3').addEventListener('click', function(){
    const listContainer = document.getElementById('player-display');

    const li = document.createElement('li');
    li.innerText = 'Cretiano Ronaldo';
    listContainer.appendChild(li);
})
document.getElementById('player-btn-4').addEventListener('click', function(){
    const listContainer = document.getElementById('player-display');

    const li = document.createElement('li');
    li.innerText = 'Leonel Messi';
    listContainer.appendChild(li);
})
document.getElementById('player-btn-5').addEventListener('click', function(){
    const listContainer = document.getElementById('player-display');

    const li = document.createElement('li');
    li.innerText = 'Mbappe';
    listContainer.appendChild(li);
})
document.getElementById('player-btn-6').addEventListener('click', function(){
    const listContainer = document.getElementById('player-display');

    const li = document.createElement('li');
    li.innerText = 'Mascherano';
    listContainer.appendChild(li);
})


