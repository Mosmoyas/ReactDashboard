import './Plans.css'
import { PageHead } from '../../Components'
import DataPlans from '../../Data/DataPlans'
const Plans = () => {
    const yes = "fa-solid fa-check fa-fw yes";
    const no = "fa-solid fa-check fa-fw";
    const PlansData = DataPlans.map((val, key) => {
        let checkAssigenment = (val.Assignments.active) ? yes : no
        let checkBage = (val.Badge.active) ? yes : no
        let checkPrize = (val.Prize.active) ? yes : no
        let checkHosting = (val.Hosting.active) ? yes : no
        let checkCertificate = (val.Certificate.active) ? yes : no




        return (<>
            <div className="plan green bg-white p-20 rad-6" id={val.id}>

                <div className="top bg-green txt-c p-20">
                    <h2 className="m-0 c-white">{val.Type}</h2>
                    <div className="price c-white">
                        <span>$</span>{val.Price}
                    </div>
                </div>

                <ul className="m-0" attr={val.id}>
                    <li>
                        <i className="fa-solid fa-check fa-fw yes"> </i>

                        <span>{val.Lessons.text}</span>
                        <i className="fa-solid fa-circle-info help"></i>
                    </li>
                    <li>
                        <i className="fa-solid fa-check fa-fw yes"> </i>
                        <span>{val.Board.text}</span>
                        <i className="fa-solid fa-circle-info help"></i>
                    </li> <li>
                        <i className="fa-solid fa-check fa-fw yes"> </i>
                        <span>{val.Noads.text}</span>
                        <i className="fa-solid fa-circle-info help"></i>
                    </li> <li>
                        <i className={checkAssigenment}></i>
                        <span>{val.Assignments.text}</span>
                        <i className="fa-solid fa-circle-info help"></i>
                    </li> <li>
                        <i className={checkPrize}></i>

                        <span>{val.Prize.text}</span>
                        <i className="fa-solid fa-circle-info help"></i>
                    </li> <li>
                        <i className={checkCertificate}></i>
                        <span>{val.Certificate.text}</span>
                        <i className="fa-solid fa-circle-info help"></i>
                    </li> <li>
                        <i className={checkHosting}></i>
                        <span>{val.Hosting.text}</span>
                        <i className="fa-solid fa-circle-info help"></i>
                    </li> <li>
                        <i className={checkBage}></i>

                        <span>{val.Badge.text}</span>
                        <i className="fa-solid fa-circle-info help"></i>
                    </li>
                </ul>

                <a href="/#" className="btn-shape bg-green c-white w-fit d-block mt-15">Join</a>

            </div>

        </>
        );
    })


    return (
        <>
            <PageHead>Plans</PageHead>
            <div className="plans-page d-grid gap-20 ml-20 mr-20 mb-25">

                {PlansData}
            </div>
        </>)
}

export default Plans
