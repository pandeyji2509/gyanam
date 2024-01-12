import React from 'react';
import './form.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
export default function Form() {
  return (
    <section>
        <div className="register bt ">
            <div className="col-1">
                <h2 className=''>GYANAM</h2>
                <form id='form' className='flex flex-col'>
                    <button className='btn bt'><Link className="td" to="/question_bank">Question Bank</Link></button>
                    <button className='btn bt'><Link className="td" to="/send_papers">Send Papers</Link></button>
                    <button className='btn bt'><Link className="td" to="/templates">Templates</Link></button>
                    <button className='btn bt'><Link className="td" to="/buy_now">Buy Now</Link></button>
                    <button className='btn bt'><Link className="td" to="/activate_licence">Activate Licence</Link></button>
                    <button className='btn bt'><Link className="td" to="/about">About</Link></button>
                </form>
            </div>
        </div>
    </section>
  )
}
