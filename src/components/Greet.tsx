
type GreetProp={
  name:string,
  messageCount:number,
  isLoggedIn:boolean
}

const Greet=(props:GreetProp)=> {
  return (
    <>
        <h2>
        {
        props.isLoggedIn?
        `Welcome ${props.name}! 
        ${props.messageCount} unread messages` :
        'Welcome Guest'
        }
        </h2>
    </>
  );
}

export default Greet;
