import LinkInfo from "./LinkInfo";
import Form from "./Form";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default () => {
    const {_id} = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState()

    useEffect(() => {
        const callAxios = async() => {
            const res = await axios.get(`http://localhost:8000/api/authors/${_id}`)
            setName(res.data[0].name)
        }
        callAxios()
        .catch(err => console.log(err))
    }, [])

    const updateAuthor = async(form) => {
        await axios.put(`http://localhost:8000/api/authors/${_id}`, form);
        navigate('/');
    }
    return(
        <div>
            <LinkInfo text="Edit this author" link="Home" path="/"/>
            <Form onSubmit={updateAuthor} text={name}/>
        </div>
    );
}