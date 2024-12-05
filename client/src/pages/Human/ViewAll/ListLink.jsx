import { Link } from "react-router-dom";

export default function ListLink(props) {
  return (
    <>
        <Link to={`/view-humans/${props._id}`}>
            <p>{props.name}</p>
        </Link>
    </>
  )
}
