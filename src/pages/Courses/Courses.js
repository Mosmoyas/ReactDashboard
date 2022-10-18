import './Courses.css'
import CoursesData from '../../Data/DataCourses'
import { PageHead } from '../../Components'

const Courses = () => {

  const Courses = CoursesData.map((val, key) => {
    return (<>
      <div class="course bg-white p-20 rad-6 p-relative">

        <img class="cover" src={val.imageCover} alt="" />
        <img class="instructor" src={val.imageInstructor} alt="" />
        <div class="p-20">
          <h4>{val.name}</h4>
          <p class="description c-grey mt-15 mb-10 fs-14">{val.description}</p>

        </div>
        <div class="info p-15 p-relative between-flex">
          <span class="title bg-blue c-white btn-shape">Course Info</span>
          <span class="c-grey"><i class="fa-regular fa-user"></i>
            {val.attendents}</span>
          <span class="c-grey"><i class="fa-regular fa-dollar-sign"></i>
            {val.price}</span>
        </div>
      </div>
    </>)
  })
  return (
    <>
      <PageHead>Courses</PageHead>

      <div class="courses-page  d-grid m-20 gap-20">
        {Courses}

      </div></>


  )
}

export default Courses