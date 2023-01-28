import { Link } from "react-router-dom";

const StarshipCard = (props) => {
  // const idx = props.star.url.slice(32,34)
  // console.log(idx)
  return ( 
    <>
    <Link to="/starship">{props.star.name}
    </Link>
    </>
   );
}
 
export default StarshipCard;