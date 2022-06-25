import { useState } from 'react'
import Content from '../components/contenido/Content'
import Menu from "../components/menu/Menu"
import Player from '../components/reproductor/Player'
import "./styles.css"
const Inicio = () => {
  const [idcancion, setIdCancion] = useState(117797212);
  const [datosparacontent, setDatosParaContent] = useState([]);
  const [arrayid, setArrayId] = useState("")
  const [ arrayindex, setArrayIndex] = useState("")
  const [menuresponsive, setMenuResponsive] = useState(false)
  const [pista, setPista] = useState(false)
  const [cambiarboton, setcambiarboton] = useState(false)
  return (
    <div className='inicio-container'>
      <div className='menu-content-container'>
        <Menu
          menuresponsive={menuresponsive}
          setMenuResponsive={setMenuResponsive} 
        />
        <Content
          setId={setIdCancion}
          datosparacontent={datosparacontent}
          setArrayId={setArrayId}
          setArrayIndex={setArrayIndex}
          menuresponsive={menuresponsive}
          setMenuResponsive={setMenuResponsive}
          pista={pista}
          setcambiarboton={setcambiarboton}
        />
      </div>
      <div className='player-container'>
        <Player
          Id={idcancion}
          setId={setIdCancion}
          setDatosParaContent={setDatosParaContent}
          arrayid={arrayid}
          arrayindex={arrayindex}
          pista={pista}
          setPista={setPista}
          cambiarboton={cambiarboton}
          setcambiarboton={setcambiarboton}

        />
      </div>
    </div>
  )
}

export default Inicio