import "./Widgets.css"
import avatar_1 from "../../../assets/images/avatar-1.jpg"
import greeting from "../../../assets/images/greeting.jpg"
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
export default QuickDraft
export { YearlyStats, Welcome }