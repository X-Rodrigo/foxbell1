import {useState, useEffect} from 'react'
import Menu from "../img/menu.png"

import "./styles.css"
const Content = ({setId,pista, datosparacontent, setArrayId, setArrayIndex,menuresponsive, setMenuResponsive,setcambiarboton}) => {
    const [listacanciones, setListaCanciones] = useState([])
    // const [cargandocanciones, setCargandoCanciones] =useState(true);
    const [buscar, setBuscar ] = useState("")
    useEffect(() => {
        try {
            const llamandoCanciones = async()=>{
                const response = await fetch(`https://api.deezer.com/search?q=track:${buscar}&limit=10`);
                const data = await response.json()
                setListaCanciones(data.data)
                setArrayId(data.data)
            }
            llamandoCanciones()
        } catch (error) {
            console.log(error)
        }
    }, [buscar])

    const handleChangeSearch =(e)=> {
        setBuscar(e.target.value)
    };
    const handleClickTarget =(idCancion,index)=>{
        setId(idCancion)
        setArrayIndex(index)
        pista.pause()
        setcambiarboton(false)
    }
    const handleClickMenuResponsive=()=>{
        setMenuResponsive(!menuresponsive)
    }
  return (
    <div className='content-container'>
        <div className='content-header'>
            <div className='search-container' >
                    <img 
                        onClick={handleClickMenuResponsive} 
                        className={menuresponsive?                                      "menu-ico-responsive":"menu-ico"} 
                        src={Menu} 
                        alt='imagen de menu' 
                    />
                <input 
                    type="text"
                    className='btn-search-content'
                    placeholder='Buscar'
                    onChange={handleChangeSearch}
                    value={buscar} 
                />
                <p className='btn-search-ico'></p>
            </div>
            
            <div className='user-container'>
                <i className='fas fa-user'></i>
                <p>Manuel Z.</p>
            </div>
        </div>
        <div className='content-detail'>
            <div className='content-detail-song'>
                <div className='content-detail-container-img'>
                        <img 
                            className='content-detail-img' 
                            src={datosparacontent.artist?.picture || datosparacontent.album?.cover } 
                            alt="portada de la canción"
                        />
                    <div className='btn-play-img'>
                        <i className="bi bi-play-fill"></i>
                    </div>
                </div>
                <div className='content-detail-desc'>
                    <h2 className='content-detail-desc-title'>
                        {datosparacontent.artist?.name}
                    </h2>
                    <div className='content-detail-desc-subtitles-container'>
                        <p className='content-detail-desc-subtitles-1'>Lo mejor de {datosparacontent.artist?.name}</p>
                        <p className='content-detail-desc-subtitles-2'>321,123 seguidores</p>
                    </div>
                    <p className='content-detail-desc-1'>Adele Laurie Blue Adkins (Tottenham, Londres, Inglaterra, 5 de mayo de 1988), conocida simplemente como Adele, es una cantante, compositora y multinstrumentista británica.8</p>
                    <div className='content-detail-desc-btns'>
                        <button className='btn-content-desc'>Reproducir</button>
                        <button className='btn-content-desc'>Seguir</button>
                        <button className='btn-content-desc-2'>. . .</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='content-results'>
            <h2 className='content-results-title'>Resultados</h2>
            <div className='content-results-cards-container'>
                {
                    listacanciones?.map((song, index)=>{
                        return(
                            <div className='content-results-card' key={song.id}>
                                <img 
                                    onClick={()=>{handleClickTarget(song.id, index)}} className='img-card' 
                                    src={song.album.cover} 
                                    alt='imagen de caniones'/>
                                    <p className='card-title-song'>
                                        {song.title}
                                    </p>
                                    <p className='card-title-artist'>
                                        {song.artist.name}
                                    </p>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    </div>
  )
}

export default Content