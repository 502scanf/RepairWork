import needPhoto from "../../pageSource/OIP-C.jpg"
import React, {useState} from "react";
import AchanItem21 from "./AchanItem21";
import AchanItem22 from "./AchanItem22";
import AchanItem23 from "./AchanItem23";
import AchanItem24 from "./AchanItem24";
import repair from '../../pageSource/维修.png'
import {useNavigate} from "react-router-dom";

type props = {
        signal: string
        isShow: boolean
        onShow: any
        disOnShow: any
}

function AchanItem(props:props){
    return (
        <section>
            {
                props.isShow? (
                        <div className={"holeItem"}>
                            <p className={"aChanItem cliActive"} onClick={props.disOnShow}>
                                {props.signal}
                            </p>

                        </div>
                    ) :
                    (
                        <p className={"aChanItem hActive"} onClick={props.onShow}>
                            {props.signal}
                        </p>
                    )
            }
        </section>
    )
}

function NeedReStep1() {

    const [isActive, setIsActive] = useState(0)
    const [isActive2, setIsActive2] = useState(0)
    const navigate = useNavigate()

    return (
        <div className={"holeNeedPage"}>
            <div className={"holeStep"}>
                <div className={"StepItem StepActive"}>
                    <span className={"StepText"}>01填写故障信息</span>
                    <div className={"pointActive StepPoint"}></div>
                </div>

                <div className={"StepItem"}>
                    <span className={"StepText"}>02申请成功</span>
                    <div className={"StepPoint"}></div>
                </div>
            </div>

            <div className={"holeNePaCon"}>
                <img src={needPhoto} alt={needPhoto} className={"needPhoto"}/>
                <div className={"neContent"}>
                    <div className={"ContentHead"}>
                        <span className={"type"}>笔记本维修</span>
                    </div>
                    <div className={"Content"}>
                        <div className={"Item1"}>
                            <span>品牌</span>
                            <div className={"Item1Ch"}>
                                <AchanItem
                                    signal= "华硕"
                                    isShow = {isActive === 1}
                                    onShow={()=>setIsActive(1)}
                                    disOnShow={()=>setIsActive(0)}
                                ></AchanItem>

                                <AchanItem
                                    signal= "苹果"
                                    isShow = {isActive === 2}
                                    onShow={()=>setIsActive(2)}
                                    disOnShow={()=>setIsActive(0)}
                                ></AchanItem>

                                <AchanItem
                                    signal= "华为"
                                    isShow = {isActive === 3}
                                    onShow={()=>setIsActive(3)}
                                    disOnShow={()=>setIsActive(0)}
                                ></AchanItem>

                            </div>

                        </div>

                        <div className={"Item2"}>
                            <span>故障</span>
                            <div className={"Item1Ch"}>
                                <AchanItem
                                    signal= "屏幕问题"
                                    isShow={isActive2 === 4}
                                    onShow={()=>setIsActive2(4)}
                                    disOnShow={()=>setIsActive2(0)}
                                />
                                <AchanItem
                                    signal= "系统问题"
                                    isShow={isActive2 === 5}
                                    onShow={()=>setIsActive2(5)}
                                    disOnShow={()=>setIsActive2(0)}
                                />
                                <AchanItem
                                    signal= "内存/硬盘加装"
                                    isShow={isActive2 === 6}
                                    onShow={()=>setIsActive2(6)}
                                    disOnShow={()=>setIsActive2(0)}
                                />
                                <AchanItem
                                    signal= "清灰/散热问题"
                                    isShow={isActive2 === 7}
                                    onShow={()=>setIsActive2(7)}
                                    disOnShow={()=>setIsActive2(0)}
                                />
                            </div>
                            <AchanItem21 isShow={isActive2 === 4}/>
                            <AchanItem22 isShow={isActive2 === 5}/>
                            <AchanItem23 isShow={isActive2 === 6}/>
                            <AchanItem24 isShow={isActive2 === 7}/>

                        </div>

                    </div>
                </div>
            </div>

            <div className={"handOnPage"}>
                <div className={"littleTip"}>
                    请选择您需要的维修服务
                    <img src={repair} alt={repair}/>
                </div>
                <div className={"handOnButton"} onClick={()=>navigate("/needReS2")}>立即报修</div>
            </div>
        </div>
    )
}

export default NeedReStep1