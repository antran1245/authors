import LinkInfo from "./LinkInfo";
import Form from "./Form";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default () => {
    const {_id} = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState()
    const [error, setError] = useState([])

    useEffect(() => {
        const callAxios = async() => {
            try {
                const res = await axios.get(`http://localhost:8000/api/authors/${_id}`)
                setName(res.data[0].name)
            } catch (err) {
                console(err)
            }
        }
        callAxios()
    }, [])

    const updateAuthor = async(form) => {
        try {
            await axios.put(`http://localhost:8000/api/authors/${_id}`, form);
            navigate('/');
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
            <LinkInfo text="Edit this author" link="Home" path="/"/>
            {error.map((err, i) => <p key={i}>{err}</p>)}
            <Form onSubmit={updateAuthor} text={name}/>
        </div>
    );
}