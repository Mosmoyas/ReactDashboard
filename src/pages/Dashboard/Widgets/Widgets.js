import "./Widgets.css"
import avatar_1 from "../../../assets/images/avatar-1.jpg"
import greeting from "../../../assets/images/greeting.jpg"
import news_01 from "../../../assets/images/news-1.jpg"
import news_02 from "../../../assets/images/news-2.jpg"
import news_03 from "../../../assets/images/news-3.jpg"
import news_04 from "../../../assets/images/news-4.jpg"
import filePDF from "../../../assets/images/pdf.png";
import fileDll from "../../../assets/images/dll.jpg";
import fileEsp from "../../../assets/images/eps.jpg";
import filePsd from "../../../assets/images/psd.png";
import fileAvi from "../../../assets/images/avi.webp";
import fileZip from "../../../assets/images/zip.webp";
import project from "../../../assets/images/project.png";

import team_01 from "../../../assets/images/team-01.jpg";
import team_02 from "../../../assets/images/team-02.png";
import team_03 from "../../../assets/images/team-03.png";
import team_04 from "../../../assets/images/team-04.png";
import team_05 from "../../../assets/images/team-05.png";







import { Widget } from "../../../Components/index"

// from "../../Components/Widget/Widget"
const Welcome = () => {
    return (
        <>
            {/* Start Welcome Widget */}
            <Widget className="welcome">
                <div class="intro p-20 d-flex space-between bg-eee">
                    <div>
                        <h2 class="m-0">Welcome</h2>
                        <p class="c-grey mt-5 mb-20">Mosmoyas</p>
                    </div>
                    <img class="hide-mobile " src={greeting} alt="" />
                </div>
                <img src={avatar_1} alt="" class="w-avatar" />
                <div class="body txt-c d-flex p-20 mt-20 mb-20 block-mobile">
                    <div>Mostafa Yassine<span class="d-block c-grey fs-14 mt-10">Developer </span></div>
                    <div>80<span class="d-block c-grey fs-14 mt-10">Projects</span></div>
                    <div>$8500 <span class="d-block c-grey fs-14 mt-10">Earned</span></div>
                </div>
                <a href="profile.html" class="visit d-block rad-10 fs-14  bg-blue c-white w-fit btn-shape">Visit
                    Profile</a>

            </Widget>
            {/* End Welcome Widget         */}
        </>
    )
}

const QuickDraft = () => {
    return (
        <>
            {/* Start QuickDraft Widget */}
            <Widget className="quick-draft">
                <h2 class="mt-0 mb-10">Quick Draft</h2>
                <p class="mt-0 mb-20 c-grey fs-15">Write a Draft for Your Ideas</p>
                <form action="">
                    <input class="d-block mb-20 w-full p-10 b-none bg-eee prad6" type="text" name="" id=""
                        placeholder="Title" />
                    <textarea class="d-block mb-20 w-full p-10 b-none bg-eee prad6"
                        placeholder="Your Thoughts"></textarea>
                    <input type="submit" class="save d-block bg-blue b-none fs-14 c-white w-fit btn-shape" name=""
                        id="" value="Save" />

                </form>
            </Widget>
            {/* End QuickDraft Widget         */}
        </>
    )
}




const YearlyStats = () => {
    return (
        <>
            <Widget className="targets">
                <h2 class="mt-0 mb-10">Yearly Targets</h2>
                <p class="mt-0 mb-20 c-grey fs-15">The Target of the Year</p>
                <div class="target-row mb-20 blue center-flex">
                    <div class="icon center-flex">
                        <i class="fa-solid fa-dollar-sign fa-lg c-blue"></i>
                    </div>
                    <div class="details">
                        <span class="fs-14 c-grey">Money</span>
                        <span class="d-block mt-5 mb-10 fw-bold">$20000</span>
                        <div class="progress p-relative ">
                            <span class="bg-blue blue" style={{ "width": "40%" }}>
                                <span class="bg-blue">40%</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="target-row mb-20 orange center-flex">
                    <div class="icon center-flex">
                        <i class="fa-solid fa-code fa-lg c-blue"></i>
                    </div>
                    <div class="details">
                        <span class="fs-14 c-grey">Projects</span>
                        <span class="d-block mt-5 mb-10 fw-bold">24</span>
                        <div class="progress p-relative ">
                            <span class="bg-orange orange" style={{ "width": "55%" }}>
                                <span class="bg-orange">55%</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="target-row mb-20 green center-flex">
                    <div class="icon center-flex">
                        <i class="fa-solid fa-user fa-lg c-blue"></i>
                    </div>
                    <div class="details">
                        <span class="fs-14 c-grey">Team</span>
                        <span class="d-block mt-5 mb-10 fw-bold">$20000</span>
                        <div class="progress p-relative ">
                            <span class="bg-green green" style={{ "width": "75%" }}>
                                <span class="bg-green">75%</span>
                            </span>
                        </div>
                    </div>
                </div>
            </Widget>
        </>
    )
}


