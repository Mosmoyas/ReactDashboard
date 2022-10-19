import './Dashboard.css'
import { PageHead } from "../../Components/index"

import QuickDraft from './Widgets/Widgets'
import { Welcome } from './Widgets/Widgets'
import { YearlyStats } from './Widgets/Widgets'
import { Tickets } from './Widgets/Widgets'
import { LatestNews } from './Widgets/Widgets'
import { LatestTasks } from './Widgets/Widgets'
import { TopSearch } from './Widgets/Widgets'
import { LatestUpload } from './Widgets/Widgets'
import { LastProject } from './Widgets/Widgets'
import { Remeinder } from './Widgets/Widgets'
import { LastPost } from './Widgets/Widgets'
import { SocialMedia } from './Widgets/Widgets'
import { ProjectsTable } from './Widgets/Widgets'


const Dashboard = (props) => {
    return (
        <>
            <PageHead>Dashboard</PageHead>
            <div className="wrapper d-grid gap-20 ml-20 mr-20 mb-25">
                <Welcome />
                <QuickDraft />
                <YearlyStats />
                <Tickets />
                <LatestNews />
                <LatestTasks />
                <TopSearch />
                <LatestUpload />
                <LastProject />
                <Remeinder />
                <LastPost />
                <SocialMedia />

            </div>
            <ProjectsTable />

        </>)
}

export default Dashboard