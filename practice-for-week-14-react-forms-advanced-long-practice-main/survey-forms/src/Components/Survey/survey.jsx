import { useState } from "react"

const Survey = () => {

    const [user, setUser] = useState({
        question1: "",
        question2: "",
        question3: "",
    })

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
        <h1>Sample Survey</h1>
        <form className="sample-form" onSubmit={handleSubmit}>

            <div>
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
            </div>

        </form>


    </>
        
    )
}
export default Survey;