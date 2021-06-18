export default function RestaurantMenuCategory ({category, changeFunc}){
    // let menuDescriptions = [...description]
    return (
        <div className="category" onClick={()=>changeFunc(category)}>
            <h3 >{category}</h3>
        </div>
    )

}