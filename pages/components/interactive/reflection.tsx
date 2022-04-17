import React, { useRef, useEffect, useState, useCallback } from 'react'

const ReflectionInteractive = props => {

    function canvas_arrow(context, fromx, fromy, tox, toy) {
        var headlen = 10; // length of head in pixels
        var dx = tox - fromx;
        var dy = toy - fromy;
        var angle = Math.atan2(dy, dx);
        context.moveTo(fromx, fromy);
        context.lineTo(tox, toy);
        context.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
        context.moveTo(tox, toy);
        context.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
      }
  
  const canvasRef = useRef(null)

  const [slider, setSlider] = useState(30);
  
  const draw = useCallback(
    (ctx, frameCount) => {
      (ctx: CanvasRenderingContext2D, frameCount) => {
        let angle = slider;
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.lineWidth = 10;
        ctx.fill()
        ctx.beginPath()
        ctx.moveTo(0, 100);
        ctx.lineTo(200, 100);
        ctx.stroke();   
        ctx.closePath();
        ctx.beginPath()
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#FA6C32";
        canvas_arrow(ctx, 100 - 100 * Math.cos(Math.PI * (90-angle) / 180.0), 100 - 100 * Math.sin(Math.PI * (90-angle) / 180), 100, 95,);
        ctx.stroke();   
        ctx.closePath();
    
        ctx.beginPath()
        canvas_arrow(ctx, 100, 95, 100 - (100 * Math.cos(Math.PI * (90 + +angle) / 180.0)), 100 - (100 * Math.sin(Math.PI * (90 + +angle) / 180)));
        ctx.stroke();   
        ctx.closePath();
        ctx.strokeStyle = "#000";
        ctx.beginPath()
        ctx.lineWidth = 1;
        ctx.moveTo(100, 100);
        ctx.lineTo(100, 0);
        ctx.stroke();   
        ctx.closePath();
      }
    },
    [slider],
  )
  
  
  useEffect(() => {
    const canvas : HTMLCanvasElement = canvasRef.current
    
    canvas.width = 200;
    canvas.height = 200;
    const context = canvas.getContext('2d')
    let frameCount = 0
    let animationFrameId
    
    //Our draw came here
    const render = () => {
      frameCount++
      draw(context, frameCount)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])

  const onSlide = (e) => {
      setSlider(e.target.value)
  } 
  
  return <>
    <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
        <canvas style={{width: "300px", height: "300px"}} ref={canvasRef} {...props}/>
    </div>
    <p style={{alignSelf: "center"}}> angle of incidence = <b>{slider}°</b></p>
    <input type="range" style={{maxWidth: "300px", alignSelf: "center"}} min={1} max={85} value={slider} 
             onChange={(e) => onSlide(e)}></input>
  </>
}

export default ReflectionInteractive