import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  import styless from "./form.module.css"
export default function Form() {
  return (
    <section className={styless.Apps}>
        <div className={styless.register}>
            <div className={styless.col_1}>
                <h2 className=''>GYANAM</h2>
                <form  className={styless.formal}>
                    <button className={styless.btn}><Link className={styless.td} to="/question_bank">Question Bank</Link></button>
                    <button className={styless.btn}><Link className={styless.td} to="/send_papers">Send Papers</Link></button>
                    <button className={styless.btn}><Link className={styless.td} to="/templates">Templates</Link></button>
                    <button className={styless.btn}><Link className={styless.td} to="/buy_now">Buy Now</Link></button>
                    <button className={styless.btn}><Link className={styless.td} to="/activate_licence">Activate Licence</Link></button>
                    <button className={styless.btn}><Link className={styless.td} to="/about">About</Link></button>
                </form>
            </div>
        </div>
    </section>
  )
}
