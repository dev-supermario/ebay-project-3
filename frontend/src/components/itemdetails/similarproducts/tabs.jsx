export const Tabs = ({ sortBy,setSortBy,sortOrder,setSortOrder }) => {
    return(
        <>
            <div className="d-flex flex-column flex-sm-row">
                <div className="col-sm-2 me-sm-30">
                    <select
                        id='sortby' 
                        className="form-select"
                        value={sortBy}
                        onChange={(e)=>setSortBy(e.target.value)}
                    >
                        <option value="default">Default</option>
                        <option value="title">Product Name</option>
                        <option value="days">Days Left</option>
                        <option value="price">Price</option>
                        <option value="shipping">Shipping Cost</option>
                    </select>
                </div>
                <div className="col-sm-2">
                    <select
                        id='sortorder' 
                        className="form-select"
                        value={sortOrder}
                        onChange={(e)=>setSortOrder(e.target.value)}
                    >
                        <option value="ascending">Ascending</option>
                        <option value="descending">Descending</option>
                    </select>
                </div>
            </div>
        </>
    )
}