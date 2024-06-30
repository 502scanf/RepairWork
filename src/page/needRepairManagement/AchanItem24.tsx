import React, {useState} from "react";
import uprightArrowOld from '../../pageSource/右上角勾old.png'
import uprightArrowNew from '../../pageSource/右上角勾.png'

type props2= {
    isShow: boolean
}
type props3 = {
    title: string
    information: string
}
function Item2Content(props3: props3){

    const [isI2Content, setIsI2Content] = useState(false)

    function item2Con2True(){
        setIsI2Content(true)
    }
    function item2Con2false(){
        setIsI2Content(false)
    }
    return (
        <section>
            {
                isI2Content? (
                    <div className={"item2Content newI2Content"} onClick={item2Con2false}>
                        <img src={uprightArrowNew} alt={uprightArrowNew}/>
                        <div className={"i2TitleType"}>{props3.title}</div>
                        <div className={"i2InType"}>{props3.information}</div>
                    </div>
                ): (
                    <div className={"item2Content"} onClick={item2Con2True}>
                        <img src={uprightArrowOld} alt={uprightArrowOld}/>
                        <div className={"i2TitleType"}>{props3.title}</div>
                        <div className={"i2InType"}>{props3.information}</div>
                    </div>
                )
            }
        </section>
    )
}

function AchanItem24(props2: props2) {

    return (
        <section>
            {
                props2.isShow? (
                    <div className={"aChanItem2"}>
                        <Item2Content
                            information="拆机清灰处尘"
                            title="清理灰尘"
                        />

                    </div>
                ): (
                    <>
                    </>
                )
            }
        </section>
    )
}

export default AchanItem24