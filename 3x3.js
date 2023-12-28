var participants = [];
var registeredParticipants = []; // Liste der bereits registrierten Teilnehmer
var isOwner = false; // Variable, um den Besitzerstatus zu überprüfen

function registerParticipant() {
    var participantName = document.getElementById("participantName").value;

    if (!isAlreadyRegistered(participantName)) {
        participants.push(participantName);
        registeredParticipants.push(participantName);
        updateParticipantsList();
    } else {
        alert("Teilnehmer ist bereits registriert.");
    }
}

function isAlreadyRegistered(participantName) {
    return registeredParticipants.includes(participantName);
}

// Rest des Codes bleibt unverändert
// ...

function registerParticipant() {
    var participantName = document.getElementById("participantName").value;
    participants.push(participantName);
    updateParticipantsList();
}

function authenticateOwner() {
    // Hier könntest du eine Authentifizierung implementieren, um den Besitzerstatus festzulegen
    // Zum Beispiel durch Eingabe eines Passworts
    var password = prompt("Bitte Passwort eingeben:");
    isOwner = (password === "deinPasswort"); // Ändere "deinPasswort" entsprechend
    updateButtonState();
}

function randomTeams() {
    if (isOwner) {
        shuffleArray(participants);

        var teams = [];
        while (participants.length > 0) {
            teams.push(participants.splice(0, 3));
        }

        alertTeams(teams);
        updateParticipantsList();
    } else {
        alert("Nur der Besitzer kann Teams generieren.");
    }
}

function updateParticipantsList() {
    var participantsList = document.getElementById("participantsList");
    participantsList.innerHTML = "";
    participants.forEach(function (participant) {
        var listItem = document.createElement("li");
        listItem.textContent = participant;
        participantsList.appendChild(listItem);
    });
}

function updateButtonState() {
    var generateTeamsButton = document.getElementById("generateTeamsButton");
    generateTeamsButton.disabled = !isOwner;
}

function alertTeams(teams) {
    var alertMessage = "";
    teams.forEach(function (team, index) {
        alertMessage += "Team " + (index + 1) + ": " + team.join(", ") + "\n";
    });
    alert(alertMessage);
}
