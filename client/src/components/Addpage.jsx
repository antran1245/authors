import Form from "./Form";
import LinkInfo from "./LinkInfo";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Addpage() {
    const navigate = useNavigate();

    const addAuthor = async(form) => {
        await axios.post('http://localhost:8000/api/authors/new', form)
        navigate('/')
    }

    return(
        <div>
            <LinkInfo text="Add a new author:" path="/" link="Home"/>
            <Form onSubmit={addAuthor}/>
        </div>
    )
}