import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LinkInfo from "./LinkInfo";
import axios from 'axios';
import '../App.css';
import ActionButtons from "./ActionButtons";

export default () => {
    const [list, setList] = useState([]);
    const [refresh, setRefresh] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        const axiosCall = async() => {
            const res = await axios.get('http://localhost:8000/api/authors');
            setList(res.data)
        }
        axiosCall()
        .catch(err => console.log(err))
    }, [])

    return(
        <div>
            <LinkInfo text="We have quotes by:" path="/new" link="Add an author"/>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions available</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item, i) => {
                        return <tr key={i}>
                            <td>{item.name}</td>
                            <td>
                                <ActionButtons _id={item._id} list={list} setList={setList}/>
                            </td>
                        </tr>
                    })
                    }
                </tbody>
            </table>
        </div>
    );
}