const Tickets = () => {
    return (
        <> <div class="tickets p-20 bg-white rad-10">
            <h2 class="mt-0 mb-10">Tickets Statistics</h2>
            <p class="mt-0 mb-20 c-grey fs-15">Everything about support Tickets</p>
            <div class="d-flex txt-c gap-20 f-wrap">
                <div class="box p-20 rad-10 fs-13 c-grey">
                    <i class="fa-regular fa-rectangle-list fa-2x mb-10 c-orange"></i>
                    <span class="d-block c-balck fw-bold fs-25 mb-5">2500</span>
                    Total
                </div>
                <div class="box p-20 rad-10 fs-13 c-grey">
                    <i class="fa-solid fa-spinner fa-2x mb-10 c-blue"></i>
                    <span class="d-block c-balck fw-bold fs-25 mb-5">500</span>
                    Pending
                </div>
                <div class="box p-20 rad-10 fs-13 c-grey">
                    <i class="fa-regular fa-circle-check fa-2x mb-10 c-green"></i>
                    <span class="d-block c-balck fw-bold fs-25 mb-5">900</span>
                    Closed
                </div>
                <div class="box p-20 rad-10 fs-13 c-grey">
                    <i class="fa-regular fa-rectangle-xmark fa-2x mb-10 c-red"></i>
                    <span class="d-block c-balck fw-bold fs-25 mb-5">100</span>
                    Deleted
                </div>

            </div>
        </div>
        </>)
}

const LatestNews = () => {
    return (
        <>    <div class="latest-news p-20 bg-white rad-10 txt-c-mobile">
            <h2 class="mt-0 mb-20">Latest News</h2>
            <div class="news-line d-flex align-center  p-20 mb-20">
                <img class="rad-6" src={news_01} alt="" />
                <div class="info ml-15">
                    <h4 class="m-0">Created Sass Section</h4>
                    <p class="fs-14 mt-5 c-grey">News Sass Examples und Tutorials</p>
                </div>
                <span class="date fs-13 bg-eee btn-shape"> 3 Days ago</span>
            </div>
            <div class="news-line d-flex align-center  p-20 mb-20">
                <img class="rad-6" src={news_02} alt="" />
                <div class="info ml-15">
                    <h4 class="m-0">Created Sass Section</h4>
                    <p class="fs-14 mt-5 c-grey">News Sass Examples und Tutorials</p>
                </div>
                <span class="date fs-13  bg-eee btn-shape"> 3 Days ago</span>
            </div>
            <div class="news-line d-flex align-center  p-20 mb-20">
                <img class="rad-6" src={news_03} alt="" />
                <div class="info ml-15">
                    <h4 class="m-0">Created Sass Section</h4>
                    <p class="fs-14  mt-5 c-grey">News Sass Examples und Tutorials</p>
                </div>
                <span class="date fs-13 bg-eee btn-shape"> 3 Days ago</span>
            </div>
            <div class="news-line d-flex align-center p-20">
                <img class="rad-6" src={news_04} alt="" />
                <div class="info ml-15">
                    <h4 class="m-0">Created Sass Section</h4>
                    <p class="fs-14 mt-5 c-grey">News Sass Examples und Tutorials</p>
                </div>
                <span class="date fs-13 bg-eee btn-shape"> 3 Days ago</span>
            </div>
        </div>
        </>)
}


