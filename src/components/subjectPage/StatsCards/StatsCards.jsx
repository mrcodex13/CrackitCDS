import "./StatsCards.css";

function StatsCards() {
    const stats = [
        { title: "Topics", value: "48" },
        { title: "Accuracy", value: "85%" },
        { title: "Streak", value: "7 Days" },
        { title: "Study Time", value: "12 hrs" },
    ];

    return (
        <div className="stats-cards">
            {stats.map((stat, index) => (
                <div className="stats-card" key={index}>
                    <h3>{stat.value}</h3>
                    <p>{stat.title}</p>
                </div>
            ))}
        </div>
    );
}

export default StatsCards;