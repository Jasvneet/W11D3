// import Sample from '../../_assets/sample.json'
import { useState } from 'react'

const Question = ({question}) => {
    const [user, setUser] = useState({})

    const handleChange = (field) => {
        return (e) => {
            setUser({...user, [field]: e.target.value})
        }
    }
console.log(question);
    return (
        <>
         <h2 className='question-stem'>{question.stem}</h2>
            {question.type === 'mcq' ? 
           (question.options.map((option) => (
            // console.log(option);
               <> 
               <label>{option.text} 
                   <input type="radio" name={question.stem} value={option.value} onChange={handleChange(question.stem)}/>
                 
               </label>
               </>
           ))) : (
            <textarea 
                name={question.stem}
                onChange={handleChange(question.stem)} />
           )
       }
        
        </>
       

    )
}

export default Question;