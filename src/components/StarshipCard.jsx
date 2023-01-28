import { Link } from "react-router-dom";

const StarshipCard = (props) => {
  return ( 
    <>
    <Link to={props.star.name}>{props.star.name}
    </Link>
    </>
   );
}
 
export default StarshipCard;