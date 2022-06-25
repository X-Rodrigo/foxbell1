import {useState} from 'react'
import "./styles.css"
import Logo from "../img/foxbel-music@3x.png"
import Cerrar from "../img/cerrar.png"
const Menu = ({menuresponsive, setMenuResponsive}) => {

    //estado para activar el boton al hacer click 
    const [activatebutton, setActivateButton] = useState("")
    const handleClickCerrar=(e)=>{
        e.preventDefault()
        setMenuResponsive(false)
    }
  return (
    <div className={menuresponsive? 'menu-container-resp':'menu-container'}>
        <div className='menu-close-resp-container'>
            <img 
                onClick={handleClickCerrar} 
                className='menu-close-resp' 
                src={Cerrar} alt='imagen de cerrar' 
            />
        </div>
        <div className='menu-icon-container'>
            <img className='menu-icon' src={Logo} alt='imagen de Foxbel Music'/>
        </div>
        <ul className='list-container'>
            <li className='menu-title'>Mi librería</li>
            <li 
                className={activatebutton === "Recientes" ?'menu-options active':'menu-options'} >
                <a 
                    className='menu-options-name' 
                    href='hola'
                    onClick={(e)=>{//Condicionar el estilo al clickear el boton
                        setActivateButton("Recientes")
                        e.preventDefault()
                    }}
                >
                    Recientes
                </a>
            </li>
            <li 
                className={activatebutton === "Artistas" ?'menu-options active':'menu-options'} 
            >
                <a 
                    className='menu-options-name' 
                    href='#hola'
                    onClick={(e)=>{//Condicionar el estilo al clickear el boton
                        setActivateButton("Artistas")
                        e.preventDefault()
                    }}
                >
                    Artistas
                </a>
            </li>
            <li
                className={activatebutton === "Álbums" ?'menu-options active':'menu-options'}
            >
                <a 
                    className='menu-options-name' 
                    href='#hola'
                    onClick={(e)=>{//Condicionar el estilo al clickear el boton
                        setActivateButton("Álbums")
                        e.preventDefault()
                    }}
                >
                    Álbums
                </a>
            </li>
            <li 
                className={activatebutton === "Canciones" ?'menu-options active':'menu-options'}
            >
                <a 
                    className='menu-options-name' 
                    href='#hola'
                    onClick={(e)=>{//Condicionar el estilo al clickear el boton
                        setActivateButton("Canciones")
                        e.preventDefault()
                    }}
                >
                    Canciones
                </a>
            </li>
            <li
                className={activatebutton === "Estaciones" ?'menu-options active':'menu-options'}
            >
                <a 
                    className='menu-options-name' 
                    href='#hola'
                    onClick={(e)=>{//Condicionar el estilo al clickear el boton
                        setActivateButton("Estaciones")
                        e.preventDefault()
                    }}
                >
                    Estaciones
                </a>
            </li>
        </ul>
        <ul className='list-container'>
            <li className='menu-title'>PlayList</li>
            <li 
                className={activatebutton === "Metal" ?'menu-options active':'menu-options'}
            >
                <a 
                    className='menu-options-name' 
                    href='#hola'
                    onClick={(e)=>{//Condicionar el estilo al clickear el boton
                        setActivateButton("Metal")
                        e.preventDefault()
                    }}
                >
                    Metal
                </a>
            </li>
            <li 
                className={activatebutton === "Para bailar" ?'menu-options active':'menu-options'}
            >
                <a 
                    className='menu-options-name' 
                    href='#hola'
                    onClick={(e)=>{//Condicionar el estilo al clickear el boton
                        setActivateButton("Para bailar")
                        e.preventDefault()
                    }}
                >
                    Para bailar
                </a>
            </li>
            <li 
                className={activatebutton === "Rock 90s" ?'menu-options active':'menu-options'}
            >
                <a 
                    className='menu-options-name' 
                    href='#hola'
                    onClick={(e)=>{//Condicionar el estilo al clickear el boton
                        setActivateButton("Rock 90s")
                        e.preventDefault()
                    }}
                >
                    Rock 90s
                </a>
            </li>
            <li 
                className={activatebutton === "Baladas" ?'menu-options active':'menu-options'}
            >
                <a 
                    className='menu-options-name' 
                    href='#hola'
                    onClick={(e)=>{//Condicionar el estilo al clickear el boton
                        setActivateButton("Baladas")
                        e.preventDefault()
                    }}
                >
                    Baladas
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Menu