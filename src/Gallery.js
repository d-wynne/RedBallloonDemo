import React, {useState, useEffect} from "react"
import Card from "./Card.js"
import "./Gallery.css"

const Gallery = () => {
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch("https://run.mocky.io/v3/3cbadbe0-009c-4239-ac4f-e52068d2cd48")
        .then((response) => response.json())
        .then((data) => {
            // console.log(data)
            setPosts(data)
            setIsLoading(false)
        })
        .catch((err) => {
            console.log(err.message)
        })
    }, [])

    if (isLoading) {
        return (
            <p style={{textAlign: "center"}}>Loading...</p>
        )
    }

    console.log("posts:", posts)

    return (
        <div id="postings-gallery">
            <ul>
                {posts["data"].map((v, i) => {
                    return (
                    <li key={i}>
                        <Card post={v}/>
                    </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Gallery