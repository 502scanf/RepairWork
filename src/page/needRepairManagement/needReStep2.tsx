import successHand from '../../pageSource/提交成功.png'
import logo from "../../pageSource/logo.svg";
import {Link} from "react-router-dom";
function NeedReStep2(){
    return (
        <div className={"holeNeedPage"}>
                <Link to="/">
                    DGUC
                    <img src={logo} alt={logo} className={"topLogo"}/>
                </Link>
            <div className={"holeStep"}>
                <div className={"StepItem StepActive"}>
                    <span className={"StepText"}>01填写故障信息</span>
                    <div className={"StepPoint pointActive"}></div>
                </div>

                <div className={"StepItem StepActive"}>
                    <span className={"StepText"}>02申请成功</span>
                    <div className={"StepPoint pointActive"}></div>
                </div>
            </div>

            <div className={"successHandOn"}>
                <img src={successHand} alt={successHand}/>
                <span className={"successTxt"}> 申请成功</span>
            </div>
        </div>
    )
}

export default NeedReStep2