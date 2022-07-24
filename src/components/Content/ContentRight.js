import { useState } from 'react';
import React from 'react';
import ListProject from './ListProject';
import Modal from './Modal';
  
function ContentRight() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
         <div>
            <div className='row'>
                <div className="col-8">
                    <h1 className="title">Tên item</h1>
                </div>
                <div class="col-4" onClick={() => console.log('clicked')}>
                <button class="btn btn-primary" onClick={() => setIsOpen(true)}>Thêm</button>
                <Modal open={isOpen} onClose={() => setIsOpen(false)}></Modal>
                </div>
            </div>
            <ListProject/>
        </div>
        </>

    );
}

export default ContentRight;