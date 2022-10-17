import './Dashboard.css'
import QuickDraft from './Widgets/Widgets'
import { Welcome } from './Widgets/Widgets'
import { YearlyStats } from './Widgets/Widgets'
import { PageHead } from "../../Components/index"


const Dashboard = (props) => {
    return (
        <>
            <PageHead>Dashboard</PageHead>
            <div className="wrapper d-grid gap-20 ml-20 mr-20 mb-25">
                <Welcome />
                <QuickDraft />
                <YearlyStats />

            </div>
        </>)
}

export default Dashboard