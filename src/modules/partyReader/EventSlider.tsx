import { useEffect, useRef, useState } from 'react';
import './eventSliderStyle.css';

type Props = {
    children: JSX.Element[];
    autoPlay?: boolean;
};

const EventSliderComponent = ({ children, autoPlay }: Props) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);
    const sliderRef = useRef<HTMLDivElement>(null);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const minSwipeDistance = 50;

    const onTouchStart = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
        window.clearInterval(Number(intervalRef.current));
        setTouchEnd(null);
        if ('touches' in e) {
            setTouchStart(e.touches[0].clientX);
        } else {
            setTouchStart(e.clientX);
        }
    };

    const onTouchMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
        if ('touches' in e) {
            setTouchEnd(e.touches[0].clientX);
        } else {
            setTouchEnd(e.clientX);
        }
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;
        if (isLeftSwipe || isRightSwipe) {
            if (isLeftSwipe) {
                setCurrentIndex(prev => (prev + 1) % children.length);
            }
            if (isRightSwipe) {
                setCurrentIndex(prev => (prev - 1 + children.length) % children.length);
            }
        }
        if (autoPlay) {
            intervalRef.current = setInterval(() => {
                setCurrentIndex(prev => (prev + 1) % children.length);
            }, 5000);
            return () => clearInterval(Number(intervalRef.current));
        }
    };

    useEffect(() => {
        const handleTransitionEnd = () => {
            if (!sliderRef.current) return;
            if (currentIndex >= children.length) {
                setCurrentIndex(0);
                sliderRef.current.style.transition = '';
            }
            if (currentIndex < 0) {
                setCurrentIndex(children.length - 1);
                sliderRef.current.style.transition = '';
            }
            sliderRef.current.style.transition = 'left 0.3s linear';
        };
        document.addEventListener('transitionend', handleTransitionEnd);
        return () => document.removeEventListener('transitionend', handleTransitionEnd);
    }, [currentIndex, children.length]);

    useEffect(() => {
        if (autoPlay) {
            intervalRef.current = setInterval(() => {
                setCurrentIndex(prev => (prev + 1) % children.length);
            }, 5000);
            return () => clearInterval(Number(intervalRef.current));
        }
    }, [autoPlay, children.length]);

    return (
        <div className='slider-wrapper'>
            <div
                ref={sliderRef}
                style={{
                    display: 'flex',
                    transition: 'left 0.3s linear',
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
                onMouseDown={onTouchStart}
                onMouseUp={onTouchEnd}
                onMouseMove={onTouchMove}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
                className="slide-layout"
            >
                {children.map((child, index) => (
                    <div
                        key={index}
                        style={{
                            flex: '1 0 100%',
                        }}
                        className="individual-division"
                    >
                        {child}
                    </div>
                ))}
            </div>
            <div className='indicationbtn'>
                {children.map((_child, index) => (
                    <button
                        key={index}
                        style={{
                            backgroundColor: currentIndex === index ? '#33FF64' : '#FFF',
                            width: currentIndex === index ? '35px' : '15px',
                            height: '5px',
                            marginRight: '10px',
                            borderRadius: '5px',
                            transition: 'width 0.3s ease',
                        }}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default EventSliderComponent;
