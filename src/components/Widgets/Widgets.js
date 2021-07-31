import { FiberManualRecord, Info } from '@material-ui/icons'

import React from 'react'
import "./Widgets.css"

function Widgets() {
    const newsArticle = (listOfArticles => (listOfArticles.map
        ( article =>(
            <div className="widgets__article">
                <div className="widgets__articleLeft">
                    <FiberManualRecord/>
                </div>
                <div className="widgets__articleRight">
                    <h4>{article?.heading}</h4>
                    <p>{article?.subtitle}</p>
                </div>
            </div>
            )
        )
    ));

    const listOfArticles = [
        {heading:"Top 5 React Libraries" , subtitle:"All developers should use them !"},
        {heading:"Top 5 React Libraries" , subtitle:"All developers should use them !"},
        {heading:"Top 5 React Libraries" , subtitle:"All developers should use them !"},
        {heading:"Top 5 React Libraries" , subtitle:"All developers should use them !"},
    ]
    
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>Linkedin News</h2>
                <Info />
            </div>
            {newsArticle(listOfArticles)}
        </div>
    )
}

export default Widgets
