import "./PreviewTopic.css";

function PreviewTopic() {
    return (
        <div className="preview-topic">
            <span className="preview-badge">
                Current Chapter
            </span>

            <h2>Chapter 1</h2>

            <p>
                This section provides an overview of the selected chapter.
                You can read concepts, solve practice questions,
                and track your learning progress.
            </p>

            <button className="preview-btn">
                Start Learning
            </button>
        </div>
    );
}

export default PreviewTopic;