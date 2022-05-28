import { CardGroup, Row } from 'react-bootstrap';
import Item from '../Item/Item';
import useItem from '../Shared/hooks/useItem';

const Items = () => {
    // using custom hook here
    const [products, setProducts] = useItem();
    // slice to show only 6 item in home page
    const firstProducts = products.slice(0, 6);

    return (
        <div className='container'>
            <h1 className='text-center my-4'>Inventory Items</h1>
            <CardGroup>
                <Row xs={1} md={3} lg={3} className="g-4">
                    {
                        firstProducts.map(product => <Item
                            key={product._id}
                            product={product}
                        ></Item>)
                    }
                </Row>
            </CardGroup>
        </div>
    );
};

export default Items;