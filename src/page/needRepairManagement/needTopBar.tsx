import {Link} from "react-router-dom";
import logo from "../../pageSource/logo.svg"
function NeedTopBar(){
    return (
        <div className={"nTopBarStyle"}>
            <Link to="/">
                DGUC
                <img src={logo} alt={logo} className={"topLogo"}/>
            </Link>

            <div className={"topChange"}>
                <div className={"topChangeB "}>笔记本</div>
                <div className={"topChangeB"}>台式机</div>
                <div className={"topChangeB"}>外设</div>
            </div>
        </div>
    )
}

export default NeedTopBar