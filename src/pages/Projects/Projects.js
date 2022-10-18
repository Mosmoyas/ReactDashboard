import "./Projects.css"
import { PageHead } from '../../Components'
import DataProjects from '../../Data/DataProjects'
const Projects = () => {

  const projectsData = DataProjects.map((val, key) => {

    return (<>
      <div class="project bg-white p-20 rad-6 p-relative">
        <span class="date fs-13 c-grey">{val.begindate}</span>
        <h4 class="m-0">{val.projrctName} </h4>

        <p class="c-grey mt-10 mb-20 fs-14">{val.description}</p>
        <div class="team ">

          {(() => {
            let imagesvales = []
            for (let i = 0; i < val.team.length; i++) {
              imagesvales.push(<a href="/#" ><img src={val.team[i]} id={val.id} alt="1" /></a>)

            }
            return imagesvales;
          })()}


        </div>
        <div class="assignment d-flex">

          {(() => {
            let tasks = []
            for (let i = 0; i < val.tasks.length; i++) {
              tasks.push(<span class="fs-13 rad-6 bg-eee">{val.tasks[i]}</span>)

            }
            return tasks;
          })()}


        </div>
        <div class="info between-flex">
          <div class="prog bg-eee">
            <span class="bg-red" style={{ width: val.achieved }}></span>
          </div>
          <div class="fs-14 c-grey">
            <i class="fa-solid fa-dollar-sign"></i>{val.price}
          </div>
        </div>
      </div></>)
  })
  return (
    <>
      <PageHead>Projects</PageHead>
      <div class="projects-page  d-grid m-20 gap-20">

        {projectsData}

      </div>

    </>)
}

export default Projects