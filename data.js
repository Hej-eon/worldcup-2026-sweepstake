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
  "Qatar",
  "Saudi Arabia",
  "Haiti"
];

const fixtures = [
  {
    date: "2 Jul 2026 - 8:00 PM",
    home: {
      name: "Spain",
      code: "es",
      owner: "Betim"
    },
    away: {
      name: "Austria",
      code: "at",
      owner: "Karl"
    },
    result: ""
  }
];

function getFlag(team) {
  if (team.code === "eng") {
    return "https://upload.wikimedia.org/wikipedia/en/b/be/Flag_of_England.svg";
  }

  if (team.code === "sct") {
    return "https://upload.wikimedia.org/wikipedia/commons/1/10/Flag_of_Scotland.svg";
  }

  return `https://flagcdn.com/w40/${team.code}.png`;
}

const standingsBody = document.querySelector("#standings tbody");
const teamsContainer = document.getElementById("teams");
const eliminatedList = document.getElementById("eliminated");

if (standingsBody && teamsContainer && eliminatedList) {

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
}

const fixturesBody = document.querySelector("#fixtures tbody");

if (fixturesBody) {
  fixtures.forEach(fixture => {
    fixturesBody.innerHTML += `
      <tr>
        <td>${fixture.date}</td>

        <td>
          <img class="flag"
               src="${getFlag(fixture.home)}"
               alt="${fixture.home.name}">
          ${fixture.home.name} (${fixture.home.owner})

          vs

          <img class="flag"
               src="${getFlag(fixture.away)}"
               alt="${fixture.away.name}">
          ${fixture.away.name} (${fixture.away.owner})
        </td>

        <td>${fixture.result}</td>
      </tr>
    `;
  });
}

const bracketData = {

  leftSide: [

    {
      id: "R32-1",
      home: { name: "Germany", code: "de", owner: "Heja" },
      away: { name: "Paraguay", code: "py", owner: "Karl" },
      winner: "Paraguay"
    },

    {
      id: "R32-2",
      home: { name: "France", code: "fr", owner: "Karl" },
      away: { name: "Sweden", code: "se", owner: "Betim" },
      winner: "France"
    },

    {
      id: "R32-3",
      home: { name: "South Africa", code: "za", owner: "Darshan" },
      away: { name: "Canada", code: "ca", owner: "Heja" },
      winner: ""
    },

    {
      id: "R32-4",
      home: { name: "Netherlands", code: "nl", owner: "Betim" },
      away: { name: "Morocco", code: "ma", owner: "Darshan" },
      winner: ""
    },

    {
      id: "R32-5",
      home: { name: "Portugal", code: "pt", owner: "Darshan" },
      away: { name: "Croatia", code: "hr", owner: "Krishan" },
      winner: ""
    },

    {
      id: "R32-6",
      home: { name: "Spain", code: "es", owner: "Betim" },
      away: { name: "Austria", code: "at", owner: "Karl" },
      winner: ""
    },

    {
      id: "R32-7",
      home: { name: "USA", code: "us", owner: "Krishan" },
      away: { name: "Bosnia", code: "ba", owner: "Betim" },
      winner: ""
    },

    {
      id: "R32-8",
      home: { name: "Belgium", code: "be", owner: "Darshan" },
      away: { name: "Senegal", code: "sn", owner: "Karl" },
      winner: ""
    }

  ],

  rightSide: [

    {
      id: "R32-9",
      home: { name: "Brazil", code: "br", owner: "Karl" },
      away: { name: "Japan", code: "jp", owner: "Heja" },
      winner: ""
    },

    {
      id: "R32-10",
      home: { name: "Ivory Coast", code: "ci", owner: "Betim" },
      away: { name: "Norway", code: "no", owner: "Darshan" },
      winner: ""
    },

    {
      id: "R32-11",
      home: { name: "Mexico", code: "mx", owner: "Heja" },
      away: { name: "Ecuador", code: "ec", owner: "Darshan" },
      winner: ""
    },

    {
      id: "R32-12",
      home: { name: "England", code: "eng", owner: "Krishan" },
      away: { name: "DR Congo", code: "cd", owner: "Heja" },
      winner: ""
    },

    {
      id: "R32-13",
      home: { name: "Argentina", code: "ar", owner: "Darshan" },
      away: { name: "Cape Verde", code: "cv", owner: "Betim" },
      winner: ""
    },

    {
      id: "R32-14",
      home: { name: "Australia", code: "au", owner: "Krishan" },
      away: { name: "Egypt", code: "eg", owner: "Darshan" },
      winner: ""
    },

    {
      id: "R32-15",
      home: { name: "Switzerland", code: "ch", owner: "Krishan" },
      away: { name: "Algeria", code: "dz", owner: "Karl" },
      winner: ""
    },

    {
      id: "R32-16",
      home: { name: "Colombia", code: "co", owner: "Krishan" },
      away: { name: "Ghana", code: "gh", owner: "Darshan" },
      winner: ""
    }

  ]

};
