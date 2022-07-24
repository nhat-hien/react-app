import React from 'react';

function FormProject(props) {
    return (
        <div className="form">
            <div className='form-group'>
                <label htmlFor=''>Tên dự án: </label>
                <input type="text" className="form-control" /> 
            </div>
            <div className='form-group'>
                <label htmlFor=''>Ngày tạo: </label>
                <input type="text" className="form-control" /> 
            </div>
            <div className='form-group'>
                <label htmlFor=''>Người tạo: </label>
                <input type="text" className="form-control" /> 
            </div>
            <button className="btn">Thêm</button>
        </div>
    );
}

export default FormProject;