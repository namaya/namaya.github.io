const colorPalette = [
  {
    // red
    text: "#E53935",
    background: "#FFEBEE",
  },
  {
    // pink
    text: "#C2185B",
    background: "#FCE4EC",
  },
  {
    // purple
    text: "#7B1FA2",
    background: "#F3E5F5",
  },
  {
    // blue
    text: "#0288D1",
    background: "#E1F5FE",
  },
  {
    // green
    text: "#388E3C",
    background: "#E8F5E9",
  },
  // {
  //   // yellow
  //   text: "#FBC02D",
  //   background: "#FFFDE7",
  // },
  {
    // orange
    text: "#F57C00",
    background: "#FFF3E0",
  },
  {
    // blue gray
    text: "#455A64",
    background: "#ECEFF1",
  },
];

const skills = {
  C: {},
  "Embedded Programming": {},
  "Vector Graphics": {},
  "Computer Architecture": {},
  Robotics: {},
  LabView: {},
};

for (const [color, value] of Object.entries(skills)) {
  const randomColor = Math.floor(Math.random() * colorPalette.length);
  skills[color].color = colorPalette[randomColor].text;
  skills[color].backgroundColor = colorPalette[randomColor].background;
}

const projects = [
  {
    title: "Embedded Pokemon FireRed",
    dateCreated: new Date("2016-04-20"),
    summary:
      "A port of the Gameboy Advance game 'Pok&eacute;mon FireRed' for a Texas Instruments' TM4C microcontroller.",
    // about: marked.parse(`
    //     I worked on this project with one other contributor, Ben Richards. We were tasked with creating a game
    //     that would run on a Texas Instruments' TM4C microcontroller.

    //     We chose to port the Gameboy Advance game
    //     'Pok&eacute;mon FireRed' to the microcontroller. We implemented the game's graphics using vector graphics
    //     and the game's logic using C.

    //     The game was played on a 128x128 pixel screen and was controlled using a
    //     4x4 keypad. The game was a success and was demonstrated at the end of the semester.
    //   `),
    skills: ["Embedded Programming", "Vector Graphics", "C"],
    thumbnail: "assets/images/thumbnails/pokemon.png",
  },
  // {
  //   title: "Embedded Pokemon FireRed-1",
  //   dateCreated: new Date("2016-04-20"),
  //   summary:
  //     "A port of the Gameboy Advance game 'Pok&eacute;mon FireRed' for a Texas Instruments' TM4C microcontroller.",
  //   skills: ["Embedded Programming", "Vector Graphics", "C"],
  //   thumbnail: "assets/images/thumbnails/pokemon.png",
  // },
  {
    title: "Toy Self-Driving Vehicle",
    dateCreated: new Date("2015-11-16"),
    summary:
      " A level 3 autonomous toy vehicle that follows lines and avoids walls.",
    skills: ["Embedded Programming", "Robotics", "LabView"],
    thumbnail: "assets/images/thumbnails/rover.png",
  },
  {
    title: "LC-3b",
    dateCreated: new Date("2017-01-26"),
    summary:
      "A virtual micro-architecture that implements the LC-3b ISA including support for hardware interrupts, virtual memory, and instruction pipelining.",
    skills: ["Computer Architecture", "C"],
    thumbnail: "assets/images/thumbnails/lc-3b.png",
  },
];
projects.sort((a, b) => b.dateCreated - a.dateCreated); // sort by date created DESC (most recent first)

projects
  .map((project) => {
    project.id = project.title.replace(/\s/g, "-").toLowerCase();
    return project;
  })
  .forEach((project) => {
    ``;
    $("#project-list").append(`
      <div class="col">
        <div class="card shadow hover-zoom" style="width: 20rem;" data-bs-toggle="modal" data-bs-target="#${project.id}-modal">
          <img src="${project.thumbnail}" class="card-img-top w-100" alt="..." style="height: 10rem;">
          <div class="card-body">
            <h5 class="card-title">${project.title}</h5>
            <p class="card-text">${project.summary}</p>
            <div id="${project.id}-skills" class="d-inline-flex flex-wrap"></div>
          </div>
        </div>

        <!-- Project Modal -->
        <div class="modal fade" id="${project.id}-modal" tabindex="-1" aria-labelledby="${project.id}-modal-label" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="${project.id}-modal-label">${project.title}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                ${project.summary}
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `);

    project.skills.forEach((skill) =>
      $(`#${project.id}-skills`).append(`
        <div class="p-1">
          <small class="text-nowrap px-2 py-1 rounded-pill" style="color: ${skills[skill].color}; background-color: ${skills[skill].backgroundColor};">
            ${skill}
          </small>
        </div>
        `)
    );
  });
