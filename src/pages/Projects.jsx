import img from "../assets/logo.svg";

function Projects() {
  return (
    <section
      id="app_section_projects"
      className="section-show app_section_projects"
    >
      <table className="projects-table">
        <tbody className="projects-table__body">
          <tr className="projects-table__row">
            <th scope="row">007</th>
            <td>Digital Odyssey Studio</td>
            <td>⦑ SOLO ⦁ DESIGN ⦒</td>
            <td className="table-date">Mar. 2024</td>
            <td>
              <button className="projects-table__button">GO</button>
            </td>
          </tr>
          <tr className="projects-table__row">
            <th scope="row">006</th>
            <td>Récréa Tool</td>
            <td>⦑ WORK ⦁ DESIGN ⦒</td>
            <td className="table-date">Mar. 2024</td>
            <td>
              <button className="projects-table__button">GO</button>
            </td>
          </tr>
          <tr className="projects-table__row">
            <th scope="row">005</th>
            <td>W3R.ONE</td>
            <td>⦑ WORK ⦁ DESIGN ⦒</td>
            <td className="table-date">Feb. 2024</td>
            <td>
              <button className="projects-table__button">GO</button>
            </td>
          </tr>
          <tr className="projects-table__row">
            <th scope="row">004</th>
            <td>Wiki Wilder</td>
            <td>⦑ SOLO ⦁ DEV ⦁ DESIGN ⦒</td>
            <td className="table-date">Jan. 2024</td>
            <td>
              <button className="projects-table__button">GO</button>
            </td>
          </tr>
          <tr className="projects-table__row">
            <th scope="row">003</th>
            <td>My Beauty Coach</td>
            <td>⦑ TEAM ⦁ DEV ⦁ DESIGN ⦁ 3D ⦒</td>
            <td className="table-date">Jan. 2024</td>
            <td>
              <button className="projects-table__button">GO</button>
            </td>
          </tr>
          <tr className="projects-table__row">
            <th scope="row">002</th>
            <td>Eating Nam Nam</td>
            <td>⦑ TEAM ⦁ DEV ⦁ DESIGN ⦒</td>
            <td className="table-date">Jan. 2024</td>
            <td>
              <button className="projects-table__button">GO</button>
            </td>
          </tr>
          <tr className="projects-table__row">
            <th scope="row">001</th>
            <td>The Cocktail Maker</td>
            <td>⦑ TEAM ⦁ DEV ⦁ DESIGN ⦒</td>
            <td className="table-date">Nov. 2023</td>
            <td>
              <button className="projects-table__button">GO</button>
            </td>
          </tr>
          <tr className="projects-table__row">
            <th scope="row">000</th>
            <td>Going Merry Quiz</td>
            <td>⦑ TEAM ⦁ DEV ⦁ DESIGN ⦒</td>
            <td className="table-date">Oct. 2023</td>
            <td>
              <button className="projects-table__button">GO</button>
            </td>
          </tr>
        </tbody>
      </table>
      <article className="projects-article">
        <div className="projects-article__header">
          <h2>Digital Odyssey Studio</h2>
          <p>Project n°007</p>
        </div>
        <img src={img} />
      </article>
    </section>
  );
}

export default Projects;
