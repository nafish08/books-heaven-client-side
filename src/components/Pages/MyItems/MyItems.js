import { useEffect, useState } from 'react';
import { CardGroup, Row } from 'react-bootstrap';
import Item from '../../Item/Item';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);
    // using custom hook here
    const [items, setItems] = useState([]);
    useEffect(() => {
        const getItems = async () => {
            const email = user.email;
            const url = `http://localhost:5000/addNewItem?email=${email}`;
            const { data } = await axios.get(url);
            setItems(data);
        }
        getItems();
    }, [user])
    return (
        <div className='container'>
            <h1 className='text-center my-4'>MY ITEMS</h1>
            <CardGroup>
                <Row xs={1} md={3} lg={3} className="g-4">
                    {
                        items.map(product => <Item
                            key={product._id}
                            product={product}
                        ></Item>)
                    }
                </Row>
            </CardGroup>
        </div>
    );
};

export default MyItems;