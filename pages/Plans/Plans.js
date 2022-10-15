import './Plans.css'
import { PageHead } from '../../Components'


const Plans = () => {
    return (
        <>
            <PageHead>Plans</PageHead>
            <div className="plans-page d-grid gap-20 ml-20 mr-20 mb-25">
                <div class="plan green bg-white p-20 rad-6">
                    <div class="top bg-green txt-c p-20">
                        <h2 class="m-0 c-white">Free</h2>
                        <div class="price c-white">
                            <span>$</span>0.00
                        </div>

                    </div>
                    <ul class="m-0">
                        <li>
                            <i class="fa-solid fa-check fa-fw yes"> </i>
                            <span>Access ALi Text Lessons</span>
                            <i class="fa-solid fa-circle-info help"> </i>


                        </li>
                        <li>
                            <i class="fa-solid fa-check fa-fw yes"> </i>
                            <span>Appear on Leaderboard</span>
                            <i class="fa-solid fa-circle-info help"> </i>


                        </li>
                        <li>
                            <i class="fa-solid fa-check fa-fw yes"> </i>
                            <span>Browse Content without Ads</span>
                            <i class="fa-solid fa-circle-info help"> </i>

                        </li>
                        <li>
                            <i class="fa-solid fa-xmark fa-fw "> </i>
                            <span>Access all Assignments</span>
                            <i class="fa-solid fa-circle-info help"> </i>

                        </li>
                        <li>
                            <i class="fa-solid fa-xmark fa-fw "> </i>
                            <span>Get daily Prizes</span>
                            <i class="fa-solid fa-circle-info help"> </i>

                        </li>
                        <li>
                            <i class="fa-solid fa-xmark fa-fw "> </i>
                            <span>Earn Certificate</span>
                            <i class="fa-solid fa-circle-info help"> </i>

                        </li>
                        <li>
                            <i class="fa-solid fa-xmark fa-fw "> </i>
                            <span>1 Gb Space for Hosting Fires</span>
                            <i class="fa-solid fa-circle-info help"> </i>

                        </li>
                        <li>
                            <i class="fa-solid fa-xmark fa-fw "> </i>
                            <span>Access Badges System</span>
                            <i class="fa-solid fa-circle-info help"> </i>

                        </li>
                    </ul>
                    <a href="/#" class="btn-shape bg-green c-white w-fit d-block mt-15">Join</a>
                </div>

            </div>



        </>)
}

export default Plans