

import "../Head/Head.css"
import avatar1 from "../../assets/images/avatar-1.jpg"
const Head = () => {
    return (
        <div>
            <div class="head bg-white p-15 between-flex">
                <div class="search p-relative">
                    <input class="p-10 rad-10" type="search" placeholder="Type a Keyword" />
                </div>
                <div class="icons d-flex align-center">
                    <span class="notifications p-relative">
                        <i class="fa-regular fa-bell fa-lg"></i>
                    </span>
                    <img class="h-avatar" src={avatar1} alt="" />
                </div>

            </div>
        </div>
    )
}

export default Head