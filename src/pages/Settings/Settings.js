import "./Settings.css"

const Settings = () => {
  return (
    <>
      {/* <!-- Start Settings page  --> */}
      <div class="setting-page  m-20 d-grid gap-20">
        {/* <!-- Start Settings Box  --> */}
        <div class="p-20 bg-white rad-10">
          <h2 class="mt-0 mb-10">Site Control</h2>
          <p class="mt-0 mb-20 c-grey fs-15">
            Control the Website if there is Maintenance</p>
          <div class="mb-15 between-flex">
            <div>
              <span>Website Control</span>
              <p class="c-grey mt-5 mb-5 fs-13">Open / Close Website and type the Reason</p>
            </div>

            <label>
              <input class="toggle-checkbox" type="checkbox" name="" id="" />
              <div class="toggle-switch"></div>
            </label>

          </div>
          <textarea class="close-message  b-none fs-15 p-10 rad-6 d-block w-full"
            placeholder="Close Message Content"></textarea>
        </div>
        {/* <!-- End Settings Box  --> */}

        {/* <!-- Start genral Info  --> */}
        <div class="general-info p-20 bg-white rad-10">
          <h2 class="mt-0 mb-10">General Info</h2>
          <p class="mt-0 mb-20 c-grey fs-15">
            General Information about your Account</p>
          <div class="mb-15">
            <label for="first" class="fs-14 c-grey d-block mb-10">First Name</label>
            <input class=" p-10  rad-6 d-block w-full b-ccc" type="text" id="first"
              placeholder="First Name" />
          </div>
          <div class="mb-15">
            <label for="last" class="fs-14 c-grey d-block mb-10">Last Name</label>
            <input class=" p-10  rad-6 d-block w-full b-ccc" type="text" id="last"
              placeholder="Last Name" />
          </div>
          <div>
            <label for="email" class="  fs-14 c-grey d-block mb-10">Email</label>
            <input class=" email disable  p-10 w-fulls  rad-6 b-ccc" type="email" value="Mosmoyas@nn.mos"
              id="email" placeholder="Email" disabled />
            <a class="c-blue" href="/#">Change</a>
          </div>
        </div>
        {/* <!-- End General Info  --> */}
        {/* <!-- Start Security   --> */}
        <div class="p-20 bg-white rad-10">
          <h2 class="mt-0 mb-10">General Info</h2>
          <p class="mt-0 mb-20 c-grey fs-15">
            Security Information about your Account</p>
          <div class="security-box mb-15 between-flex">
            <div>
              <span>Password</span>
              <p class="c-grey mt-5 mb-0 fs-13">Last chane on 14/08/2022</p>
            </div>
            <a href="/#" class="button c-white bg-blue btn-shape">Change</a>
          </div>
          <div class="security-box mb-15 between-flex">
            <div>
              <span>Tow-Factor Authentication</span>
              <p class="c-grey mt-5 mb-0 fs-13">Enable / Disable The Feature</p>
            </div>
            <label>
              <input class="toggle-checkbox" type="checkbox" name="" id="" />
              <div class="toggle-switch"></div>
            </label>
          </div>
          <div class="security-box  between-flex">
            <div>
              <span>Devices</span>
              <p class="c-grey mt-5 mb-0 fs-13">Check the Login Devices list</p>
            </div>
            <a href="/#" class=" c-black bg-eee btn-shape">Devices List</a>
          </div>
        </div>
        {/* <!-- End Security  --> */}
        {/* <!-- Start Social Media Settings --> */}
        <div class=" social-boxes p-20 bg-white rad-10">
          <h2 class="mt-0 mb-10">Social Media Information</h2>
          <p class="mt-0 mb-20 c-grey fs-15">
            Social Media Information for your Account</p>
          <div class=" mb-15 d-flex align-center">
            <i class="fa-brands fa-facebook center-flex c-grey"></i>
            <input class="rad-10" type="text" name="" id="" placeholder="Facebook Username" />
          </div>
          <div class=" mb-15 d-flex align-center">
            <i class="fa-brands fa-twitter center-flex c-grey"></i>
            <input class="rad-10" type="text" name="" id="" placeholder="Twitter Username" />
          </div>
          <div class=" mb-15 d-flex align-center">
            <i class="fa-brands fa-linkedin center-flex c-grey"></i>
            <input class="rad-10" type="text" name="" id="" placeholder="Linkedin Username" />
          </div>
          <div class=" mb-15 d-flex align-center">
            <i class="fa-brands fa-youtube center-flex c-grey"></i>
            <input class="rad-10" type="text" name="" id="" placeholder="Youtube Username" />
          </div>
        </div>
        {/* <!-- End Social Media Settings --> */}
        {/* <!-- Start Task Control  --> */}
        <div class="widgets-control p-20 bg-white rad-10">
          <h2 class="mt-0 mb-10">Widgets Control</h2>
          <p class="mt-0 mb-20 c-grey fs-15">
            Show / Hide Widgets</p>

          <div class="control d-flex align-center mb-15">
            <input type="checkbox" id="second" />
            <label for="second">Yearly Targets</label>
          </div>
          <div class="control d-flex align-center mb-15">
            <input type="checkbox" id="one" />
            <label for="one">Latest Projects</label>
          </div>
          <div class="control d-flex align-center mb-15">
            <input type="checkbox" id="third" />
            <label for="third">Tickets Statistics</label>
          </div>
          <div class="control d-flex align-center mb-15">
            <input type="checkbox" id="forth" />
            <label for="forth">Latest News</label>
          </div>
          <div class="control d-flex align-center mb-15">
            <input type="checkbox" id="fifth" />
            <label for="fifth">Latest checked tasks</label>
          </div>
          <div class="control d-flex align-center mb-15">
            <input type="checkbox" id="sixth" />
            <label for="sixth">Top Serch Items</label>
          </div>
        </div>
        {/* <!-- Start Task Control  --> */}
        {/* <!-- Start Backup  Control  --> */}
        <div class="backup-control p-20 bg-white rad-10">
          <h2 class="mt-0 mb-10">Backup Management</h2>
          <p class="mt-0 mb-20 c-grey fs-15">
            Control Backup Time and Location</p>

          <div class="date d-flex align-center mb-15">
            <input type="radio" name="time" id="daily" />
            <label for="daily">Daily</label>
          </div>
          <div class="date d-flex align-center mb-15">
            <input type="radio" name="time" id="weakly" />
            <label for="weakly">Weakly</label>
          </div>
          <div class="date d-flex align-center mb-15">
            <input type="radio" name="time" id="monthly" />
            <label for="monthly">Monthly</label>
          </div>
          <div class="servers d-flex align-center txt-c">
            <input type="radio" name="servers" id="server-one" />
            <div class="server mb-15 rad-10 w-full mr-5 ">
              <label class="d-block m-15" for="server-one">
                <i class="fa-solid fa-server d-block mb-10"></i>
                Megaman</label>
            </div>
            <input type="radio" name="servers" id="server-two" />
            <div class="server mb-15 rad-10 w-full mr-5 ">
              <label class="d-block m-15" for="server-two">
                <i class="fa-solid fa-server d-block mb-10"></i>
                Zero</label>
            </div>
            <input type="radio" name="servers" id="server-three" />
            <div class="server mb-15 rad-10 w-full  ">
              <label class="d-block m-15" for="server-three">
                <i class="fa-solid fa-server d-block mb-10"></i>
                Sigma</label>
            </div>
          </div>

        </div>



      </div>

    </>
  )
}

export default Settings