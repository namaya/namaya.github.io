const projects = [
  {
    title: "Embedded Pokemon FireRed",
    dateCreated: new Date("2016-04-20"),
    summary:
      "A port of the Gameboy Advance game 'Pok&eacute;mon FireRed' for a Texas Instruments' TM4C microcontroller.",
    skills: [
      "C",
      "Embedded Programming",
      "Finite State Machines",
      "Analog-to-Digital Converters (ADC)",
      "Digital-to-Analog Converters (DAC)",
      "TM4C123x Microcontroller",
      "Keil &mu;Vision 4 IDE",
      "Adafruit ST7735 LCD",
    ],
  },
  {
    title: "LC-3b",
    dateCreated: new Date("2017-01-26"),
    summary:
      "A virtual micro-architecture that implements the LC-3b ISA including support for hardware interrupts, virtual memory, and instruction pipelining.",
    skills: ["Computer Architecture", "C", "Assembly"],
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
      <div>
        <h1>${project.title}</h1>
        <p>${project.summary}</p>
        <ul id="${project.id}-skills" class="list-group list-group-horizontal-sm"></ul>
      </div>
    `);

    project.skills.forEach((skill) =>
      $(`#${project.id}-skills`).append(
        `<li class="list-group-item">${skill}</li>`
      )
    );
  });
