import React from 'react';
import Canvas from './Canvas';

const Ball = () => {
  const draw = (ctx, frameCount, stageWidth, stageHeight) => {
    ctx.clearRect(0, 0, stageWidth, stageHeight);
    ctx.beginPath();
    ctx.arc(stageWidth/2, stageHeight/2, 30*Math.sin(frameCount * 0.05)**2, 0, Math.PI * 2);
    ctx.fillStyle = 'pink';
    ctx.fill();
    ctx.closePath();
  }

  return <Canvas draw={draw} />
}

export default Ball;