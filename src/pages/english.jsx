import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar/Navbar";
import "../style/page.css";
import SideChapterBar from "../components/subjectPage/side_chapterbar/side_chapterbar";
import PreviewTopic from "../components/subjectPage/previewTopic/previewTopic";
import FullScreenBtn from "../components/layout/FullScreenBtn/FullScreenBtn";
import FloatingChatButton from "../components/subjectPage/FloatingChatButton/FloatingChatButton";
import { englishChapters } from "../data/chaptersData";

function English() {
  const navigate = useNavigate();
  const [selectedChapter, setSelectedChapter] = useState(englishChapters[0]);

  const completed = englishChapters.filter((c) => c.completed).length;
  const progress  = Math.round((completed / englishChapters.length) * 100);

  return (
    <>
      <Navbar />

      <div className="subject-layout">

        {/* ── LEFT SIDEBAR ──────────────────────────── */}
        <aside className="subject-left">

          {/* Compact header card */}
          <div className="subject-header-compact">
            <div className="subject-header-top">
              <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
              <h1 className="subject-name-compact">English</h1>
            </div>
            <div className="subject-stats-row">
              <div className="stat-chip">
                <span className="stat-chip-value">{englishChapters.length}</span>
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

          {/* Search */}
          <div className="subject-search">
            <input
              type="text"
              className="search-input"
              placeholder="🔍 Search chapters…"
              style={{ width: "100%", boxSizing: "border-box" }}
            />
          </div>

          {/* Chapter list — fills remaining sidebar height */}
          <div className="subject-chapter-list">
            <SideChapterBar
              chapters={englishChapters}
              selectedId={selectedChapter.id}
              onSelect={setSelectedChapter}
            />
          </div>

        </aside>

        {/* ── RIGHT MAIN ────────────────────────────── */}
        <main className="subject-right">
          <PreviewTopic chapter={selectedChapter} />
        </main>

      </div>

      <FullScreenBtn />
      <FloatingChatButton chapterTitle={selectedChapter.title} />
    </>
  );
}

export default English;