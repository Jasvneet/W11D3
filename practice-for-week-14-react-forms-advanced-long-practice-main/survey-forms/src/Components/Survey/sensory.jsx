import { Link } from "react-router-dom"

const Sensory = () => {
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

    return (
        
    )
}

export default Sensory;