import React from 'react'
import './Avatar.css'

/* export default function Avatar () { é mais indicado usar este método pois se ela quebrar vou ter o nome da função onde está quebrando
  return () 
  ou pode utilizar, ao utilizar const Avatar = (props) => () é necessário inserir no final export default  */

/* export default function Avatar () {
  return (} */

  /* "user__thumb user__thumb--hasNew" */

const placeHolder = 'https://semeandoafeto.imadel.org.br/packages/trustir/exclusiva/img/user_placeholder.png'

const Avatar = ({tamanho = placeHolder, image = 'pequeno', selecionavel }) => {
  const [ativo, setAtivo] = React.useState(false)
  
  function controlaClick() {
    if (selecionavel) {
      setAtivo(!ativo)
    }
    
  }

  return (
    <button 
      type="button" 
      className={`user__thumb ${ativo ? "user__thumb--hasNew" : ''}`} 
      data-tamanho={tamanho}
      onClick={() => controlaClick()}
  >
      <img src={image} alt="" />
    </button>
  );
}

export default Avatar




