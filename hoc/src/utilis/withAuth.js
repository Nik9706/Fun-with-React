const withAuth=(Component)=>{
    const isAuthenticated=true
    return function (props){
        if (isAuthenticated){
              return <Component{...props}/>

        }
  else {
    return <p>you do not have the access Please login to access </p>
  }
    
}}

export default withAuth