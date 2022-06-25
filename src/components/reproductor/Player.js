import {useState, useEffect } from 'react'
import "./styles.css"
const Player = ({
    Id,setId,pista, setPista, setDatosParaContent, arrayid, arrayindex,cambiarboton
    ,setcambiarboton}) => {
  const [detallecancion, setDetalleCancion] = useState([])
  const [volumen, setVolumen] = useState("bi bi-volume-up-fill")//nombre de los íconos de volumen.
  useEffect(() => {
    if (Id) {
      try {
        const llamandoCancion = async()=>{
            const response = await fetch(`https://api.deezer.com/track/${Id}`);
            const data = await response.json()
            setDetalleCancion(data)
            setDatosParaContent(data)
            setPista(new Audio(data.preview))
        }
        llamandoCancion()
      } catch (error) {
          console.log(error)
      }
    }else{
      console.log("nada")
    }
  }, [Id])

  const handleClickPlay=()=>{
    setcambiarboton(true)
    
    pista.play()
  }
  const handleClickPause=()=>{
    setcambiarboton(false)
    pista.pause()
  }
  const handleChangeVolume=(e)=>{
    
    let volumen = e.target.value
    setVolumen(volumen)
    switch (true) {
      case volumen <= 0:
        setVolumen("bi bi-volume-mute-fill")
        break;
      case volumen > 0 && volumen <= 0.2 :
        setVolumen("bi bi-volume-off-fill")
        break;
      case volumen > 0.2 && volumen <= 0.6 :
        setVolumen("bi bi-volume-down-fill")
        break;
      case volumen > 0.6 && volumen <= 1 :
        setVolumen("bi bi-volume-up-fill")
        break;
      default:
        break;
    }
    pista.volume = volumen
  }
  let counter = 0
  const handleClickPrevSong=()=>{
    pista.pause()
    setcambiarboton(false)
    --counter
    let siguienteCancion  = arrayindex + counter;
    if (siguienteCancion >= 0 && siguienteCancion < arrayid.length) {
      setId(arrayid[siguienteCancion].id)
      
    }else{
      console.log("no hay mas canciones en la lista")
    }
  }
  

  const handleClickNextSong=()=>{
    pista.pause()
    setcambiarboton(false)
    ++counter

    let siguienteCancion  = arrayindex + counter;
    if (siguienteCancion < arrayid.length && siguienteCancion >=0) {
      setId(arrayid[siguienteCancion].id)

    }
    
  }
  return (
    <div className='player-container'>
      {
        detallecancion?(
            <div className='player-song-details'>
              <img className='player-song-img' src={detallecancion.album?.cover} alt='imagen de cancion en reproducción'/>
              <div className='player-song-desc'>
                <p className='player-song-title'>{detallecancion?.title}</p>
                <p className='player-song-artist'>
                  {`${detallecancion.artist?.name} - ${detallecancion.album?.title}`}
                </p>
              </div>
            </div>
          ):(
            <span></span>
          )
      }
      <div className='player-details-1'>
        <i onClick={handleClickPrevSong} className="bi bi-skip-start-fill"></i>
        <div className='btn-play-container'>
          {
            cambiarboton?(
              <i onClick={handleClickPause} className="fas fa-pause"></i>
            )
            :(
              <i onClick={handleClickPlay} className="fas fa-play"></i>
            )
          }
        </div>
        <i onClick={handleClickNextSong} className="bi bi-skip-end-fill"></i>
      </div>
      <div className='player-details-2'>
        <input onChange={handleChangeVolume} type="range" max="1" min="0" step="0.1" className='btn-volume-progress' />
      <i className={volumen}></i>
      </div>
    </div>
  )
}

export default Player