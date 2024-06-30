import {Link, useNavigate} from "react-router-dom";
// 无法识别直接引用图片资源，需要声明资源文件.d.ts
import logo from "../../pageSource/logo.svg";
import React from "react";
import search from "../../pageSource/search.png"
function Topstyle(){
    const navigate = useNavigate();
    return(
        <div className={"topStyle"}>
            <Link to="/" >
                <img src={logo} alt={logo} className={"topLogo"}/>
                DGUC
            </Link>
            <div className={"search"}
            >
                <img src={search} alt={search} className={"searchLogo"}/>
                <input placeholder={"搜索你想要的信息"}/>
            </div>
            <button className={"topButton"} onClick={()=>navigate("/login")}>Logn in</button>
        </div>
    )
}

export default Topstyle