function LatestTasks() {
    return (
        <>   <div class="latest-tasks p-20 bg-white rad-10 txt-c-mobile">
            <h2 class="mt-0 mb-20">Latest Tasks</h2>

            <div class="task-row d-flex align-center space-between done">
                <div class="info">
                    <h4 class="mt-0 mb-5 "> Record One New Video</h4>
                    <p class="fs-13 c-grey ">Record Python Create Exe Project</p>
                </div>
                <i class="fa-regular fa-trash-can delete"></i>
            </div>
            <div class="task-row d-flex align-center space-between">
                <div class="info">
                    <h4 class="mt-0 mb-5 "> write Article</h4>
                    <p class="fs-13 c-grey ">Write low level vs high level Languages</p>
                </div>
                <i class="fa-regular fa-trash-can delete"></i>
            </div>
            <div class="task-row d-flex align-center space-between done">
                <div class="info">
                    <h4 class="mt-0 mb-5 "> Finish Project</h4>
                    <p class="fs-13 c-grey ">Publish Academy Programming Project</p>
                </div>
                <i class="fa-regular fa-trash-can delete"></i>
            </div>
            <div class="task-row d-flex align-center space-between">
                <div class="info">
                    <h4 class="mt-0 mb-5 "> Record One New Video</h4>
                    <p class="fs-13 c-grey ">Record Python Create Exe Project</p>
                </div>
                <i class="fa-regular fa-trash-can delete"></i>
            </div>
            <div class="task-row d-flex align-center space-between">
                <div class="info">
                    <h4 class="mt-0 mb-5 "> Record One New Video</h4>
                    <p class="fs-13 c-grey ">Record Python Create Exe Project</p>
                </div>
                <i class="fa-regular fa-trash-can delete"></i>
            </div>
            <div class="task-row d-flex align-center space-between">
                <div class="info">
                    <h4 class="mt-0 mb-5 "> Record One New Video</h4>
                    <p class="fs-13 c-grey ">Record Python Create Exe Project</p>
                </div>
                <i class="fa-regular fa-trash-can delete"></i>
            </div>
            <div class="task-row d-flex align-center space-between">
                <div class="info">
                    <h4 class="mt-0 mb-5 "> Record One New Video</h4>
                    <p class="fs-13 c-grey ">Record Python Create Exe Project</p>
                </div>
                <i class="fa-regular fa-trash-can delete"></i>
            </div>
        </div>
        </>
    )
}


const TopSearch = () => {
    return (
        <> <div class="search-items p-20 bg-white rad-10">
            <h2 class="mt-0 mb-20">Top Search </h2>
            <div class="items-head d-flex space-between c-grey mb-10 ">
                <div>Keyword</div>
                <div>Search Count</div>
            </div>
            <div class="items d-flex space-between pt-15 pb-15 mb-10">
                <span>Programming</span>
                <span class="bg-eee fs-12 btn-shape">220</span>
            </div>
            <div class="items d-flex space-between pt-15 pb-15 mb-10">
                <span>Data Science</span>
                <span class="bg-eee fs-12 btn-shape">600</span>
            </div>
            <div class="items d-flex space-between pt-15 pb-15 mb-10">
                <span>Data Analysis</span>
                <span class="bg-eee fs-12 btn-shape">120</span>
            </div>
            <div class="items d-flex space-between pt-15 pb-15 mb-10">
                <span>Artificial Intelligence</span>
                <span class="bg-eee fs-12 btn-shape">300</span>
            </div>
            <div class="items d-flex space-between pt-15 pb-15 mb-10">
                <span>Web Development</span>
                <span class="bg-eee fs-12 btn-shape">450</span>
            </div>
        </div></>)
}

