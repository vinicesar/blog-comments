import Button from "./components/Button"
import Input from "./components/input"
import { useState } from "react"
export default function App() {
 
  const [comentarios, setComentarios] = useState([])
  const [email, setEmail] = useState()
  const [comentario, setComentario] = useState()
  function formSub(a){
  a.preventDefault()
  let id = Math.floor(Math.random() * 1000000)
  let date = new Date()
  let fullDate = `data (${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}) hora: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  const coment = {id, email, comentario , fullDate}
  setComentarios(state => {
    const newState = [...state, coment]
    return newState
  })
  setComentario("")
  setEmail("")
  }
  function removeComent(id) {
    setComentarios(state => {
      const newState = state.filter(coment => coment.id !== id)
      return newState
    })
  }
  return(
    <>
    <form style={{
      fontFamily:"sans-serif",
      marginTop:"4rem",
      margin:"0 auto",
      padding:"2rem",
      display:"flex",
      flexDirection:"column",
      gap:".3rem",
      width:"333px",
      backgroundColor:"#bdbdbd",
      borderRadius:"10px",
      

    }}
     onSubmit={formSub}>
      <h2>
        Seção de Comentários
      </h2>
      <Input type="text" label="Email" email={email} setEmail={setEmail} />
      <br/>
      <Input type="textarea" label="Comentarios" comentario={comentario} setComentario={setComentario}/> 
      <br/>
      <Button texto="Enviar comentário"/>
      <div 
      style={{
        padding:".8rem",
        paddingTop:"2rem",
        borderTop:"1px solid grey",
        marginTop:"1rem"
      }} 
      >
        {comentarios[0]? comentarios.map(({id, email, comentario , fullDate}) => (
          <div key={id}>
            <strong>{email}</strong>
            <p>{fullDate}</p> 
            <p>{comentario}</p>
            <button onClick={() => removeComent(id)}>Remover</button>
          </div>
        )): "Seja o primeiro a comentar!"}
      </div>
    </form>
      </>
  )
}