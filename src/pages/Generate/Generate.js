import React, { useEffect, useState } from 'react'
import router from '../../api/UrlRouter'


export default function Generate() {

  const [generate, setGenerate] = useState();

  

    
  return (

    <div>
      <table>
        <tr>
          <td>Image</td>
          <td>:</td>
          <td><input type="file" className='border px-2 rounded-md'  /></td>
        </tr>
        <tr>
          <td>Nama Doc</td>
          <td>:</td>
          <td><input type="text" className='border px-2 rounded-md'  /></td>
        </tr>
        <tr>
          <td>Nama Identitas</td>
          <td>:</td>
          <td><input type="text" className='border px-2 rounded-md'  /></td>
        </tr>
        <tr>
          <td>No Identitas</td>
          <td>:</td>
          <td><input type="text" className='border px-2 rounded-md'  /></td>
        </tr>
        <tr>
          <td>Namedipungut</td>
          <td>:</td>
          <td><input type="text" className='border px-2 rounded-md'  /></td>
        </tr>
        
        <tr>
          <td>Nama File</td>
          <td>:</td>
          <td><input type="file" className='border px-2 rounded-md'  /></td>
        </tr>
        <tr>
          <td>Nilai Dokument</td>
          <td>:</td>
          <td><input type="text" className='border px-2 rounded-md'  /></td>
        </tr>
        <tr>
          <td>No SN</td>
          <td>:</td>
          <td><input type="file" className='border px-2 rounded-md'  /></td>
        </tr>
        <tr>
          <td>Nomer Dokument</td>
          <td>:</td>
          <td><input type="number" className='border px-2 rounded-md'  /></td>
        </tr>
        <td>Tgl Dokument</td>
        <td>:</td>
        <td><input type="date" className='border px-2 rounded-md'  /></td>
      </table>
    </div>
  )
};
