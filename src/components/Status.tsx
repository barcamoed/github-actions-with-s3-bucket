
type StatusProp={
    status:'error'|'success'|'loading'
}
  
  const Status=(props:StatusProp)=> {
      let message;
    if(props.status=='error'){
        message='There is some error'
    }
    if(props.status=='success'){
        message='Successfully updated'
    }
    if(props.status=='loading'){
        message='Loading...'
    }

    return (
      <>
          <h2>
          Status: {message}
          </h2>
      </>
    );
  }
  
  export default Status;
  