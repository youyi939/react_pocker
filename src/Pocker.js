import React from "react";
import R1 from './assets/images/R1.png'
import R2 from './assets/images/R2.png'
import R3 from './assets/images/R3.png'
import R4 from './assets/images/R4.png'
import R5 from './assets/images/R5.png'
import R6 from './assets/images/R6.png'
import R7 from './assets/images/R7.png'

export default class PockerDemo extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            image:[{id:1,pocker:R1},
                {id:2,pocker:R2},
                {id:3,pocker:R3},
                {id:4,pocker:R4},
                {id:5,pocker:R5},
                {id:6,pocker:R6},
                {id:7,pocker:R7},
            ],
            timer:''
        }
    }

    shuffle(props) {                          //洗牌算法
        let input = props;
        for(var i = input.length-1; i >=0; i--) {
            var randomIndex = Math.floor(Math.random()*(i+1));
            var itemAtIndex = input[randomIndex];
            input[randomIndex] = input[i];
            input[i] = itemAtIndex;
        }
        return input;
    }
    _startClickHandler=event=>{
     this.state.timer =  setInterval(this._pockerRun,300)
    }

    _pockerRun=event=>{
        let image = [{id:1,pocker:R1},
            {id:2,pocker:R2},
            {id:3,pocker:R3},
            {id:4,pocker:R4},
            {id:5,pocker:R5},
            {id:6,pocker:R6},
            {id:7,pocker:R7},
        ]
        let demo = [1,2,3,4,5,6,7]
        this.shuffle(demo)
        for (let i = 0; i < 3 ; i++) {
            let index = image.findIndex(item=>item.id === demo[i] )
            console.log(index)
            if (index > -1){
                image.splice(index,1)
            }
        }
        this.setState({image})
        console.log(image)
    }

    _stopClickHandler=event=>{
        if(this.state.timer!= null) {
            clearInterval(this.state.timer);
        }
    }

    render() {
        return <div>
            <button onClick={this._startClickHandler}>开始抽牌</button>
            <button onClick={this._stopClickHandler}>停止抽牌</button>
            <div>
                <img src={this.state.image[0].pocker} />
                <img src={this.state.image[1].pocker} />
                <img src={this.state.image[2].pocker} />
                <img src={this.state.image[3].pocker} />
            </div>

        </div>
    }


}
