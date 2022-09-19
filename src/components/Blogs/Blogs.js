import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='container mt-5'>
            <h1 className='text-center mb-4'>Q&A</h1>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>1. Text1</Accordion.Header>
                    <Accordion.Body>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed nibh at erat fermentum tincidunt eget non justo. Sed gravida nisi sed lorem porttitor iaculis eget non risus. Praesent tortor urna, ornare eu pellentesque non, venenatis in leo. Quisque a suscipit sem, a tincidunt erat. Nunc eleifend in magna et iaculis. Curabitur sollicitudin sapien neque, vel vestibulum neque vestibulum in. Duis convallis tristique pharetra. Quisque dignissim lacinia dolor, ut posuere nisi sollicitudin ac. Morbi vitae posuere massa. Morbi nisl erat, mollis sit amet hendrerit mollis, consectetur et metus. Praesent tempus interdum quam, vitae convallis sem efficitur sit amet.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>2. Text2</Accordion.Header>
                    <Accordion.Body>
                        <p>Pellentesque non nulla id nisl mollis suscipit ut ac urna. Nulla eget ultrices eros. Integer felis diam, sollicitudin vel vehicula quis, sagittis et augue. Integer finibus, arcu at congue lacinia, diam est aliquam lectus, vel egestas ante magna a elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque molestie velit diam, eu lobortis sem facilisis quis. Proin aliquam ipsum lectus, a euismod turpis viverra et. Sed sollicitudin nisi elit, eu vestibulum velit lobortis ultrices. Curabitur vitae ipsum laoreet, aliquet erat eget, blandit orci. Sed porttitor nisi vitae nulla tristique, eget consequat erat suscipit. Duis dapibus non lectus in blandit.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>3. Text3</Accordion.Header>
                    <Accordion.Body>
                        <p>Vestibulum eu leo turpis. Aenean laoreet finibus hendrerit. Integer porttitor id nisl ut ullamcorper. Maecenas ut iaculis mi, a egestas urna. Fusce nec pulvinar sem, vitae scelerisque ante. Phasellus a pellentesque turpis. Fusce condimentum ultrices ligula. Nulla in dui porta, ullamcorper nisi porttitor, eleifend lectus. In et magna bibendum metus iaculis tincidunt non nec est. Integer fermentum orci id ligula venenatis, ac tempor massa pulvinar. Ut sapien turpis, elementum quis facilisis auctor, tempor sed mauris. Ut et quam nulla. Pellentesque non pretium eros, in dapibus sapien.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>4. Text4</Accordion.Header>
                    <Accordion.Body>
                        <p>Aliquam vel erat elementum, luctus arcu vitae, fermentum augue. Vivamus ut ex id lorem imperdiet vulputate. Duis imperdiet at erat eu ultricies. Aenean ornare finibus ipsum, et facilisis sapien. Nullam maximus condimentum augue quis tincidunt. Morbi cursus tristique lacinia. Morbi varius risus ut consequat efficitur. Suspendisse nec ligula bibendum, convallis elit a, finibus orci.</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;
