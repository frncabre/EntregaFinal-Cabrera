import { useCount } from "../../hooks/useCount"
import './ItemCount.css'

const ItemCount = ({stock, onAdd}) => {
    const {count, decrement, increment} = useCount()

    

    return (
        <div className="counter-container">
          <h1 className="counter-value">{count}</h1>
          <button className="counter-button" onClick={decrement} disabled={count <= 1 || stock === 0}>-</button>
          <button className="counter-button" onClick={increment} disabled={stock === 0 || count >= stock}>+</button>
          <button className="button" onClick={() => stock > 0 && onAdd(count)} disabled={stock === 0 || count <= 0 || count > stock}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount