import { useState } from "react"
import Sample from '../../_assets/sample.json'

const SampleSurvey = () => {
    const [user, setUser] = useState({})

    const handleChange = (field) => {
        return (e) => {
            setUser({...user, [field]: e.target.value})
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
    <>
        <h1>{Sample.name}</h1>
        <p>{Sample.description}</p>
        <p>{Sample.instructions}</p>

        <form className="sample-form" onSubmit={handleSubmit}>
            {Sample.questions.map((question) => {
                <h2>{question.stem}</h2>
                 {question.type === 'mcq' ? 
                    (question.options.map((option) => {
                        <> 
                        <label>{option.text} 
                            <input type="radio" name={question.stem} value={option.value} onChange={handleChange(question.stem)}>
                            </input>
                        </label>
                        </>
                    }) : ('')
                }
            }

            {/* <div>
            <label> Question 1: 
                <input type="text" name="question1" value={user.question1} onChange={handleChange('question1')}/>
            </label>
            </div>

            <br />

            <div>
            <label> Question 2:
                <textarea name="question2" value={user.question2} onChange={handleChange('question2')}/>
            </label>
            </div>

            <br />

            <div>
            <label className="multiple-choice"> Question 3:
                <input type="radio" name="question3" value={user.question3} onChange={handleChange('question3')}/>
                <input type="radio" name="question3" value={user.question3} onChange={handleChange('question3')}/>
                <input type="radio" name="question3" value={user.question3} onChange={handleChange('question3')}/>
                <input type="radio" name="question3" value={user.question3} onChange={handleChange('question3')}/>
                <input type="radio" name="question3" value={user.question3} onChange={handleChange('question3')}/>
            </label>
            </div>

            <br />

            <div>
                <input type="submit" />
            </div> */}

        </form>


    </>
        
    )
}
export default SampleSurvey;