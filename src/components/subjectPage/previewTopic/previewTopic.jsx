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

            <div className="preview-topics">
                <h3>Topics Covered</h3>

                <ul>
                    <li>Topic 1</li>
                    <li>Topic 2</li>
                    <li>Topic 3</li>
                </ul>
            </div>

            <div className="preview-footer">
                <span className="preview-duration">
                    ⏱ Estimated Time: 30 mins
                </span>

                <button className="preview-btn">
                    Start Learning
                </button>
            </div>
        </div>
    );
}

export default PreviewTopic;