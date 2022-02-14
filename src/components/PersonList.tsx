import {Names} from './person.types'
type PersonListProp={
    personsList:Names[]
}

const PersonList=(props:PersonListProp)=> {
    return (
      <>
         {
         props.personsList.map((name)=>(
          <h2>
          {name.first} {name.last}
         </h2>
         ))} 
         
      </>
    );
  }
  
  export default PersonList;