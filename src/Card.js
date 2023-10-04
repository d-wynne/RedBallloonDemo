import React from "react"
import "./Card.css"

const Card = ({post}) => {
    const [title, business, location, date, description] = [
        post.title,
        post.business_name,
        post.city + ", " + post.region,
        new Date(post.posted_datetime).toLocaleDateString('en-us', { year:"numeric", month:"long", day:"numeric"}),
        post.job_summary.replaceAll("<p>", "").split("</p>")
    ]

    // console.log(description.slice(0, -1).join("<br />"))
    
    return (
        <div className="card">
            <h1>{title}</h1>
            <h2>{business} - {location} - {date}</h2>
            <div className="job-summary">
                {description.slice(0, -1).map((p) => <p>{p}</p>)}
            </div>
            {/* <p className="job-summary">
                {description.slice(0, -1).join("\n")}
            </p> */}
            ...
        </div>
    )
}

export default Card