import Form from "./form";

export default function SearchPage(){
    return(
        <>
            <div className="container py-20 px-sm-100">
                <div className="container bg-dark text-white rounded py-1 px-0">
                    <hr className='border border-black'/>
                    <h3 className="ps-30 px-sm-300">Product Search</h3>
                    <hr className='border border-black'/>
                    <Form/>
                </div>    
            </div>
        </>
    )
}