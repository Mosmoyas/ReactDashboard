import './App.css';
import { Container } from './Components/index';
import { Sidebar } from "./parts/index"
import { Content } from "./parts/index"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Head } from './parts/index';
import { Dashboard } from "./pages/index"
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
              <Route exact path="/settings" element={<Plans />} />
              <Route exact path="/profile" element={<Dashboard />} />
              <Route exact path="/projects" element={<Dashboard />} />
              <Route exact path="/friends" element={<Dashboard />} />
              <Route exact path="/courses" element={<Dashboard />} />
              <Route exact path="/files" element={<Dashboard />} />
              <Route exact path="/plans" element={<Plans />} />



            </Routes>
          </Content>
        </Container>



      </Router>

    </>
  )
}

export default App;
