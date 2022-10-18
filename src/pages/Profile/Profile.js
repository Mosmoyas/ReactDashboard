import "./Profile.css"
import { PageHead } from '../../Components'
import avatar01 from "../../assets/images/avatar-1.jpg"
import activity01 from "../../assets/images/activity-01.png"
import activity02 from "../../assets/images/activity-02.png"
import activity03 from "../../assets/images/activity-03.webp"


const Profile = () => {
  return (
    <>
      <PageHead>Profile</PageHead>
      <div class="profile-page m-20">

        {/* <!-- Start OverView   --> */}

        <div class="overview d-flex  rad-10  align-center  bg-white">
          <div class="avatar-box p-20 txt-c">
            <img src={avatar01} alt="Avatar" class="rad-half mb-10" />

            <h3 class="m-0">Mosmoyas</h3>
            <p class="mt-10 mb-10 c-grey ">Level 20</p>
            <div class="level bg-eee rad-6 p-relative">
              <span style={{ width: "80" }}></span>
            </div>
            <div class="rating mt-10 mb-10">


              {(() => {
                let stars = []
                for (let i = 0; i < 6; i++) {
                  stars.push(<i class="fa-solid fa-star c-orange"></i>)

                }
                return stars;
              })()}

            </div>
            <p class="mt-10 fs-15 c-grey  mb-10">550 Rating</p>
          </div>
          {/* <!-- Start Information Box  --> */}
          <div class="info-box txt-c-mobile w-full">
            <div class="box p-20 d-flex align-center ">
              <h4 class="m-0 c-grey fs-15 w-full">General Information</h4>
              <div class="fs-14">
                <span class="c-grey">Full Name: </span>
                <span>Mostafa Hafez</span>
              </div>
              <div class="fs-14">
                <span class="c-grey">Gender: </span>
                <span>Male</span>
              </div>

              <div class="fs-14">
                <span class="c-grey">Country: </span>
                <span>Egypt</span>
              </div>

              <div class="fs-14">
                <label>
                  <input checked class="toggle-checkbox" type="checkbox" name="" id="" />
                  <div class="toggle-switch"></div>
                </label>
              </div>

            </div>
            <div class="box p-20 d-flex align-center ">
              <h4 class="m-0 c-grey fs-15 w-full">Personal Information</h4>
              <div class="fs-14">
                <span class="c-grey">Email: </span>
                <span>Mos@gmx.de</span>
              </div>
              <div class="fs-14">
                <span class="c-grey">Phone: </span>
                <span>0173525410</span>
              </div>

              <div class="fs-14">
                <span class="c-grey">Date of Birth: </span>
                <span>11/12/1984</span>
              </div>

              <div class="fs-14">
                <label>
                  <input checked class="toggle-checkbox" type="checkbox" name="" id="" />
                  <div class="toggle-switch"></div>
                </label>
              </div>

            </div>
            <div class="box p-20 d-flex align-center ">
              <h4 class="m-0 c-grey fs-15 w-full">Job Description</h4>
              <div class="fs-14">
                <span class="c-grey">Title: </span>
                <span>Full Stack Developer</span>
              </div>
              <div class="fs-14">
                <span class="c-grey">Programming Language: </span>
                <span>Python</span>
              </div>

              <div class="fs-14">
                <span class="c-grey">Year of Experience: </span>
                <span>5+</span>
              </div>

              <div class="fs-14">
                <label>
                  <input checked class="toggle-checkbox" type="checkbox" name="" id="" />
                  <div class="toggle-switch"></div>
                </label>
              </div>

            </div>
            <div class="box p-20 d-flex align-center ">
              <h4 class="m-0 c-grey fs-15 w-full">Billing Information</h4>
              <div class="fs-14">
                <span class="c-grey">Payment Method: </span>
                <span>Paypal</span>
              </div>
              <div class="fs-14">
                <span class="c-grey">Email: </span>
                <span>email@email.com</span>
              </div>

              <div class="fs-14">
                <span class="c-grey">Subscription: </span>
                <span>Monthly</span>
              </div>

              <div class="fs-14">
                <label>
                  <input checked class="toggle-checkbox" type="checkbox" name="" id="" />
                  <div class="toggle-switch"></div>
                </label>
              </div>

            </div>

          </div>
          {/* <!-- End Information Box  --> */}
        </div>
        {/* <!-- End OverView   --> */}
        {/* <!-- Start Other Data  --> */}
        <div class="other-data d-flex gap-20">
          <div class="skills-card p-20 bg-white rad-10 mt-20">
            <h2 class="mt-0 mb-10">My Skills</h2>
            <p class=" mt-0 mb-20 c-grey fs-15">Complete Skills List</p>
            <ul class="m-0 txt-c-mobile">
              <li> <span>HTML</span><span>Pugjs</span><span>HAML</span></li>
              <li> <span>css</span><span>SASS</span><span>Stylus</span> </li>
              <li> <span>JavaScript</span><span>TypeScript</span></li>
              <li> <span>Vujs</span><span>Reactjs</span><span>Angular</span></li>
              <li> <span>Jest</span><span>Jesmin</span></li>
              <li> <span>PHP</span><span>Larvel</span></li>
              <li> <span>Python</span><span>Django</span></li>
              <li> <span>HTML</span><span>Pugjs</span></li>
            </ul>
          </div>
          <div class="Activities p-20 bg-white rad-10 mt-20">
            <h2 class="mt-0 mb-10">Latest Activities</h2>
            <p class=" mt-0 mb-20 c-grey fs-15">Latest Activities done by the User</p>
            <div class="activity d-flex align-center txt-c-mobile">
              <img src={activity03} alt="" />
              <div class="info">
                <span class="d-block mb-10">Store</span>
                <span class="c-grey">Bought the Mastring Python Course</span>
              </div>
              <div class="date"><span class="d-block mb-10">18:10</span>
                <span class="c-grey">Monday</span>
              </div>
            </div>
            <div class="activity d-flex align-center txt-c-mobile">
              <img src={activity02} alt="" />
              <div class="info">
                <span class="d-block mb-10">Bages</span>
                <span class="c-grey">Unclocked the 10 Skills Bages</span>
              </div>
              <div class="date"><span class="d-block mb-10">18:10</span>
                <span class="c-grey">Yesterday</span>
              </div>
            </div>
            <div class="activity d-flex align-center txt-c-mobile">
              <img src={activity01} alt="" />
              <div class="info">
                <span class="d-block mb-10">Store</span>
                <span class="c-grey">Got the PHP Certificate</span>
              </div>
              <div class="date"><span class="d-block mb-10">18:10</span>
                <span class="c-grey">Yesterday</span>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Other Data  --> */}


      </div></>
  )
}

export default Profile