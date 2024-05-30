import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const [hoveredRow, setHoveredRow] = useState("007");
  const gsapScrollTable = useRef(null);

  const rows = [
    {
      id: "007",
      name: "Digital Odyssey Studio",
      tags: "⦑ SOLO ⦁ DESIGN ⦒",
      date: "Mar. 2024",
      description:
        "To continue practicing, I envisioned my website as a freelance web developer. It is currently under construction.",
      src: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FJSu4dJNTuKRMuEcGHo2n9h%2FDIGITAL-ODYSSEY-STUDIO%3Fnode-id%3D43%253A5%26t%3D0wjM00k1yz01klrJ-1",
      url: "https://www.figma.com/proto/JSu4dJNTuKRMuEcGHo2n9h/DIGITAL-ODYSSEY-STUDIO?node-id=397%3A13&t=0wjM00k1yz01klrJ-1",
    },
    {
      id: "006",
      name: "Récréa Tool",
      tags: "⦑ WORK ⦁ DESIGN ⦒",
      date: "Mar. 2024",
      description:
        "During my internship at O'Rabbit Graphic Design, I participated in the UI/UX design on Figma for a business application intended for a maintenance team.",
      src: "",
      url: "",
    },
    {
      id: "005",
      name: "W3R.ONE",
      tags: "⦑ WORK ⦁ DESIGN ⦒",
      date: "Feb. 2024",
      description:
        "During my internship at O'Rabbit Graphic Design, I worked on image adaptations using Adobe CC and Figma, and designed some UI/UX elements of the website.",
      src: "https://w3r.one/fr",
      url: "https://w3r.one/fr",
    },
    {
      id: "004",
      name: "Wiki Wilder",
      tags: "⦑ SOLO ⦁ DEV ⦁ DESIGN ⦒",
      date: "Jan. 2024",
      description:
        "This project was designed and developed by myself. It is a resource-sharing hub for trainers, students, and alumni in web development training. Created with React, Express.js, Node.js, MySQL, Git/GitHub, and NPM. Fully inspired by obsidian.md.",
      src: "",
      url: "https://github.com/fgaujard/checkpoint-4",
    },
    {
      id: "003",
      name: "My Beauty Coach",
      tags: "⦑ TEAM ⦁ DEV ⦁ DESIGN ⦁ 3D ⦒",
      date: "Jan. 2024",
      description:
        "36-hour hackathon to create a website for L'Oréal. In a team of 3, we developed an interface linked to AI that recommends products tailored to your needs, exclusively from the group's brands. I was responsible for 3D integration and design.",
      src: "",
      url: "",
    },
    {
      id: "002",
      name: "Eating Nam Nam",
      tags: "⦑ TEAM ⦁ DEV ⦁ DESIGN ⦒",
      date: "Jan. 2024",
      description:
        "Third team project with 5 members. A recipe-sharing site with a community aspect. Created with React, Express.js, Node.js, MySQL, Git/GitHub, NPM, Agile/Scrum. Designed by me.",
      src: "https://eating-name-name.remote-fr-2.wilders.dev/recipes",
      url: "https://eating-name-name.remote-fr-2.wilders.dev/recipes",
    },
    {
      id: "001",
      name: "The Cocktail Maker",
      tags: "⦑ TEAM ⦁ DEV ⦁ DESIGN ⦒",
      date: "Nov. 2023",
      description:
        "Second team project with 4 members. A cocktail recipe search site based on the ingredients you have available. Created with React, Node.js, Git/GitHub, NPM, Agile/Scrum. Designed by me.",
      src: "",
      url: "",
    },
    {
      id: "000",
      name: "Going Merry Quiz",
      tags: "⦑ TEAM ⦁ DEV ⦁ DESIGN ⦒",
      date: "Oct. 2023",
      description:
        "First team project with 5 members. A mini quiz on various themes. Created with Javascript, HTML5, CSS3, Git/Github. Designed by me.",
      src: "https://rapha2202.github.io/Projet-1-City-Quiz/",
      url: "https://rapha2202.github.io/Projet-1-City-Quiz/",
    },
  ];

  useEffect(() => {
    gsap.to(gsapScrollTable.current, {
      opacity: 0,
      scale: 0.9,
      scrollTrigger: {
        trigger: gsapScrollTable.current,
        start: "top center-=35%",
        end: "bottom center",
        scrub: 1,
      },
    });
  }, []);

  const handleMouseEnter = (rowId) => {
    setHoveredRow(rowId);
  };

  const getRowClass = (rowId) => {
    return hoveredRow === rowId ? "projects-table__rows_hover" : "";
  };

  return (
    <section id="projects" className="section-show app_section_projects">
      <div className="projects-content" ref={gsapScrollTable}>
        <table className="projects-table">
          <tbody className="projects-table__body">
            {rows.map((row) => (
              <tr
                key={row.id}
                className={`projects-table__row ${getRowClass(row.id)}`}
                onClick={() => handleMouseEnter(row.id)}
              >
                <th scope="row">{row.id}</th>
                <td>{row.name}</td>
                <td>{row.tags}</td>
                <td className="projects-table__date">{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {rows
          .filter((row) => row.id === hoveredRow)
          .map((row) => (
            <article className="projects-article">
              <iframe
                className="projects-article__frame"
                title={row.name}
                width="100%"
                height="100%"
                src={row.src}
              ></iframe>

              <div className="projects-article__body">
                <p>{row.description}</p>

                <a href={row.url} target="_blank">
                  GO VISIT
                </a>
              </div>
            </article>
          ))}
      </div>
    </section>
  );
}

export default Projects;
