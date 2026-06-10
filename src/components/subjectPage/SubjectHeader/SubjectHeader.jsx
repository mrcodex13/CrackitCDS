import "./SubjectHeader.css";
import { useNavigate } from "react-router-dom";

function SubjectHeader({
 subjectName,
  totalChapters,
  completedChapters,
  progress,
}) {
  const navigate = useNavigate();

  return (
    <div className="subject-header">
      <button
        className="back-btn"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <div className="subject-title">
        <h1>{subjectName}</h1>
      </div>

      <div className="subject-description">
        Master the subject one chapter at a time.
      </div>

      <div className="subject-stat-card">
        <span className="stat-value">{totalChapters}</span>
        <span className="stat-label">Chapters</span>
      </div>

      <div className="subject-stat-card">
        <span className="stat-value">{completedChapters}</span>
        <span className="stat-label">Completed</span>
      </div>

      <div className="subject-stat-card">
        <span className="stat-value">{progress}%</span>
        <span className="stat-label">Progress</span>
      </div>
    </div>
  );
}

export default SubjectHeader;