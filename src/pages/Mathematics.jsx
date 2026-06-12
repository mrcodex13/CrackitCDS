import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar/Navbar";
import "../style/page.css";
import SideChapterBar from "../components/subjectPage/side_chapterbar/side_chapterbar";
import PreviewTopic from "../components/subjectPage/previewTopic/previewTopic";
import StatsCards from "../components/subjectPage/StatsCards/StatsCards";
import FullScreenBtn from "../components/layout/FullScreenBtn/FullScreenBtn";
import FloatingChatButton from "../components/subjectPage/FloatingChatButton/FloatingChatButton";
import { mathChapters } from "../data/chaptersData";

function Mathematics() {
  const navigate = useNavigate();
  const [selectedChapter, setSelectedChapter] = useState(mathChapters[0]);

  const completed = mathChapters.filter((c) => c.completed).length;
  const progress  = Math.round((completed / mathChapters.length) * 100);

  return (
    <>
      <Navbar />

      <div className="subject-layout">

        {/* ── LEFT SIDEBAR ──────────────────────────── */}
        <aside className="subject-left">

          <div className="subject-header-compact">
            <div className="subject-header-top">
              <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
              <h1 className="subject-name-compact">Mathematics</h1>
            </div>
            <div className="subject-stats-row">
              <div className="stat-chip">
                <span className="stat-chip-value">{mathChapters.length}</span>
                <span className="stat-chip-label">Chapters</span>
              </div>
              <div className="stat-chip">
                <span className="stat-chip-value">{completed}</span>
                <span className="stat-chip-label">Done</span>
              </div>
              <div className="stat-chip">
                <span className="stat-chip-value">{progress}%</span>
                <span className="stat-chip-label">Progress</span>
              </div>
            </div>
          </div>

          <div className="subject-search">
            <input
              type="text"
              className="search-input"
              placeholder="🔍 Search chapters…"
              style={{ width: "100%", boxSizing: "border-box" }}
            />
          </div>

          <div className="subject-chapter-list">
            <SideChapterBar
              chapters={mathChapters}
              selectedId={selectedChapter.id}
              onSelect={setSelectedChapter}
            />
          </div>

        </aside>

        {/* ── RIGHT MAIN ────────────────────────────── */}
        <main className="subject-right">
          {/* Stats strip just above the preview panel */}
          <div className="subject-stats-strip">
            <StatsCards />
          </div>
          <PreviewTopic chapter={selectedChapter} />
        </main>

      </div>

      <FullScreenBtn />
      <FloatingChatButton chapterTitle={selectedChapter.title} />
    </>
  );
}

export default Mathematics;