import './App.css';
import { Container } from './Components/index';
import { Sidebar } from "./parts/index"
import { Content } from "./parts/index"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Head } from './parts/index';
import { Dashboard } from "./pages/index"
import { Settings } from "./pages/index"
import { Profile } from "./pages/index"
import { Courses } from "./pages/index"
import { Projects } from "./pages/index"
import { Files } from "./pages/index"
import { Friends } from "./pages/index"
import { Plans } from "./pages/index"




function App() {
  return (
    <>
      <Router>
        <Container>
          <Sidebar />
          <Content>
            <Head />
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route exact path="/settings" element={<Settings />} />
              <Route exact path="/profile" element={<Profile />} />
              <Route exact path="/projects" element={<Projects />} />
              <Route exact path="/files" element={<Files />} />
              <Route exact path="/courses" element={<Courses />} />
              <Route exact path="/friends" element={<Friends />} />
              <Route exact path="/plans" element={<Plans />} />



            </Routes>
          </Content>
        </Container>



      </Router>

    </>
  )
}

export default App;
