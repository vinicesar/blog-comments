export default function Input({type , label, email, setEmail, comentario, setComentario}){
    let id = ""
    function newId(){
       return id = Math.floor(Math.random() * 1000000)
    }
    newId()
  if(type==="textarea"){  return(
    <>
        <label htmlFor={id}>{label}</label>
        <br/>
        <textarea id={id} rows="8" cols="45" value={comentario} onChange={(e)=> setComentario(e.target.value)}/>
    </>
    )}else if(type === "text") {
    return(<>
        <label htmlFor={id}>{label}</label>
        <br/>
        <input type={type} id={id} value={email} onChange={(e)=> setEmail(e.target.value)}/>
        </>)
    }
}