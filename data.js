const sweepstake = {
  Karl: [
    { name: "Tunisia", code: "tn" },
    { name: "Paraguay", code: "py" },
    { name: "Austria", code: "at" },
    { name: "Brazil", code: "br" },
    { name: "New Zealand", code: "nz" },
    { name: "South Korea", code: "kr" },
    { name: "Algeria", code: "dz" },
    { name: "Iraq", code: "iq" },
    { name: "France", code: "fr" },
    { name: "Senegal", code: "sn" }
  ],

  Betim: [
    { name: "Cape Verde", code: "cv" },
    { name: "Iran", code: "ir" },
    { name: "Bosnia", code: "ba" },
    { name: "Jordan", code: "jo" },
    { name: "Ivory Coast", code: "ci" },
    { name: "Sweden", code: "se" },
    { name: "Spain", code: "es" },
    { name: "Panama", code: "pa" },
    { name: "Czech Republic", code: "cz" },
    { name: "Netherlands", code: "nl" }
  ],

  Darshan: [
    { name: "South Africa", code: "za" },
    { name: "Egypt", code: "eg" },
    { name: "Norway", code: "no" },
    { name: "Ghana", code: "gh" },
    { name: "Belgium", code: "be" },
    { name: "Ecuador", code: "ec" },
    { name: "Portugal", code: "pt" },
    { name: "Uzbekistan", code: "uz" },
    { name: "Morocco", code: "ma" },
    { name: "Argentina", code: "ar" }
  ],

  Heja: [
    { name: "Turkey", code: "tr" },
    { name: "Curacao", code: "cw" },
    { name: "Mexico", code: "mx" },
    { name: "Uruguay", code: "uy" },
    { name: "DR Congo", code: "cd" },
    { name: "Scotland", code: "sct" },
    { name: "Germany", code: "de" },
    { name: "Canada", code: "ca" },
    { name: "Japan", code: "jp" }
  ],

  Krishan: [
    { name: "Qatar", code: "qa" },
    { name: "USA", code: "us" },
    { name: "Switzerland", code: "ch" },
    { name: "England", code: "eng" },
    { name: "Croatia", code: "hr" },
    { name: "Colombia", code: "co" },
    { name: "Australia", code: "au" },
    { name: "Saudi Arabia", code: "sa" },
    { name: "Haiti", code: "ht" }
  ]
};

// ADD ELIMINATED TEAMS HERE
const eliminatedTeams = [
  "Tunisia",
  "New Zealand",
  "South Korea",
  "Iraq",
  "Senegal",
  "Iran",
  "Bosnia",
  "Jordan",
  "Ivory Coast",
  "Sweden",
  "Panama",
  "Czech Republic",
  "Netherlands",
  "South Africa",
  "Ecuador",
  "Uzbekistan",
  "Turkey",
  "Curacao",
  "Uruguay",
  "DR Congo",
  "Scotland",
  "Germany",
  "Japan",
  
  
  
];

// ADD FIXTURES HERE
const fixtures = [
  {
    date: "",
    match: "",
    result: ""
  }
];

const standingsBody = document.querySelector("#standings tbody");
const teamsContainer = document.getElementById("teams");
const eliminatedList = document.getElementById("eliminated");
const fixturesBody = document.querySelector("#fixtures tbody");

function getFlag(team) {
  if (team.code === "eng") {
    return "https://upload.wikimedia.org/wikipedia/en/b/be/Flag_of_England.svg";
  }

  if (team.code === "sct") {
    return "https://upload.wikimedia.org/wikipedia/commons/1/10/Flag_of_Scotland.svg";
  }

  return `https://flagcdn.com/w40/${team.code}.png`;
}

Object.entries(sweepstake)
  .map(([player, teams]) => {
    const remaining = teams.filter(
      team => !eliminatedTeams.includes(team.name)
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

      const eliminated = eliminatedTeams.includes(team.name);

      teamsHtml += `
        <div class="team ${eliminated ? "eliminated" : ""}">
          <img class="flag" src="${getFlag(team)}" alt="${team.name}">
          ${team.name}
        </div>
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
