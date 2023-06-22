const MAX_MATCHES = 100;
const MAX_NAME_LENGTH = 20;
let matches = [];
let matchCount = 0;

function displayMatch(match) {
    const output = document.getElementById("output");
    const matchInfo = document.createElement("div");
    matchInfo.innerHTML = `<strong>Match: </strong>${match.name}<br>
                           <strong>Capacité: </strong>${match.capacity}<br>
                           <strong>Places disponibles: </strong>${match.availableSeats}<br><br>`;
    output.appendChild(matchInfo);
}

function addMatch() {
    if (matchCount < MAX_MATCHES) {
        const name = prompt("Entrez le nom du match : ");
        const capacity = parseInt(prompt("Entrez la capacité du match : "));
        const match = {
            name: name,
            capacity: capacity,
            availableSeats: capacity,
        };
        matches.push(match);
        matchCount++;
        alert("Match ajouté avec succès.");
    } else {
        alert("Nombre maximum de matchs atteint.");
    }
}

function displayMatches() {
    const output = document.getElementById("output");
    output.innerHTML = "";
    if (matchCount > 0) {
        const heading = document.createElement("h2");
        heading.textContent = "Liste des matchs";
        output.appendChild(heading);
        matches.forEach(displayMatch);
    } else {
        output.textContent = "Aucun match disponible.";
    }
}

function searchMatch() {
    if (matchCount > 0) {
        const searchName = prompt("Entrez le nom du match à rechercher : ");
        let found = false;
        matches.forEach((match) => {
            if (match.name === searchName) {
                alert("=== Match trouvé ===\n\n" +
                    `Match: ${match.name}\n` +
                    `Capacité: ${match.capacity}\n` +
                    `Places disponibles: ${match.availableSeats}\n\n`);
                found = true;
            }
        });
        if (!found) {
            alert("Match non trouvé.");
        }
    } else {
        alert("Aucun match disponible.");
    }
}

function reserveSeat() {
    if (matchCount > 0) {
        const searchName = prompt("Entrez le nom du match à réserver : ");
        let found = false;
        matches.forEach((match) => {
            if (match.name === searchName) {
                if (match.availableSeats > 0) {
                    match.availableSeats--;
                    alert("Place réservée avec succès.");
                } else {
                    alert("Plus de places disponibles pour ce match.");
                }
                found = true;
            }
        });
        if (!found) {
            alert("Match non trouvé.");
        }
    } else {
        alert("Aucun match disponible.");
    }
}

function processChoice() {
    const choice = parseInt(document.getElementById("choice").value);
    switch (choice) {
        case 1:
            addMatch();
            break;
        case 2:
            displayMatches();
            break;
        case 3:
            searchMatch();
            break;
        case 4:
            reserveSeat();
            break;
        case 5:
            alert("Au revoir !");
            break;
        default:
            alert("Choix invalide.");
    }
}

window.onload = function () {
    document.getElementById("choice").focus();
};
