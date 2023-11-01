import Carousel from 'react-bootstrap/Carousel';
import KeyboardArrowLeftTwoToneIcon from '@mui/icons-material/KeyboardArrowLeftTwoTone';
import KeyboardArrowRightTwoToneIcon from '@mui/icons-material/KeyboardArrowRightTwoTone';
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
                    // minWidth:"320px",
                    // maxWidth:"600px",
                    // paddingBottom:"1%"
                }} 
                    >
                <div className='w-100 d-flex justify-content-between px-20 pt-20'>
                    <p className='text-black'>Product Images</p>
                    <button type="button" className="btn-close" aria-label="Close" onClick={()=>{setCarouselView(false)}} />
                </div>
                <hr className='border border-secondary m-0' />
                <Carousel
                className='custom-carousel' 
                    controls 
                    slide 
                    touch 
                    indicators={false}
                    prevIcon={<div ><KeyboardArrowLeftTwoToneIcon htmlColor='white' style={{backgroundColor:"#757575"}} onClick={()=>setItemIndex(state => state > 0 ? state - 1 : 0)}/></div>}
                    nextIcon={<div><KeyboardArrowRightTwoToneIcon htmlColor='white' style={{backgroundColor:"#757575"}} onClick={()=>setItemIndex(state => state < URLs.length - 1 ? state + 1 : URLs.length - 1)} /></div>}
                >
                    {
                        URLs.map((url,index)=>
                            <>
                                <Carousel.Item key={index} 
                                    style={{
                                        width:"100%",
                                        position:"relative",
                                        overflow:"hidden",
                                        paddingBottom:"100%",
                                        paddingLeft:"1%",
                                        paddingRight:"1%"
                                    }} 
                                    className={itemIndex==index ? "active" : ""}>
                                    <img 
                                        style={{
                                            position:"absolute",
                                            maxWidth: "100%",
                                            maxHeight: "100%",
                                            top: "50%",
                                            // left: "50%",
                                            transform:"translateX(-50%) translateY(-50%)"
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