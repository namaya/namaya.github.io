const projects = [
  {
    title: "Embedded Pokemon FireRed",
    dateCreated: new Date("2016-04-20"),
    summary:
      "A port of the Gameboy Advance game 'Pok&eacute;mon FireRed' for a Texas Instruments' TM4C microcontroller.",
    skills: [
      "C",
      "Embedded Programming",
      "Vector Graphics",
      // "Finite State Machines",
      // "Analog-to-Digital Converters (ADC)",
      // "Digital-to-Analog Converters (DAC)",
      // "TM4C123x Microcontroller",
      // "Keil &mu;Vision 4 IDE",
      // "Adafruit ST7735 LCD",
    ],
    thumbnail: "assets/images/thumbnails/pokemon.png",
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
    $("#project-list").append(`
      <div class="col">
        <div class="card" style="width: 20rem;">
          <img src="${project.thumbnail}" class="card-img-top img-thumbnail" alt="..." style="height: 10rem; width: 20rem;">
          <div class="card-body">
            <h5 class="card-title">${project.title}</h5>
            <div id="${project.id}-skills" class="d-inline-flex flex-wrap"></div>
            <p class="card-text">${project.summary}</p>
          </div>
        </div>
      </div>
    `);

    project.skills.forEach((skill) =>
      $(`#${project.id}-skills`).append(
        `<small class="text-nowrap px-1">${skill}</small>`
      )
    );
  });
