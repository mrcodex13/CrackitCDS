import "./side_chapterbar.css";

function SideChapterBar() {
    const chapters = [
    { id: 1, title: "Chapter 1" },
    { id: 2, title: "Chapter 2" },
    { id: 3, title: "Chapter 3" },
    { id: 4, title: "Chapter 4" },
    { id: 5, title: "Chapter 5" },
    { id: 6, title: "Chapter 6" },
    { id: 7, title: "Chapter 7" },
    { id: 8, title: "Chapter 8" },
    { id: 9, title: "Chapter 9" },
    { id: 10, title: "Chapter 10" },
];

    return (
        <div className="chapter-sidebar">
            <h3>Chapters</h3>

            <div className="chapter-list">
                {chapters.map((chapter) => (
                    <button
                        key={chapter.id}
                        className={`chapter-item ${
                            chapter.completed ? "completed" : ""
                        }`}
                    >
                        <span>{chapter.title}</span>

                        {chapter.completed && (
                            <span className="chapter-status">
                                ✓
                            </span>
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default SideChapterBar;