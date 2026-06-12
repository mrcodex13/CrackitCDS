import "./ActionButtons.css";

function ActionButtons() {
    const buttons = [
        { label: "📝 Practice", id: "action-practice" },
        { label: "📖 PYQs", id: "action-pyq" },
        { label: "🤖 AI Chat", id: "action-ai" },
        { label: "📊 Analysis", id: "action-analysis" },
    ];

    return (
        <div className="action-buttons-bar">
            {buttons.map((btn) => (
                <button key={btn.id} id={btn.id} className="action-btn">
                    {btn.label}
                </button>
            ))}
        </div>
    );
}

export default ActionButtons;
