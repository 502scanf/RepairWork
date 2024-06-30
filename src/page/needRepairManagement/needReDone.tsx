function NeedRedone(){
    return (
        <div className={"holeNeedPage"}>
            <div className={"holeStep"}>
                <div className={"StepItem StepActive"}>
                    <span className={"StepText"}>01填写故障信息</span>
                    <div className={"StepPoint pointActive"}></div>
                </div>
                <div className={"StepItem StepActive"}>
                    <span className={"StepText"}>02填写保修信息</span>
                    <div className={"StepPoint pointActive"}></div>
                </div>
                <div className={"StepItem StepActive"}>
                    <span className={"StepText"}>03申请成功</span>
                    <div className={"StepPoint pointActive"}></div>
                </div>
            </div>
        </div>
    )
}

export default NeedRedone