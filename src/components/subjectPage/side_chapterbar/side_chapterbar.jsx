import "./side_chapterbar.css";

function SideChapterBar({ chapters = [], selectedId, onSelect }) {
    return (
        <div className="chapter-sidebar">
            <h3>Chapters</h3>

            <div className="chapter-list">
                {chapters.map((chapter) => (
                    <button
                        key={chapter.id}
                        className={`chapter-item ${chapter.completed ? "completed" : ""} ${chapter.id === selectedId ? "active" : ""}`}
                        onClick={() => onSelect(chapter)}
                    >
                        <span>{chapter.title}</span>
                        {chapter.completed && (
                            <span className="chapter-status">✓</span>
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default SideChapterBar;