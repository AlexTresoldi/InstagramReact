import React from "react"

import "./css/normalize.css"
import "./css/main.css"
import "./css/fontawesome.min.css"

import { Stories, Topbar, Feed, Drawer } from "./components"

function App() {
  const [drawerAberto, setDrawerAberto] = React.useState(false)
  const [usuarios, setUsuarios] = React.useState([])

  const pegaStories = users => users.flatMap(({ stories }) => stories)

  React.useEffect(() => {
    fetch("https://624c9312c172b69d69274ae4.mockapi.io/api/v1/users")
      .then(response => response.json())
      .then(resposta => {
        console.log("Passei por aqui")
        setUsuarios(resposta)
      })
    // executa o useEffect apenas 1 vêz
  }, [])

  return (
    <React.Fragment>
      <Drawer aberto={drawerAberto} fecharChat={setDrawerAberto} />

      <Topbar abrirChat={setDrawerAberto} />

      {usuarios.length === 0 ? (
        <h2> Carregando... </h2>
      ) : (
        <React.Fragment>
          <Stories dados={pegaStories(usuarios)} />

          <Feed />
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default App
