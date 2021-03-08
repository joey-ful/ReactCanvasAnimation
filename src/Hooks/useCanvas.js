import { useRef, useEffect } from 'react';

const useCanvas = (draw) => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let stageWidth = window.innerWidth;
    let stageHeight = window.innerHeight;
    
    const resize = () => {
      const ratio = window.devicePixelRatio;

      stageWidth = window.innerWidth;
      stageHeight = window.innerHeight;

      canvas.width = stageWidth * ratio;
      canvas.height = stageHeight * ratio;

      canvas.style.width = stageWidth + 'px';
      canvas.style.height = stageHeight + 'px';
      canvas.style.position = 'absolute';
      document.body.style.margin = '0';

      ctx.scale(ratio, ratio);
      
      window.addEventListener('resize', resize);
    }

    let frameCount = 0;
    let animationFrameId;

    const animate = () => {
      frameCount++;
      draw(ctx, frameCount, stageWidth, stageHeight);
      animationFrameId = window.requestAnimationFrame(animate);
    }
    resize();
    animate();
    
    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    }
  }, [draw]);
  
  return canvasRef
}

export default useCanvas;