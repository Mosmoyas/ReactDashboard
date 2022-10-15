import "../Sidebar/Sidebar.css"
import { Link } from "react-router-dom"


const Sidebar = () => {
    return (
        <>
            <div class="sidebar">
                <h3 class="logo-h3">MosMoyas</h3>
                <ul>
                    <li>
                        <Link to={"/"} class="page-link " >
                            <i class="fa-regular fa-chart-bar fa-fw"></i>
                            <span>Dashboard</span></Link>
                    </li>
                    <li>
                        <Link class=" page-link " to="/settings"><i
                            class="fa-solid fa-gear fa-fw"></i>
                            <span>Settings</span></Link>
                    </li>
                    <li>
                        <Link class="page-link " to="/profile"><i
                            class="fa-regular fa-user fa-fw"></i>
                            <span>Profile</span></Link>
                    </li>
                    <li>
                        <Link class="page-link" to="/projects"><i
                            class="fa-solid fa-diagram-project fa-fw"></i>
                            <span>Projects</span></Link>
                    </li>
                    <li>
                        <Link class="active page-link " to="/courses"><i
                            class="fa-solid fa-graduation-cap fa-fw"></i>
                            <span>Courses</span></Link>
                    </li>
                    <li>
                        <Link class=" page-link " to="/friends">
                            <i class="fa-solid fa-user-group  fa-fw"></i>
                            <span>Friends</span></Link>
                    </li>
                    <li>
                        <Link class="page-link " to="/files">
                            <i class="fa-regular fa-file fa-fw"></i>
                            <span>Files</span></Link>
                    </li>
                    <li>
                        <Link class="page-link " to={"/plans"}>
                            <i class="fa-solid fa-ruler-combined fa-fw"></i>
                            <span>Plans</span></Link>
                    </li>
                </ul>
            </div>
        </>)
}

export default Sidebar