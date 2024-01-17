import React, { useEffect } from 'react';
import './question.css';
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
  
    const [chap, setChap] = useState(false);
    const [rev, setRev] = useState(false);
    const [cls, setCls] = useState(false);
    const [ques,setQues]=useState(false);
    // console.log(Classes);
    // console.log(Question[parseInt(key.id) - 1]);

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
        <div className='quest '>
            <div className='head bt'><h1>Question Paper</h1></div>
            <div>
                <form className='fm'>

                    <label for="class">Class: </label>
                    <select id="class" name="class" >
                        <option value=""> Click here to see... </option>
                        {!Classes ? (<p>Data is fetching....</p>) : Classes.map((cls) =>
                            <option value={cls.class}>{cls.class}</option>
                        )}
                    </select>

                    <label for="Language"> Language: </label>
                    <select id="Language" name="Language">
                        <option value=""> Click here to see... </option>
                        {!Lang ? (<p>Data is fetching....</p>) : Lang.map((lng) =>
                            <option value={lng.langauge}>{lng.language}</option>
                        )}
                    </select>

                    <label for="Subject" > Subject </label>
                    <select id="Subject" name="Subject">
                        <option value="" > Click here to see... </option>
                        {!Sub ? (<p>Data is fetching....</p>) : Sub.map((sb) =>
                            <option value={sb.subject}>{sb.subject}</option>
                        )}
                    </select>

                    <label for="Question"> Question Level: </label>
                    <select id="Question" name="Question">
                        <option value=""> Click here to see... </option>
                        <option value="Easy"> Easy </option>
                        <option value="Medium"> Medium </option>
                        <option value="Hard"> Hard </option>
                    </select>

                    <input type="checkbox" id="auto1" name="auto" value="auto" />
                    <label for="autogen" id="auto"> Auto Generate </label>

                    <label for="Chapter"> Chapter: </label>
                    <select id="Chapter" name="Chapter" onClick={() => setChap(!chap)}>
                        <option value=""> Click here to see... </option>
                        {
                            !Chapt ? (<p>Data is fetching....</p>) : Chapt.map((cpt) =>
                                <option value={cpt.chapter}>{cpt.chapter}</option>
                            )
                        }
                    </select>


                    <label for="question_type" id="qt"> Question Type: </label>
                    <select id="question_type" name="question_type">
                        <option value=""> Click here to see... </option>
                        <option value="Hard"> Hard </option>
                        <option value="Moderate"> MOderate </option>
                        <option value="Easy"> Easy </option>
                    </select>

                    <button className='rvw' onClick={(e)=>review(e)}> Review Question </button>

                    <button className='clr' onClick={(e) => clearr(e)}> Clear </button>

                    <label for="Topic" id="t1"> Topic: </label>
                    <select id="Topic" name="Topic">
                        <option value=""> Click here to see... </option>
                        <option value="Physics"> Physics </option>
                        <option value="Chemistry"> Chemistry </option>
                        <option value="Biology"> Biology </option>
                    </select>
                    <br />
                    <label for="selectq" id="sq"> Selected Questions </label>
                    <input type="checkbox" id="selectauto" name="auto" value="selque" />

                    <label for="selecttotal"> Total Available Questions </label>
                    <input type="checkbox" id="autototal" name="auto" value="avail" />

                    <label for="usedquestion"> Used Questions </label>
                    <input type="checkbox" id="useques" name="useq" value="avail" />

                    <label for="Topics" id="t2"> Topic: </label>
                    <select id="Topics" name="Topics">
                        <option value=""> Click here to see... </option>
                        <option value="Physics"> Physics </option>
                        <option value="Chemistry"> Chemistry </option>
                        <option value="Biology"> Biology </option>
                    </select>
                </form>
                <hr />

                <div className='cont'>
                        <div className="wrapper">
                            <div className="sidebar">
                                {rev && <div className='top-qp'>
                                    <button className='bt-ico'> <IoIosAddCircleOutline /> New </button>
                                    <button className='bt-ico'> <MdDelete /> Delete </button>
                                    <button className='bt-ico'> <BsBookmarks /> Save </button>
                                    <button className='bt-ico'> <RxCrossCircled /> Exit </button>
                                </div>}
                                {rev && <div className='sec-qp'>
                                    <button className='bt-ico'> Add to Paper </button>
                                    <button className='bt-ico'> Unmark </button>
                                    <p>Select All</p><input type="checkbox"/>
                                </div>}
                                {rev && <div className='third-qp'>
                                    <div className='qp-top'>Questions</div>
                                    {
                                !Question?(null):(
                                    Question.map((qu)=>
                                    <div className='parent-qnum'>
                                        <Link to={`/question_bank/${qu.key}`}>
                                            <div className='num_ques'>
                                                {`Question ${p++}`}
                                            </div>
                                        </Link>
                                        <input className='inp' type="checkbox"/>
                                    </div>
                                   ))
                                }
                                </div>}
                            </div>
                        </div>
                    
                    <div className='qpaper'>
                        <div className=''>
                            <div className='tq'> Question </div>
                            <p className='reg'>{key.id?Question[parseInt(key.id)-1 ].question:null}</p>
                        </div>
                        <div className=''>
                            <div className='ts'> Solution </div>
                            <p className='reg'>{key.id?Question[parseInt(key.id)-1 ].solution:null}</p>
                        </div>
                    </div>
                    <div class="wrapper1">
                        <div class="sidebar1">
                            <button className='bt-summ'> Show Summary </button>
                            <button className='bt-quest-paper'> Generate Question Paper </button>
                            <button className='bt-save-paper'> Save Paper </button>
                            <div className='ques-box'>
                                <div className=''> Question </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Question_paper;
