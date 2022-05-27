import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='container mt-5'>
            <h1 className='text-center mb-4'>Q&A</h1>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>1. Difference between javascript and nodejs</Accordion.Header>
                    <Accordion.Body>
                        <h4>JavaScript:</h4>
                        <ul>
                            <li>JavaScript is a lightweight object-oriented programming language for creating dynamic HTML pages with interactive effects.</li>
                            <li>Versatile and quick.</li>
                            <li>Cross-compilation is possible.</li>
                            <li>Interfaces, modules, and classes are all supported.</li>
                        </ul>
                        <h4>Node.js</h4>
                        <ul>
                            <li>When launched in the V8 engine or via the node interpreter, Node.js normally provides a list of objects and methods available to JavaScript code.</li>
                            <li>It's an open-source framework with an MIT license.</li>
                            <li>It's a simple framework with only the most essential elements. Other modules may be added depending on the application's needs.</li>
                            <li>It's a cross-platform framework for Windows, Mac OS X, and Linux.</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>2. When should you use nodejs and when should you use mongodb</Accordion.Header>
                    <Accordion.Body>
                        <p>When building an API application with both relational and non-relational databases, Node.js is a wonderful choice. Because Node.js works on a single thread, it can handle up to 10,000 simultaneous queries. Internal threads handle all blocking I/O activities (such as database access) asynchronously, without disturbing the main thread. Node.js is the ideal choice for building microservices and real-time applications.</p>
                        <p>MongoDB is a general-purpose database that is used in a variety of sectors to support applications. Because it tackles long-standing difficulties in data management and software development, MongoDB has found a home in a variety of enterprises and roles. MongoDB is commonly used in the following scenarios:</p>
                        <ul>
                            <li>Integrating large amounts of diverse data</li>
                            <li>Describing complex data structures that evolve</li>
                            <li>Delivering data in high-performance applications</li>
                            <li>Supporting hybrid and multi-cloud applications</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>3. Differences between sql and nosql databases.</Accordion.Header>
                    <Accordion.Body>
                        <h4>SQL:</h4>
                        <ul>
                            <li>It is a Relational Database Management System.</li>
                            <li>Complex queries are best served by these databases.</li>
                            <li>Vertically Scalable</li>
                            <li>The schema of these databases is fixed, static, or predetermined.</li>
                        </ul>
                        <h4>NoSQL:</h4>
                        <ul>
                            <li>It is a Non-relational Database System.</li>
                            <li>Complex queries are not well served by these databases.</li>
                            <li>Horizontally scalable</li>
                            <li>They have dynamic schema</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>4. What is the purpose of jwt and how does it work</Accordion.Header>
                    <Accordion.Body>
                        <p>JWT is an open standard that allows two parties — a client and a server — to communicate security information. JSON items, containing a set of claims, are encoded in each JWT. JWTs use a cryptographic technique to ensure that the claims cannot be changed after the token has been issued.</p>
                        <p>JWTs are unique among web tokens in that they include a set of claims. Claims are a way for two parties to exchange information. The nature of these assertions is determined by the use case at hand. A claim could state who issued the token, how long it's valid, or what rights the client has been given.</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;