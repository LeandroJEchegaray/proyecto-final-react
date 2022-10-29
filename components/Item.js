const Card = ({itemName}) => {
    return (
        <div className="item">
            <img src="https://via.placeholder.com/200x200" className="item-img"/>
            <span>{itemName}</span>
        </div>
    )
}
export default Card;