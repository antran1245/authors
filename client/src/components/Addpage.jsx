import Form from "./Form";
import LinkInfo from "./LinkInfo";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Addpage() {
    const navigate = useNavigate();
    const [error, setError] = useState([])

    const addAuthor = async(form) => {
        try {
            await axios.post('http://localhost:8000/api/authors/new', form)
            navigate('/')
        } catch (err){
            console.log(err.response.data.errors)
            const errorResponse = err.response.data.errors;
            const errorArr = [];
            for(const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message)
            }
            setError(errorArr);
        }
    }

    return(
        <div>
            <LinkInfo text="Add a new author:" path="/" link="Home"/>
            {error.map((err, i) => <p key={i}>{err}</p>)}
            <Form onSubmit={addAuthor}/>
        </div>
    )
}