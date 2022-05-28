import { CardGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Item from '../../Item/Item';
import useItem from '../../Shared/hooks/useItem';
import './ManageInventories.css';

const ManageInventories = () => {
    // using custom hook here
    const [products, setProducts] = useItem();

    return (
        <div className='container'>
            <h1 className='text-center my-4'>MANAGE INVENTORY</h1>
            <CardGroup>
                <Row xs={1} md={3} lg={3} className="g-4">
                    {
                        products.map(product => <Item
                            key={product._id}
                            product={product}
                        ></Item>)
                    }
                </Row>
            </CardGroup>
            {/* For adding new item in inventory */}
            <Link className='text-decoration-none' to={'/addInventoryItem'}><button className='btn link_button d-block mx-auto mt-5'>Add new item</button></Link>
        </div>
    );
};

export default ManageInventories;