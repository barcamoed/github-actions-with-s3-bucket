
import { PersonProp } from "./person.types";
  
  const Greet=(props:PersonProp)=> {
    return (
      <>
          <h2>
          {props.name.first} {props.name.last}
          </h2>
      </>
    );
  }
  
  export default Greet;
  