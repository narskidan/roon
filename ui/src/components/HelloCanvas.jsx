import React, { useEffect, useRef, useState } from 'react';
import customFont from '../assets/ApercuPro-Regular.ttf';

const HelloCanvas = () => {
    const canvasRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(true);

    const texts = [" ", "Hello Seeker", "What would you like to know today?", ""];
    const duration = 2000; // Duration for text transition (in milliseconds)
    const fadeDuration = 500; // Duration for the fade-in and fade-out effects

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        // Load custom font
        const font = new FontFace('CustomFont', `url(${customFont})`);
        font.load().then(loadedFont => {
            document.fonts.add(loadedFont);

            const fontSize = 45;
            const fontFamily = 'CustomFont';

            context.font = `${fontSize}px ${fontFamily}`;
            context.textAlign = 'center';
            context.textBaseline = 'middle';

            const x = canvas.width / 2;
            const y = canvas.height / 2;

            const animateText = (text, alpha) => {
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.globalAlpha = alpha;
                context.fillStyle = 'white'; // Set text color to white
                context.fillText(text, x, y);
            };

            const fadeInOut = () => {
                let startTime;
                const animate = (timestamp) => {
                    if (!startTime) startTime = timestamp;
                    const elapsedTime = timestamp - startTime;

                    let alpha = 0;

                    if (currentIndex >= 0 && currentIndex < texts.length) {
                        if (elapsedTime < fadeDuration) {
                            alpha = elapsedTime / fadeDuration;
                        } else if (elapsedTime < duration - fadeDuration) {
                            alpha = 1;
                        } else if (elapsedTime < duration) {
                            alpha = 1 - (elapsedTime - (duration - fadeDuration)) / fadeDuration;
                        } else {
                            alpha = 0;
                            setCurrentIndex(prevIndex => prevIndex + 1);
                        }
                    }

                    if (currentIndex < texts.length) {
                        animateText(texts[currentIndex], alpha);
                    } else {
                        setIsAnimating(false);
                    }

                    if (elapsedTime < duration) {
                        requestAnimationFrame(animate);
                    }
                };

                requestAnimationFrame(animate);
            };

            fadeInOut();
        });
    }, [currentIndex]);

    return <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight}></canvas>;
};

export default HelloCanvas;
