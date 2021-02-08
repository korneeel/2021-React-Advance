import React, { useState } from 'react';
import Modal from './modal';
import { data } from './data'
import { Row, Col, Container } from 'react-bootstrap'

const Index = () => {
    const [name, setName] = useState('')
    const [people,setPeople] = useState(data);
    const [showModal,setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault(); 
        if (name) {
            setShowModal(true);
            setPeople([...people, { id: new Date().getTime().toString(), name }]);
            setName('');
        } else {
            setShowModal(true)
        }
    }
    return (
        <Container>
            <Row>
                <Col>
                    {showModal && <Modal/>}
                    <form onSubmit={handleSubmit} className="form">
                        <div>
                            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                        </div>
                        <button type="submit">add</button>
                    </form>
                </Col>
            </Row>
            <Row>
                <Col>
                    {people.map((person)=>{
                        return (
                            <div key={person.id}>
                                <ul>
                                    <li><h4>{person.name}</h4></li>
                                </ul>
                            </div>
                        )
                    })}
                </Col>
            </Row>
        </Container>
    )
}
export default Index;