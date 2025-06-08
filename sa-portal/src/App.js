import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HomePage from "./pages/HomePage";
import MeetTheTeam from "./pages/MeetTheTeamPage";
import ServicesPage from "./pages/ServicesPage";
import ScholarshipPage from "./pages/ScholarshipPage";
import SACoursesPage from "./pages/SACoursesPage";
import NoticesOnRulesPage from "./pages/NoticesOnRulesPage";
import FormsPage from "./pages/FormsPage";
import SACPage from "./pages/SACPage";
import SACMinutesPage from "./pages/SACMinutesPage";
import StudentsGymkhanaCouncilPage from "./pages/StudentsGymkhanaCouncilPage";
import StudentsAffairsBoard from "./pages/StudentsAffairsBoard";
import CulturalBoardPage from "./pages/CulturalBoardPage";
import HostelAffairsBoardPage from "./pages/HostelAffairsBoardPage";
import SportsBoardPage from "./pages/SportsBoardPage";
import TechnicalBoardPage from "./pages/TechnicalBoardPage";
import WelfareBoardPage from "./pages/WelfareBoardPage";
import WebCommitteePage from "./pages/WebCommitteePage";
import StudentsCampusWellbeingPage from "./pages/StudentsCampusWellbeingPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/meet-the-team" element={<MeetTheTeam />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/scholarships" element={<ScholarshipPage />} />
            <Route path="/sa-courses" element={<SACoursesPage />} />
            <Route path="/notices-on-rules" element={<NoticesOnRulesPage />} />
            <Route path="/forms" element={<FormsPage />} />
            <Route path="/sac" element={<SACPage />} />
            <Route path="/sac-minutes" element={<SACMinutesPage />} />
            <Route path="/sgc" element={<StudentsGymkhanaCouncilPage />} />

            {/* Students' Affairs Boards */}
            <Route path="/sab">
              <Route index element={<StudentsAffairsBoard />} />
              <Route path="cultural-board" element={<CulturalBoardPage />} />
              <Route
                path="hostel-affairs-board"
                element={<HostelAffairsBoardPage />}
              />
              <Route path="sports-board" element={<SportsBoardPage />} />
              <Route path="technical-board" element={<TechnicalBoardPage />} />
              <Route path="welfare-board" element={<WelfareBoardPage />} />
              <Route path="web-committee" element={<WebCommitteePage />} />
            </Route>

            <Route
              path="/students-campus-wellbeing"
              element={<StudentsCampusWellbeingPage />}
            />
            {/* <Route path="" element={}/> */}
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
