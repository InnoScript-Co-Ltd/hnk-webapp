/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
// Error, some.expr may be null or undefined
import { useEffect, useRef, useState } from 'react'
import './style.css'

type Props = {
    children: JSX.Element[],
    autoPlay?: boolean
  }

const SliderComponent = ({children, autoPlay}: Props) => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [touchStart, setTouchStart] = useState<unknown>(null)
    const [touchEnd, setTouchEnd] = useState<unknown>(null)
    const left = -300
    const sliderRef = useRef<any>(null);
    const intervalRef = useRef<any>(null);

    // the required distance between touchStart and touchEnd to be detected as a swipe
    const minSwipeDistance = 50 

    const onTouchStart = (e: number) => {
    window.clearInterval(intervalRef.current);
    setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
    setTouchStart(e)
    }

    const onTouchMove = (e: number) => setTouchEnd(e)

    const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = Number(touchStart) - Number(touchEnd);
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    if (isLeftSwipe || isRightSwipe){
        if(isLeftSwipe){
            setCurrentIndex( prev => prev + 1);
        }

        if(isRightSwipe){
            setCurrentIndex( prev => prev - 1);
        }
    }
    if(autoPlay){
        intervalRef.current = setInterval(() => {
            setCurrentIndex( prev => prev + 1)
        }, 5000);

        return () => clearInterval(intervalRef.current)
    }
    }


    const handleTransitionEnd = () => {
        if(sliderRef.current){
            if(currentIndex >= children.length + 1){
                setCurrentIndex(1);
                return sliderRef.current.style.transition = '';
            }
    
            if(currentIndex === 0){
                setCurrentIndex(children.length)
                return sliderRef.current.style.transition = '';
            }
    
            return sliderRef.current.style.transition = 'left 0.3s linear';
        }
    }

    useEffect(() => {
        document.addEventListener('transitionend', handleTransitionEnd);

        return () => document.removeEventListener('transitionend', handleTransitionEnd);
    },[currentIndex])
    
    useEffect(() => {
        if(autoPlay){
            intervalRef.current = setInterval(() => {
                setCurrentIndex( prev => prev + 1)
            }, 5000);
    
            return () => clearInterval(intervalRef.current)
        }
    },[autoPlay])

  return (
    <div
    className='slider-wrapper'
    >
        <div 
        ref={sliderRef}
        style={{
            position: 'relative',
            left: (currentIndex * left)+'px',
        }}
        onMouseDown={(e) => onTouchStart(e.clientX)}
        onMouseUp={onTouchEnd}
        onMouseMove={(e) => onTouchMove(e.clientX)}
        onTouchStart={(e) => onTouchStart(e.targetTouches[0].clientX)} 
        onTouchMove={(e) => onTouchMove(e.targetTouches[0].clientX)} 
        onTouchEnd={onTouchEnd}
        className="slide-layout"
        >
            <div className="individual-division" key={'front'}>
                {children[children.length - 1]}
            </div>
            {
                children?.map((child, index) => (
                    <div className="individual-division" key={index}>
                        {child}
                    </div>
                ))
            }
            <div className="individual-division" key={'last'}>
                {children[0]}
            </div>
        </div>
        <div
        className='indicationbtn' 
        >
        {
            children?.length > 0 && children.map((_child, index) => (
                <button
                key={index}
                style={{
                    backgroundColor: currentIndex === index + 1 ? '#33FF64' : '#FFF',
                   width: currentIndex === index + 1 ? '35px' : '15px',
                   height: '5px',
                   marginRight: '10px',
                   borderRadius: '5px',
                   transition: 'width 0.3s ease'
                }}
                onClick={() => setCurrentIndex(index + 1)}>
                       
               </button>
            ))
        }
        </div>
    </div>
  )
}

export default SliderComponent