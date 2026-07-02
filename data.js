const sweepstake = {
    "Karl": [
        "🇹🇳 Tunisia",
        "🇵🇾 Paraguay",
        "🇦🇹 Austria",
        "🇧🇷 Brazil",
        "🇳🇿 New Zealand",
        "🇰🇷 South Korea",
        "🇩🇿 Algeria",
        "🇮🇶 Iraq",
        "🇫🇷 France",
        "🇸🇳 Senegal"
    ],

    "Betim": [
        "🇨🇻 Cape Verde",
        "🇮🇷 Iran",
        "🇧🇦 Bosnia",
        "🇯🇴 Jordan",
        "🇨🇮 Ivory Coast",
        "🇸🇪 Sweden",
        "🇪🇸 Spain",
        "🇵🇦 Panama",
        "🇨🇿 Czech Republic",
        "🇳🇱 Netherlands"
    ],

    "Darshan": [
        "🇿🇦 South Africa",
        "🇪🇬 Egypt",
        "🇳🇴 Norway",
        "🇬🇭 Ghana",
        "🇧🇪 Belgium",
        "🇪🇨 Ecuador",
        "🇵🇹 Portugal",
        "🇺🇿 Uzbekistan",
        "🇲🇦 Morocco",
        "🇦🇷 Argentina"
    ],

    "Heja": [
        "🇹🇷 Turkey",
        "🇨🇼 Curaçao",
        "🇲🇽 Mexico",
        "🇺🇾 Uruguay",
        "🇨🇩 DR Congo",
        "🏴 Scotland",
        "🇩🇪 Germany",
        "🇨🇦 Canada",
        "🇯🇵 Japan"
    ],

    "Krishan": [
        "🇶🇦 Qatar",
        "🇺🇸 USA",
        "🇨🇭 Switzerland",
        "🏴 England",
        "🇭🇷 Croatia",
        "🇨🇴 Colombia",
        "🇦🇺 Australia",
        "🇸🇦 Saudi Arabia",
        "🇭🇹 Haiti"
    ]
};

/*
Add eliminated teams here exactly as written above
*/
const eliminatedTeams = [
    // "🇹🇳 Tunisia"
];

/*
Manually add fixtures here
*/
const fixtures = [
    {
        date: "TBC",
        match: "🇧🇷 Brazil vs 🇫🇷 France",
        result: ""
    },
    {
        date: "TBC",
        match: "🇦🇷 Argentina vs 🇪🇸 Spain",
        result: ""
    }
];

const standingsBody = document.querySelector("#standings tbody");
const teamsContainer = document.getElementById("teams");
const eliminatedList = document.getElementById("eliminated");
const fixturesBody = document.querySelector("#fixtures tbody");

Object.entries(sweepstake)
    .map(([player, teams]) => {
        const remaining = teams.filter(
            team => !eliminatedTeams.includes(team)
        ).length;

        return { player, teams, remaining };
    })
    .sort((a, b) => b.remaining - a.remaining)
    .forEach(item => {

        standingsBody.innerHTML += `
            <tr>
                <td>${item.player}</td>
                <td>${item.remaining}</td>
            </tr>
        `;

        let teamsHtml = "";

        item.teams.forEach(team => {
            const dead = eliminatedTeams.includes(team)
                ? "eliminated"
                : "";

            teamsHtml += `
                <span class="team ${dead}">
                    ${team}
                </span><br>
            `;
        });

        teamsContainer.innerHTML += `
            <div class="player-card">
                <h3>${item.player} (${item.remaining})</h3>
                ${teamsHtml}
            </div>
        `;
    });

eliminatedTeams.forEach(team => {
    eliminatedList.innerHTML += `<li>${team}</li>`;
});

fixtures.forEach(fixture => {
    fixturesBody.innerHTML += `
        <tr>
            <td>${fixture.date}</td>
            <td>${fixture.match}</td>
            <td>${fixture.result}</td>
        </tr>
    `;
});
