import React, { useEffect } from 'react';

import Classes from "../assets/class.json";
import Lang from "../assets/language.json";
import Sub from "../assets/subject.json";
import Chapt from "../assets/chapter.json"
import { useState } from 'react';
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { BsBookmarks } from "react-icons/bs";
import { RxCrossCircled } from "react-icons/rx";
import Question from "../assets/question.json";
import { useParams } from 'react-router';
import styles from "./question.module.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
function Question_paper() {
    let { id } = useParams();
    const key = { id };
    console.log(key.id);
    let p=1;
    let k=1;
  
    const [chap, setChap] = useState(false);
    const [rev, setRev] = useState(false);
    const [cls, setCls] = useState(false);
    const [ques,setQues]=useState(false);

    const review=(e)=>{
        e.preventDefault();
        setRev(true);
      
    }
    const clearr=(e)=>{
        e.preventDefault();
        setRev(false);
    }

    useEffect(()=>{
        console.log(rev);
    },[key]);
    return (
        <div className={styles.quest}>
            <div className={styles.head}><h1>Question Paper</h1></div>
            <div>
                <form className={styles.fm}>

                    <label for="class">Class: </label>
                    <select className={styles.class} name="class" >
                        <option value=""> Click here to see... </option>
                        {!Classes ? (<p>Data is fetching....</p>) : Classes.map((cls) =>
                            <option value={cls.class}>{cls.class}</option>
                        )}
                    </select>

                    <label for="Language"> Language: </label>
                    <select className={styles.Language} name="Language">
                        <option value=""> Click here to see... </option>
                        {!Lang ? (<p>Data is fetching....</p>) : Lang.map((lng) =>
                            <option value={lng.langauge}>{lng.language}</option>
                        )}
                    </select>

                    <label for="Subject" > Subject </label>
                    <select className={styles.Subject} name="Subject">
                        <option value="" > Click here to see... </option>
                        {!Sub ? (<p>Data is fetching....</p>) : Sub.map((sb) =>
                            <option value={sb.subject}>{sb.subject}</option>
                        )}
                    </select>

                    <label for="Question"> Question Level: </label>
                    <select className={styles.Question} name="Question">
                        <option value=""> Click here to see... </option>
                        <option value="Easy"> Easy </option>
                        <option value="Medium"> Medium </option>
                        <option value="Hard"> Hard </option>
                    </select>

                    <input type="checkbox" className={styles.auto1} name="auto" value="auto" />
                    <label for="autogen" className={styles.auto}> Auto Generate </label>

                    <label for="Chapter"> Chapter: </label>
                    <select className={styles.Chapter} name="Chapter" onClick={() => setChap(!chap)}>
                        <option value=""> Click here to see... </option>
                        {
                            !Chapt ? (<p>Data is fetching....</p>) : Chapt.map((cpt) =>
                                <option value={cpt.chapter}>{cpt.chapter}</option>
                            )
                        }
                    </select>


                    <label for="question_type" className={styles.qt}> Question Type: </label>
                    <select className={styles.question_type} name="question_type">
                        <option value=""> Click here to see... </option>
                        <option value="Hard"> Hard </option>
                        <option value="Moderate"> MOderate </option>
                        <option value="Easy"> Easy </option>
                    </select>

                    <button className={styles.rvw} onClick={(e)=>review(e)}> Review Question </button>

                    <button className={styles.clr} onClick={(e) => clearr(e)}> Clear </button>

                    <label for="Topic" className={styles.t1}> Topic: </label>
                    <select className={styles.Topic} name="Topic">
                        <option value=""> Click here to see... </option>
                        <option value="Physics"> Physics </option>
                        <option value="Chemistry"> Chemistry </option>
                        <option value="Biology"> Biology </option>
                    </select>
                    <br />
                    <label for="selectq" className={styles.sq}> Selected Questions </label>
                    <input type="checkbox" className={styles.selectauto} name="auto" value="selque" />

                    <label for="selecttotal"> Total Available Questions </label>
                    <input type="checkbox" className={styles.autototal} name="auto" value="avail" />

                    <label for="usedquestion"> Used Questions </label>
                    <input type="checkbox" className={styles.useques} name="useq" value="avail" />

                    <label for="Topics" className={styles.t2}> Topic: </label>
                    <select className={styles.Topics} name="Topics">
                        <option value=""> Click here to see... </option>
                        <option value="Physics"> Physics </option>
                        <option value="Chemistry"> Chemistry </option>
                        <option value="Biology"> Biology </option>
                    </select>
                </form>
                <hr />

                <div className={styles.cont}>
                        <div className={styles.wrapper}>
                            <div className={styles.sidebar}>
                                {rev && <div className={styles.topqp}>
                                    <button className={styles.btico}> <IoIosAddCircleOutline /> New </button>
                                    <button className={styles.btico}> <MdDelete /> Delete </button>
                                    <button className={styles.btico}> <BsBookmarks /> Save </button>
                                    <button className={styles.btico}> <RxCrossCircled /> Exit </button>
                                </div>
                                }
                                { rev && <div className={styles.sec_qp}>
                                    <button className={styles.btico}> Add to Paper </button>
                                    <button className={styles.btico}> Unmark </button>
                                    <p>Select All</p><input type="checkbox"/>
                                </div>
                                }
                                {rev && <div className=''>
                                    <div className={styles.qptop}>Questions</div>
                                    {
                                !Question?(null):(
                                    Question.map((qu)=>
                                    <div className={styles.parent_qnum}>
                                        <Link to={`/question_bank/${qu.key}`}>
                                            <div className={styles.num_ques}>
                                                {`Question ${p++}`}
                                            </div>
                                        </Link>
                                        <input className={styles.inp} type="checkbox"/>
                                    </div>
                                   ))
                                }
                                </div>}
                            </div>
                        </div>
                    
                    <div className={styles.qpaper}>
                        <div className=''>
                            <div className={styles.tq}> Question </div>
                            <p className={styles.reg}>{rev&&key.id?Question[parseInt(key.id)-1 ].question:null}</p>
                        </div>
                        <div className=''>
                            <div className={styles.ts}> Solution </div>
                            <p className={styles.reg}>{rev&&key.id?Question[parseInt(key.id)-1 ].solution:null}</p>
                        </div>
                    </div>
                    <div class={styles.wrapper1}>
                        <div class={styles.sidebar1}>
                            <button className={styles.btsumm}> Show Summary </button>
                            <button className={styles.btquestpaper}> Generate Question Paper </button>
                            <button className={styles.btsavepaper}> Save Paper </button>
                            {rev && <div className={styles.quesbox}>
                                <div className={styles.tqques}> Questions </div>
                                {
                                !Question?(null):(
                                    Question.map((qu)=>
                                    <div className={styles.parent_qnum}>
                                        <Link to={`/question_bank/${qu.key}`}>
                                            <div className={styles.num_ques}>
                                                {`Question ${k++}`}
                                            </div>
                                        </Link>
                                        <input className={styles.inp} type="checkbox"/>
                                    </div>
                                   ))
                                }
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Question_paper;
