export const ProductCard = (props) => {
    const {product} = props;

    const {id, name, price} = props;

    return (
        <div>
            <div>
                <p>{name}</p>
                <p>{price}</p>
            </div>
            <div>
                <button></button>
                    <button></button>
                    <button></button>
                    <button>↩️</button>
            </div>

            
            

        </div>
            
            
    )

}