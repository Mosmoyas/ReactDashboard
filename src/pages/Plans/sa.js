import './Plans.css'
import { PageHead } from '../../Components'
import DataPlans from '../../Data/DataPlans'
const Plans = () => {
    const PlansData = DataPlans.map((val, key) => {
        return (<>
            <ul className="m-0">
                <li>
                    <i className={(val[key][1]) === true ? "fa-solid fa-check fa-fw yes" : "fa-solid fa-check fa-fw"}> </i>
                    <span>{val.Lessons}</span>
                    <i className="fa-solid fa-circle-info help"></i>
                </li>
                <li>
                    <i className="fa-solid fa-check fa-fw yes"> </i>
                    <span>{val.Board}</span>
                    <i className="fa-solid fa-circle-info help"></i>
                </li>
            </ul>
            <a href="/#" className="btn-shape bg-green c-white w-fit d-block mt-15">Join</a>
            {/* </div> */}
        </>
        );
    })
    return (
        <>
            <PageHead>Plans</PageHead>
            <div className="plans-page d-grid gap-20 ml-20 mr-20 mb-25">{PlansData}</div>
        </>)
}

export default Plans