const LatestUpload = () => {
    return (
        <>
            <div class="latest-upload p-20 bg-white rad-10">
                <h2 class="mt-0 mb-20">Latest Upload </h2>
                <ul class="m-0">
                    <li class="between-flex mb-10 pd-10">
                        <div class="d-flex align-center">
                            <img src={filePDF} alt="pdf" class="mr-10" />
                            <div>
                                <span class="d-block">my-file.pdf</span>
                                <span class="fs-15 c-grey">Mosmoyas</span>
                            </div>
                        </div>
                        <div class="bg-eee btn-shape fs-13">2.9mb</div>
                    </li>
                    <li class="between-flex mb-10 pd-10">
                        <div class="d-flex align-center">
                            <img src={fileAvi} alt="avi" class="mr-10" height="100px" />
                            <div>
                                <span class="d-block">my-avi.pdf</span>
                                <span class="fs-15 c-grey">Mosmoyas</span>
                            </div>
                        </div>
                        <div class="bg-eee btn-shape fs-13">2.9mb</div>
                    </li>
                    <li class="between-flex mb-10 pd-10">
                        <div class="d-flex align-center">
                            <img src={filePsd} alt="psd" class="mr-10" height="100px" />
                            <div>
                                <span class="d-block">my-psd.pdf</span>
                                <span class="fs-15 c-grey">Mosmoyas</span>
                            </div>
                        </div>
                        <div class="bg-eee btn-shape fs-13">2.9mb</div>
                    </li>
                    <li class="between-flex mb-10 pd-10">
                        <div class="d-flex align-center">
                            <img src={fileZip} alt="zip" class="mr-10" height="100px" />
                            <div>
                                <span class="d-block">my-zip.pdf</span>
                                <span class="fs-15 c-grey">Mosmoyas</span>
                            </div>
                        </div>
                        <div class="bg-eee btn-shape fs-13">3.9mb</div>
                    </li>
                    <li class="between-flex mb-10 pd-10">
                        <div class="d-flex align-center">
                            <img src={fileEsp} alt="eps" class="mr-10" height="100px" />
                            <div>
                                <span class="d-block">my-eps.pdf</span>
                                <span class="fs-15 c-grey">Mosmoyas</span>
                            </div>
                        </div>
                        <div class="bg-eee btn-shape fs-13">12.9mb</div>
                    </li>
                    <li class="between-flex mb-10 pd-10">
                        <div class="d-flex align-center">
                            <img src={fileDll} alt="dll.jpg" class="mr-10" height="100px" />
                            <div>
                                <span class="d-block">my-dll.jpg.pdf</span>
                                <span class="fs-15 c-grey">Mosmoyas</span>
                            </div>
                        </div>
                        <div class="bg-eee btn-shape fs-13">7.4mb</div>
                    </li>
                </ul>
            </div>
        </>)
}

const LastProject = () => {
    return (
        <> <div class="last-project p-20 bg-white rad-10 p-relative">
            <h2 class="mt-0 mb-20">Last Project Progress </h2>
            <ul class="m-0 p-relative">
                <li class="mt-25 d-flex align-center done">Got The Project</li>
                <li class="mt-25 d-flex align-center done">Start The Project</li>
                <li class="mt-25 d-flex align-center done">The Project is about to be finnish</li>
                <li class="mt-25 d-flex align-center current">Test the project</li>
                <li class="mt-25 d-flex align-center "> Finnish the Project & Get Money</li>

            </ul>
            <img src={project} alt="project process" class="launch-icon hide-mobile" />
        </div></>
    )
}

const Remeinder = () => {
    return (
        <> <div class="remeinders p-20 bg-white rad-10 p-relative">
            <h2 class="mt-0 mb-25">Remeinders</h2>
            <ul class="m-0">
                <li class="mt-15 d-flex align-center  mb-10 ">
                    <span class="key bg-blue  d-block rad-half"></span>
                    <div class="pl-15 blue ml-15">
                        <p class="fs-14 fw-bold mt-0 mb-5">Chech My Tasks List</p>
                        <span class="fs-13 c-grey">26/10/2022 - 12:00am</span>
                    </div>

                </li>
                <li class="mt-15 d-flex align-center mb-10">
                    <span class="key bg-green  d-block rad-half"></span>
                    <div class="pl-15 green ml-15">
                        <p class="fs-14 fw-bold mt-0 mb-5">Chech My Tasks Projects</p>
                        <span class="fs-13 c-grey">26/10/2022 - 12:00am</span>
                    </div>

                </li>
                <li class="mt-15 d-flex align-center mb-10">
                    <span class="key bg-orange  d-block rad-half"></span>
                    <div class="pl-15 orange ml-15">
                        <p class="fs-14 fw-bold mt-0 mb-5">Call All my Clients</p>
                        <span class="fs-13 c-grey">26/10/2022 - 12:00am</span>
                    </div>

                </li>
                <li class="mt-15 d-flex align-center  mb-10">
                    <span class="key bg-red  d-block rad-half"></span>
                    <div class="pl-15 red ml-15">
                        <p class="fs-14 fw-bold mt-0 mb-5">Chech My Tasks List</p>
                        <span class="fs-13 c-grey">26/10/2022 - 12:00am</span>
                    </div>

                </li>


            </ul>
        </div> </>
    )
}

