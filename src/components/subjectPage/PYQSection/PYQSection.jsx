import "./PYQSection.css";

function PYQSection() {
    const pyqs = [
        { id: 1, question: "Previous Year Question 1 from 2023 paper", year: "2023" },
        { id: 2, question: "Previous Year Question 2 from 2022 paper", year: "2022" },
        { id: 3, question: "Previous Year Question 3 from 2021 paper", year: "2021" },
        { id: 4, question: "Previous Year Question 4 from 2020 paper", year: "2020" },
    ];

    return (
        <div className="pyq-section">
            <h2>📜 Previous Year Questions</h2>
            <div className="pyq-list">
                {pyqs.map((q) => (
                    <button key={q.id} className="pyq-item">
                        <span>{q.question}</span>
                        <span className="pyq-year">{q.year}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}

export default PYQSection;
