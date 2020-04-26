import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './style.scss';

const InfoModal = (props) => {
    const isInfoModalshow = props.isInfoModalshow;
    const setIsInfoModalshow = props.setIsInfoModalshow;
    const { title, content, btns = false } = props.data != undefined ?
        props.data : {
            "title": "",
            "content": ""
        };

    return (
        <>
            <Modal
                show={isInfoModalshow}
                onHide={() => setIsInfoModalshow(false)}
                dialogClassName="aaa"
                size={'lg'}
                aria-labelledby="info-modal"
            >
                <Modal.Header>
                    <Modal.Title id="info-modal">
                        <div className="mtitle" dangerouslySetInnerHTML={{ __html: title }}></div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mbody" dangerouslySetInnerHTML={{ __html: content }}></div>
                </Modal.Body>
                <Modal.Footer>
                    <div className='btnsbox'>
                        <span className="mbtn" onClick={() => {
                            setIsInfoModalshow(false);
                        }}>確定</span>
                    </div>


                </Modal.Footer>
            </Modal>
        </>
    )
}

export default InfoModal;