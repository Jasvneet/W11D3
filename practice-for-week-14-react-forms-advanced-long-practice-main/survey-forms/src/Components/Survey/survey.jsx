import { useState } from "react"
import Sample from '../../_assets/sample.json'
import Question from "./question"

const SampleSurvey = () => {
   

    

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
    <>
    <div className="sample-headings">
        <h1>{Sample.name}</h1>
        <h3>{Sample.description}</h3>
        <h3>{Sample.instructions}</h3>


    </div>
       
        <form className="sample-form" onSubmit={handleSubmit}>
            {Sample.questions.map((question) => (
                
              <Question 
                key={question.stem}
                question={question}
                />
            ))}

           <div className="submit-button">

            <input type="submit" />
           </div>

        </form>


    </>
        
    )
}
export default SampleSurvey;