import "./SubjectHeader.css";

function SubjectHeader({
  subjectName = "English",
  totalChapters = 10,
  completedChapters = 0,
  progress = 0,
}) {
  return (
    <div className="subject-header">
    <button className="back-btn">← Back</button>

    <div className="subject-title">
        <h1>English</h1>
    </div>

    <div className="subject-description">
        Master the subject one chapter at a time.
    </div>

    <div className="subject-stat-card">
        <span className="stat-value">10</span>
        <span className="stat-label">Chapters</span>
    </div>

    <div className="subject-stat-card">
        <span className="stat-value">0</span>
        <span className="stat-label">Completed</span>
    </div>

    <div className="subject-stat-card">
        <span className="stat-value">0%</span>
        <span className="stat-label">Progress</span>
    </div>
</div>
  );
}

export default SubjectHeader;