import React from 'react';

function ListProject(props) {
    return (
        <table className="table">
            <td>
                <th>Tên dự án</th>
                <th>Ngày tạo</th>
                <th>Người tạo</th>
                <th>Thao tác</th>
            </td>
        </table>
    );
}

export default ListProject;