import "./PracticeSection.css";

function PracticeSection() {
    const questions = [
        { id: 1, label: "Question 1: Fill in the blank" },
        { id: 2, label: "Question 2: Multiple choice" },
        { id: 3, label: "Question 3: Short answer" },
        { id: 4, label: "Question 4: Match the following" },
    ];

    return (
        <div className="practice-section">
            <h2>🎯 Practice Questions</h2>
            <div className="practice-grid">
                {questions.map((q) => (
                    <button key={q.id} className="practice-card">
                        {q.label}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default PracticeSection;
