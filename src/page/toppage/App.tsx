import React, {useState} from 'react';
import './App.css';
import Topstyle from "./topBarStyle";
import ReactFullpage from '@fullpage/react-fullpage'
import {useNavigate} from "react-router-dom";


type Props = {toPageRouter:string, name:string};
function FunctionButton({toPageRouter, name}:Props){

    const navigate = useNavigate()

    function toPage(){
        navigate(toPageRouter)
    }

    return (
        <div className={"arrowButton"} onClick={toPage}>
            <div className={"arrowTxt"}>{name}</div>
        </div>
    )
}
function App() {
    const Credits= {
        enable: true,
        label: ' '
    }

  return (
    <div className={"all"}>
        <Topstyle/>
        {/*此处跳转返回后无法进行翻页，考虑是否需要进行useeffect刷新机制*/}
        <ReactFullpage
            //fullpage options
            licenseKey = {'YOUR_KEY_HERE'}
            scrollingSpeed = {1000} /* Options here */
            credits={Credits}
            fitToSection={true}

            render={({ fullpageApi }) => {
                return (
                    <ReactFullpage.Wrapper>
                        <div className="section section1">
                            <div className={"content"}>
                                <div className={"adverWrod"}>Come on Programming is like magic let's code for our life</div>
                                <button className={"button1"} onClick={() => fullpageApi.moveSectionDown()}>
                                    <svg className={"scrollArrows"}>
                                        <path className="a1" d="M0 16 L13 26 L28 16"></path>
                                        <path className="a2" d="M0 26 L13 36 L28 26"></path>
                                        <path className="a3" d="M0 36 L13 46 L28 36"></path>
                                    </svg>

                                </button>
                            </div>

                        </div>
                        <div className="section">
                            <div className="sectionButton ">
                                <FunctionButton toPageRouter="/NeedRepairM" name="保修"/>
                                <FunctionButton toPageRouter="/repairManagment" name="管理"/>
                                <FunctionButton toPageRouter="/information" name="资讯"/>
                            </div>

                        </div>
                    </ReactFullpage.Wrapper>
                );
            }}
        />
        {/* eslint-disable-next-line react/jsx-no-undef */}
        {/*<SwiperPhoto/>*/}
    </div>
  );
}

export default App;
