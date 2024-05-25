import React, { Children } from 'react'

function CustomTabale({children}) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Year</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {children}
                </tbody>
            </table >
        </div>
    )
}

export default CustomTabale