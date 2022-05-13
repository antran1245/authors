import { Link } from "react-router-dom";

export default (props) => {
    const {path, link, text} = props;
    return(
        <>
            <Link to={`${path}`}>{link}</Link>
            <p className="purple-text">{text}</p>
        </>
    );
}