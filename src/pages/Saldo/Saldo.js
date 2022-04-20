import React, { useEffect, useState } from 'react'
import router from '../../api/UrlRouter'


export default function Saldo() {
    const [saldo, setSaldo] = useState('');
   
            const Saldo = router.CekSaldo()
                .then((response) => {
                    setSaldo(response.result.saldo);
                })
    return (

        <section className="container">

            <div className='p-4 border-4 rounded-lg w-4/12 mt-4 flex items-center'>
                <div className='pr-4'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 dark:text-white text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                </div>
                <div className='flex flex-col'>
                    <h1 className='dark:text-white'>Saldo anda saat ini</h1>
                    <span className='dark:text-white font-bold text-lg'>Rp. {saldo}</span>
                </div>

            </div>
        </section>
    )
};
