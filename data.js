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
  "Haiti",
  "Austria",
  "Croatia",
  "Algeria",
  "Australia",
  "Cape Verde",
  "Ghana",
  "Canada",
  "Paraguay",
  "Brazil",
];

const fixtures = [
  {
    id: "R32-3",
    date: "28 Jun 2026 - 8:00 PM",
    home: { name: "South Africa", code: "za", owner: "Darshan" },
    away: { name: "Canada", code: "ca", owner: "Heja" },
    result: "0-1",
    winner: "Canada"
  },

  {
    id: "R32-9",
    date: "29 Jun 2026 - 6:00 PM",
    home: { name: "Brazil", code: "br", owner: "Karl" },
    away: { name: "Japan", code: "jp", owner: "Heja" },
    result: "2-1",
    winner: "Brazil"
  },

  {
    id: "R32-1",
    date: "29 Jun 2026 - 9:30 PM",
    home: { name: "Germany", code: "de", owner: "Heja" },
    away: { name: "Paraguay", code: "py", owner: "Karl" },
    result: "1-1 (Paraguay pens)",
    winner: "Paraguay"
  },

  {
    id: "R32-4",
    date: "30 Jun 2026 - 2:00 AM",
    home: { name: "Netherlands", code: "nl", owner: "Betim" },
    away: { name: "Morocco", code: "ma", owner: "Darshan" },
    result: "1-1 (Morocco pens)",
    winner: "Morocco"
  },

  {
    id: "R32-10",
    date: "30 Jun 2026 - 6:00 PM",
    home: { name: "Ivory Coast", code: "ci", owner: "Betim" },
    away: { name: "Norway", code: "no", owner: "Darshan" },
    result: "1-2",
    winner: "Norway"
  },

  {
    id: "R32-2",
    date: "30 Jun 2026 - 10:00 PM",
    home: { name: "France", code: "fr", owner: "Karl" },
    away: { name: "Sweden", code: "se", owner: "Betim" },
    result: "3-0",
    winner: "France"
  },

  {
    id: "R32-11",
    date: "01 Jul 2026 - 2:00 AM",
    home: { name: "Mexico", code: "mx", owner: "Heja" },
    away: { name: "Ecuador", code: "ec", owner: "Darshan" },
    result: "2-0",
    winner: "Mexico"
  },

  {
    id: "R32-12",
    date: "01 Jul 2026 - 5:00 PM",
    home: { name: "England", code: "eng", owner: "Krishan" },
    away: { name: "DR Congo", code: "cd", owner: "Heja" },
    result: "2-1",
    winner: "England"
  },

  {
    id: "R32-8",
    date: "01 Jul 2026 - 9:00 PM",
    home: { name: "Belgium", code: "be", owner: "Darshan" },
    away: { name: "Senegal", code: "sn", owner: "Karl" },
    result: "3-2",
    winner: "Belgium"
  },

  {
    id: "R32-7",
    date: "02 Jul 2026 - 2:00 AM",
    home: { name: "USA", code: "us", owner: "Krishan" },
    away: { name: "Bosnia", code: "ba", owner: "Betim" },
    result: "2-0",
    winner: "USA"
  },

  {
    id: "R32-6",
    date: "02 Jul 2026 - 8:00 PM",
    home: { name: "Spain", code: "es", owner: "Betim" },
    away: { name: "Austria", code: "at", owner: "Karl" },
    result: "3-0",
    winner: "Spain"
  },

  {
    id: "R32-5",
    date: "03 Jul 2026 - 12:00 AM",
    home: { name: "Portugal", code: "pt", owner: "Darshan" },
    away: { name: "Croatia", code: "hr", owner: "Krishan" },
    result: "2-1",
    winner: "Portugal"
  },

  {
    id: "R32-15",
    date: "03 Jul 2026 - 4:00 AM",
    home: { name: "Switzerland", code: "ch", owner: "Krishan" },
    away: { name: "Algeria", code: "dz", owner: "Karl" },
    result: "2-0",
    winner: "Switzerland"
  },

  {
    id: "R32-14",
    date: "03 Jul 2026 - 7:00 PM",
    home: { name: "Australia", code: "au", owner: "Krishan" },
    away: { name: "Egypt", code: "eg", owner: "Darshan" },
    result: "1-1 (Egypt Pens)",
    winner: "Egypt"
  },

  {
    id: "R32-13",
    date: "03 Jul 2026 - 11:00 PM",
    home: { name: "Argentina", code: "ar", owner: "Darshan" },
    away: { name: "Cape Verde", code: "cv", owner: "Betim" },
    result: "3-2",
    winner: "Argentina"
  },

  {
    id: "R32-16",
    date: "04 Jul 2026 - 2:30 AM",
    home: { name: "Colombia", code: "co", owner: "Krishan" },
    away: { name: "Ghana", code: "gh", owner: "Darshan" },
    result: "1-0",
    winner: "Colombia"
  },

  {
    id: "R16-1",
    date: "04 Jul 2026 - 6:00 PM",
    home: { name: "Canada", code: "ca", owner: "Heja" },
    away: { name: "Morocco", code: "ma", owner: "Darshan" },
    result: "0-3",
    winner: "Morocco"
  },

  {
    id: "R16-2",
    date: "04 Jul 2026 - 10:00 PM",
    home: { name: "Paraguay", code: "py", owner: "Karl" },
    away: { name: "France", code: "fr", owner: "Karl" },
    result: "0-1",
    winner: "France"
  },

  {
    id: "R16-3",
    date: "05 Jul 2026 - 9:00 PM",
    home: { name: "Brazil", owner: "Karl" },
    away: { name: "Norway", code: "no", owner: "Darshan" },
    result: "0-2",
    winner: "Norway"
  },

  {
    id: "R16-4",
    date: "06 Jul 2026 - 1:00 AM",
    home: { name: "Mexico", code: "mx", owner: "Heja" },
    away: { name: "England", code: "eng", owner: "Krishan" },
    result: "",
    winner: ""
  },

  {
    id: "R16-5",
    date: "06 Jul 2026 - 8:00 PM",
    home: { name: "Portugal", code: "pt", owner: "Darshan" },
    away: { name: "Spain", code: "es", owner: "Betim" },
    result: "",
    winner: ""
  },

  {
    id: "R16-6",
    date: "07 Jul 2026 - 1:00 AM",
    home: { name: "USA", code: "us", owner: "Krishan" },
    away: { name: "Belgium", code: "be", owner: "Darshan" },
    result: "",
    winner: ""
  },

  {
    id: "R16-7",
    date: "07 Jul 2026 - 5:00 PM",
    home: { name: "Argentina", code: "ar", owner: "Darshan" },
    away: { name: "Egypt", code: "eg", owner: "Darshan" },
    result: "",
    winner: ""
  },

  {
    id: "R16-8",
    date: "07 Jul 2026 - 9:00 PM",
    home: { name: "Switzerland", code: "ch", owner: "Krishan" },
    away: { name: "Colombia", code: "co", owner: "Krishan" },
    result: "",
    winner: ""
  },

  {
    id: "QF-HEADER",
    date: "QUARTER FINALS",
    home: { name: "", code: "", owner: "" },
    away: { name: "", code: "", owner: "" },
    result: "",
    winner: ""
  },

  {
    id: "qf-1",
    date: "TBC",
    home: { name: "TBC", code: "", owner: "" },
    away: { name: "Morocco", code: "ma", owner: "Darshan" },
    result: "",
    winner: ""
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

const fixturesBody = document.querySelector("#fixtures tbody");

if (fixturesBody) {

  fixtures.forEach(fixture => {

    if (fixture.id === "R16-1") {
      fixturesBody.innerHTML += `
        <tr>
          <td colspan="3"
              style="
                font-weight:bold;
                font-size:22px;
                text-align:center;
                background:#f0f0f0;
                border-top:3px solid #333;
              ">
            ROUND OF 16
          </td>
        </tr>
      `;
    }

    if (fixture.id === "QF-HEADER") {
      fixturesBody.innerHTML += `
        <tr>
          <td colspan="3"
              style="
                font-weight:bold;
                font-size:22px;
                text-align:center;
                background:#f0f0f0;
                border-top:3px solid #333;
              ">
            QUARTER FINALS
          </td>
        </tr>
      `;
      return;
    }

    fixturesBody.innerHTML += `
      <tr>
        <td>${fixture.date}</td>

        <td>
          <img src="${getFlag(fixture.home)}" alt="${fixture.home.name}" style="width:22px; margin-right:6px;">
          ${fixture.home.name} (${fixture.home.owner})
          &nbsp;vs&nbsp;
          <img src="${getFlag(fixture.away)}" alt="${fixture.away.name}" style="width:22px; margin-right:6px;">
          ${fixture.away.name} (${fixture.away.owner})
        </td>

        <td>${fixture.result}</td>
      </tr>
    `;
  });
}

function getWinner(matchId) {
  const match = fixtures.find(f => f.id === matchId);

  if (!match || !match.winner) {
    return null;
  }

  if (match.home.name === match.winner) {
    return match.home;
  }

  return match.away;
}

const roundOf16 = [
  {
    home: getWinner("R32-1"),
    away: getWinner("R32-2")
  },
  {
    home: getWinner("R32-3"),
    away: getWinner("R32-4")
  },
  {
    home: getWinner("R32-5"),
    away: getWinner("R32-6")
  },
  {
    home: getWinner("R32-7"),
    away: getWinner("R32-8")
  },
  {
    home: getWinner("R32-9"),
    away: getWinner("R32-10")
  },
  {
    home: getWinner("R32-11"),
    away: getWinner("R32-12")
  },
  {
    home: getWinner("R32-13"),
    away: getWinner("R32-14")
  },
  {
    home: getWinner("R32-15"),
    away: getWinner("R32-16")
  }
];

const quarterFinals = [
  {
    home: getWinner("R16-1"),
    away: getWinner("R16-2")
  },
  {
    home: getWinner("R16-3"),
    away: getWinner("R16-4")
  },
  {
    home: getWinner
