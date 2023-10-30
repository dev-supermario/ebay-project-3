import Carousel from 'react-bootstrap/Carousel';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';



function CustomCarousel({ URLs,setCarouselView }) {

    const [itemIndex,setItemIndex] = useState(0)
    console.log(itemIndex)
    console.log(URLs.length)

    return (
        <div 
            style={{
                top:"0",
                left:"0",
                width:"100vw",
                height:"100vh",
                position:"fixed",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
            }}>
            <div className="bg-white rounded" style={{
                    minWidth:"320px",
                    maxWidth:"500px"
                }} 
                    >
                <div className='w-100 d-flex justify-content-between px-20 pt-20'>
                    <p className='text-black'>Product Images</p>
                    <button type="button" className="btn-close" aria-label="Close" onClick={()=>{setCarouselView(false)}} />
                </div>
                <hr className='border border-secondary m-0' />
                <Carousel 
                    controls 
                    slide 
                    touch 
                    indicators={false}
                    prevIcon={<div ><ArrowBackIosIcon htmlColor='gray' onClick={()=>setItemIndex(state => state > 0 ? state - 1 : 0)}/></div>}
                    nextIcon={<div><ArrowForwardIosIcon htmlColor='gray' onClick={()=>setItemIndex(state => state < URLs.length - 1 ? state + 1 : URLs.length - 1)} /></div>}
                >
                    {
                        URLs.map((url,index)=>
                            <>
                                <Carousel.Item key={index} 
                                    style={{padding:"20px 30px 20px 20px"}} 
                                    className={itemIndex==index ? "active" : ""}>
                                    <img 
                                        style={{
                                            display:"inline-block",
                                            border:"12px solid rgba(33,37,41)"
                                        }}  
                                        className='img-fluid' src={url} />
                                </Carousel.Item>
                            </>
                        )
                    }
                </Carousel>
                <hr className='border border-secondary m-0' />
                <div className='d-flex justify-content-end p-20'>
                    <button type="button" className="btn btn-secondary" onClick={()=>{setCarouselView(false)}}>Close</button>
                </div>
                
            </div>
        </div>
    );
  }
  

export default CustomCarousel;