const LastPost = () => {
    return (
        <>  <div class="last-post p-20 bg-white rad-10 p-relative">
            <h2 class="mt-0 mb-25">Last Posts</h2>
            <div class="top bg-white between-flex">
                <div class=" d-flex align-center mb-15">
                    <img class="h-avatar" src={avatar_1} alt="" />
                    <div class="text-info ml-15">
                        <span class="d-block fw-bold ">Mosmoyas</span>
                        <span class="fs-13 d-block c-grey">About 2 hours ago</span>
                    </div>
                </div>

            </div>
            <div class="post">
                <p class="c-grey fs-14 txt-c-mobile pt-20 pb-20  ">Lorem ipsum dolor sit, amet
                    consectetur
                    adipisicing elit. pb-
                    Molestias beatae odit mt- nesciunt
                    iure, nobis eaque laborio mb-sam natus architecto, incidunt, eos quam nam voluptate ipsam
                    earum
                    expedita dolore molestiae. Ratione, porro.</p>
            </div>

            <div class="top-stats d-flex space-between mt-10 c-grey fs-13 ml-10 mr-10">
                <div class="likes"><i class="fa-regular fa-heart"></i><span>1.8k</span></div>

                <div class="comments"><i class="fa-regular fa-comments"><span>100</span></i></div>

            </div>

        </div></>)
}


const SocialMedia = () => {
    return (
        <> <div class="social-media p-20 bg-white rad-10 p-relative">
            <h2 class="mt-0 mb-25">Social Media Stats</h2>
            <div class="box facebook p-15 p-relative mb-10 between-flex">
                <i class="fa-brands fa-facebook fa-2x c-white h-full center-flex"></i> <span>90k
                    Followers</span>
                <a href="/#" class="fs-12 c-white btn-shape">Follow</a>
            </div>
            <div class="box youtube p-15 p-relative mb-10 between-flex">
                <i class="fa-brands fa-youtube fa-2x c-white h-full center-flex"></i> <span>150k
                    Followers</span>
                <a href="/#" class="fs-12 c-white btn-shape">Like</a>
            </div>
            <div class="box twitter p-15 p-relative mb-10 between-flex">
                <i class="fa-brands fa-twitter fa-2x c-white h-full center-flex"></i> <span>2.5M
                    Followers</span>
                <a href="/#" class="fs-12 c-white btn-shape">Subscribe</a>
            </div>
            <div class="box  linkedin p-15 p-relative mb-10 between-flex">
                <i class="fa-brands fa-linkedin fa-2x c-white h-full center-flex"></i> <span>1M
                    Followers</span>
                <a href="/#" class="fs-12 c-white btn-shape">Follow</a>
            </div>
        </div></>
    )
}


const ProjectsTable = () => {
    return (
        <>
            <div class="projects p-20 bg-white rad-6">
                <h2 class="mt-0 mb-20">Projects</h2>
                <div class="responsive-table">
                    <table class="fs-15 w-full">
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Finish Date </td>
                                <td>Client</td>
                                <td>Price</td>
                                <td>Team</td>
                                <td>Status</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Minsiry Wikipedia</td>
                                <td>10 May 2022</td>
                                <td>Minstry</td>
                                <td>$5300</td>
                                <td>
                    

                                    {(() => {
                                        let teams = [team_01, team_02, team_03, team_04, team_05]

                                        let imgs = []
                                        for (let i = 0; i < teams.length; i++) {
                                            // const element = array[i];
                                            imgs.push(<img class="td-img" src={teams[i]} alt="" />)

                                        }
                                        return imgs;

                                    })()}
                                </td>
                                <td><span class="label btn-shape bg-orange c-white">Pending</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>


        </>)
}

export default QuickDraft


export { YearlyStats, Welcome, Tickets, LatestNews, LatestTasks, TopSearch, LatestUpload, LastProject, Remeinder, LastPost, SocialMedia, ProjectsTable }