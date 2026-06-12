import { useState } from "react";
import "./PreviewTopic.css";

const TABS = [
  { id: "overview", label: "📖 Overview" },
  { id: "notes",    label: "📝 Notes"    },
  { id: "videos",   label: "🎬 Videos"   },
  { id: "pyq",      label: "📜 PYQ"      },
];

/* ── Static placeholder data ─────────────────────── */
const placeholderNotes = [
  { title: "Chapter Summary",    desc: "Concise revision notes for quick recall before the exam." },
  { title: "Key Concepts",       desc: "Core ideas and definitions distilled from the chapter."   },
  { title: "Formula / Rule Sheet", desc: "Quick-reference formulas and grammar rules."             },
  { title: "Mnemonics",          desc: "Memory tricks to remember important facts."               },
];

const placeholderVideos = [
  { title: "Introduction",        duration: "8 min",  thumb: "🎥" },
  { title: "Concept Deep Dive",   duration: "22 min", thumb: "🎥" },
  { title: "Solved Examples",     duration: "15 min", thumb: "🎥" },
  { title: "Previous Year Qs",    duration: "18 min", thumb: "🎥" },
];

const placeholderPYQ = [
  { year: "2023", q: "Select the option that best improves the underlined part of the sentence." },
  { year: "2022", q: "Which of the following sentences is grammatically correct?" },
  { year: "2021", q: "Choose the word closest in meaning to the highlighted word." },
  { year: "2020", q: "Arrange the jumbled words to form a meaningful sentence." },
  { year: "2019", q: "Identify the error in the given sentence, if any." },
];

/* ── Sub-panel renders ────────────────────────────── */
function OverviewPanel({ chapter }) {
  return (
    <>
      <p className="preview-desc">{chapter.description}</p>
      <div className="preview-topics">
        <h3>Topics Covered</h3>
        <ul>
          {chapter.topics.map((topic, i) => (
            <li key={i}>
              <span className="topic-dot">▸</span>
              {topic}
            </li>
          ))}
        </ul>
      </div>
      <div className="preview-footer">
        <span className="preview-duration">⏱ Estimated Time: {chapter.estimatedTime}</span>
        <button className="preview-btn">
          {chapter.completed ? "Revise" : "Start Learning"}
        </button>
      </div>
    </>
  );
}

function NotesPanel() {
  return (
    <div className="tab-grid">
      {placeholderNotes.map((n, i) => (
        <div key={i} className="tab-card tab-card--notes">
          <span className="tab-card-icon">📄</span>
          <div>
            <p className="tab-card-title">{n.title}</p>
            <p className="tab-card-desc">{n.desc}</p>
          </div>
          <span className="tab-card-badge coming-soon">Coming Soon</span>
        </div>
      ))}
    </div>
  );
}

function VideosPanel() {
  return (
    <div className="tab-grid">
      {placeholderVideos.map((v, i) => (
        <div key={i} className="tab-card tab-card--video">
          <div className="video-thumb">{v.thumb}</div>
          <div className="tab-card-body">
            <p className="tab-card-title">{v.title}</p>
            <p className="tab-card-desc">Duration: {v.duration}</p>
          </div>
          <span className="tab-card-badge coming-soon">Coming Soon</span>
        </div>
      ))}
    </div>
  );
}

function PYQPanel() {
  return (
    <div className="pyq-list-inner">
      {placeholderPYQ.map((q, i) => (
        <div key={i} className="pyq-row">
          <span className="pyq-year-badge">{q.year}</span>
          <p className="pyq-question">{q.q}</p>
          <span className="tab-card-badge coming-soon">View</span>
        </div>
      ))}
    </div>
  );
}

/* ── Main Component ───────────────────────────────── */
function PreviewTopic({ chapter }) {
  const [activeTab, setActiveTab] = useState("overview");

  if (!chapter) {
    return (
      <div className="preview-topic preview-topic--empty">
        <p>Select a chapter from the list to begin.</p>
      </div>
    );
  }

  return (
    <div className="preview-topic">
      {/* ── Header ── */}
      <div className="preview-header">
        <div className="preview-header-top">
          <span className={`preview-badge ${chapter.completed ? "preview-badge--done" : ""}`}>
            {chapter.completed ? "✓ Completed" : "Current Chapter"}
          </span>
          <h2>{chapter.title}</h2>
        </div>

        {/* ── Tab bar ── */}
        <div className="preview-tab-bar" role="tablist">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`preview-tab ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Scrollable content area ── */}
      <div className="preview-tab-content">
        {activeTab === "overview" && <OverviewPanel chapter={chapter} />}
        {activeTab === "notes"    && <NotesPanel />}
        {activeTab === "videos"   && <VideosPanel />}
        {activeTab === "pyq"      && <PYQPanel />}
      </div>
    </div>
  );
}

export default PreviewTopic;