import React from 'react'

const Dashboard = () => {
    return (
        <div>
            <iframe
                style={{
                    background: "#F1F5F4",
                    border: "none",
                    borderRadius: 2,
                    boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
                    width: "100vw",
                    height: "100vh"
                }}
                src="https://charts.mongodb.com/charts-project-0-nnvpp/embed/dashboards?id=6554b4bc-a77b-471a-8e52-3e14aea559ab&theme=light&autoRefresh=true&maxDataAge=3600&showTitleAndDesc=false&scalingWidth=fixed&scalingHeight=fixed"
            />

        </div>
    )
}

export default Dashboard