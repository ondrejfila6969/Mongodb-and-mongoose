import { Link } from "react-router-dom";

export default function ListLink(props) {
  return (
    <>
        <Link to={`/view-monkey/${props._id}`}>
            <p>{props.name}</p>
        </Link>
    </>
  )
}
