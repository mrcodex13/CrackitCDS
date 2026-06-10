import Navbar from "../components/layout/Navbar/Navbar";
import ProgressBar from "../components/Dashboard/ProgressBar/ProgressBar";
import Clock from "../components/Dashboard/Clock/Clock";
import Quotes from "../components/Dashboard/Quotes/Quotes";
import DashboardButtons from "../components/Dashboard/DashboardButtons/DashboardButtons";
import CheckList from "../components/Dashboard/CheckList/CheckList";
import SubjectButtons from "../components/Dashboard/SubjectButtons/SubjectButtons";
import FullScreenBtn from "../components/layout/FullScreenBtn/FullScreenBtn";

/**
 * Home dashboard — single-screen bento grid layout.
 * Grid positions are defined in App.css (.progress-area, .clock-area, etc.)
 */
function Home() {
  return (
    <div className="app-wrapper">
      <Navbar />

      <main className="bento-container animate-in">
        <div className="bento-grid">

          {/* Row 1–2, Col 1–2: Overall mastery progress card */}
          <div className="bento-item progress-area">
            <ProgressBar />
          </div>

          {/* Row 3–4, Col 1–3: Subject shortcut buttons */}
          <div className="bento-item subjects-area">
            <SubjectButtons />
          </div>

          {/* Row 1, Col 3: Exam countdown clock */}
          <div className="bento-item clock-area">
            <Clock />
          </div>

          {/* Row 2, Col 3: Analysis / Streak / PlanningBot tiles */}
          <div className="bento-item actions-area">
            <DashboardButtons />
          </div>

          {/* Row 1, Col 4: Motivational quote */}
          <div className="bento-item quotes-area">
            <Quotes />
          </div>

          {/* Row 2–3, Col 4: Today's task checklist */}
          <div className="bento-item checklist-area">
            <CheckList />
          </div>

          {/* Row 4, Col 4: Fullscreen toggle */}
          <div className="bento-item fullscreen-area">
            <FullScreenBtn />
          </div>

        </div>
      </main>
    </div>
  );
}

export default Home;