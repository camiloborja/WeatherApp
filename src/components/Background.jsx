import React from 'react'


const Background = ({state}) => {
    let id = state
    let UrlBack=''
    if(id>=300&&id<322){
      UrlBack='https://cdn.videvo.net/videvo_files/video/free/2015-06/large_watermarked/Raindrops_Macro5_Videvo_preview.mp4'
    }
    if(id>=200&&id<204){
      UrlBack='https://static.videezy.com/system/resources/previews/000/044/767/original/P1140828.mp4'
    }
    if(id==511||id>=600&&id<623){
      UrlBack='https://static.videezy.com/system/resources/previews/000/021/834/original/abstract-snowfall.mp4'
    }
    if(id>=520&&id<532){
      UrlBack='https://static.videezy.com/system/resources/previews/000/039/127/original/stockvideo_01055.mp4'
    }
    if(id==800){
      UrlBack='https://static.videezy.com/system/resources/previews/000/038/759/original/stockfootage0469.mp4'
    }
    if(id>802&&id<805){
      UrlBack='https://static.videezy.com/system/resources/previews/000/047/223/original/Flight_Through_Clouds_rotating_2x_forward.mp4'
    }
    if(id>800&&id<803){
      UrlBack='https://static.videezy.com/system/resources/previews/000/011/768/original/Clouds_Timelapse_64_-_30s_-_4k_res.mp4'
    }
  return (
    <video className='backgroun_video' src={UrlBack} autoPlay="true" muted="true" loop="true"></video>
  )
}

export default Background