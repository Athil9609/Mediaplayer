import React from 'react'

function History() {
  return (
    <>
    <div className='p-5'> 
      <h1>Watch History</h1>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Video Id</th>
            <th>Video title</th>
            <th>Video Url</th>
            <th>Date and time</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Heeriye</td>
            <td>https://www.youtube.com/watch?v=RLzC55ai0eo</td>
            <td>27-8-24</td>
            <td>        <button className="btn"><i className="fa-solid fa-trash " style={{color: "#ff0000",}} /> Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  )
}

export default History