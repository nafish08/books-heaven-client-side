import { useParams } from 'react-router-dom';
import useItem from '../../Shared/hooks/useItem';
import DeliveredItem from '../DeliveredItem/DeliveredItem';

const ItemDetails = () => {
    // useParams returns an object of key/value pairs of URL parameters
    const { itemId } = useParams();
    // using custom hook here
    const [products, setProducts] = useItem();

    // Filtering specific item using _id
    const updateItem = products.filter(u => u._id === itemId)

    return (
        <div>
            {
                updateItem.map(product => <DeliveredItem
                    key={product._id}
                    product={product}
                ></DeliveredItem>)
            }
        </div>
    );
};

export default ItemDetails;