import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Form(props) {
    const {text} = props;
    const [name, setName] = useState(text);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({name})
    }

    const cancel = () => {
        navigate('/');
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input type="text" onChange={(e) => setName(e.target.value)} defaultValue={text}/>
                </div>
                <div className="button-bar">
                    <input type="button" onClick={cancel} value={"Cancel"}/>
                    <input type="submit" value={"Submit"}/>
                </div>
            </form>
        </div>
    )
}