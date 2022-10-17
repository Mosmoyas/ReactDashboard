import "./Projects.css"
import { PageHead } from '../../Components'
import DataProjects from '../../Data/DataProjects'
const Projects = () => {
  const projectsData = DataProjects.map((val) => {
    return (<>
      <div class="project bg-white p-20 rad-6 p-relative">
        <span class="date fs-13 c-grey">{val.begindate}</span>
        <h4 class="m-0">{val.projrctName} </h4>

        <p class="c-grey mt-10 mb-20 fs-14">{val.description}</p>
        <div class="team ">

          for
          <a href="/#"><img src={val.team[0]} alt="01" /></a>
          <a href="/#"><img src={val.team[1]} alt="01" /></a>
          <a href="/#"><img src={val.team[2]} alt="01" /></a>
          <a href="/#"><img src={val.team[3]} alt="01" /></a>
          <a href="/#"><img src={val.team[4]} alt="01" /></a>

        </div>
        <div class="assignment d-flex">
          <span class="fs-13 rad-6 bg-eee">{val.tasks[0]}</span>
          <span class="fs-13 rad-6 bg-eee">{val.tasks[1]}</span>
          <span class="fs-13 rad-6 bg-eee">{val.tasks[2]}</span>
          <span class="fs-13 rad-6 bg-eee">{val.tasks[3]}</span>

        </div>
        <div class="info between-flex">
          <div class="prog bg-eee">
            <span class="bg-red" style={{ width: "50%" }}></span>
          </div>
          <div class="fs-14 c-grey">
            <i class="fa-solid fa-dollar-sign"></i>{val.price}
          </div>
        </div>
      </div></>)
  })
  return (
    <><PageHead></PageHead>
      <div class="projects-page  d-grid m-20 gap-20">

        {projectsData}

      </div>

    </>)
}

export default Projects