import { useNavigate } from "react-router-dom"
import axios from "axios";

export default (props) => {
    const navigate = useNavigate();
    
    const edit = () => {
        navigate(`/edit/${props._id}`)
    }
    const delFunction = async() => {
        await axios.delete(`http://localhost:8000/api/authors/${props._id}`)
        props.setList(props.list.filter(item => item._id != props._id))
    }
    return(
        <>
            <button onClick={edit}>Edit</button>
            <button onClick={delFunction}>Delete</button>
        </>
    )
}