import React from "react";


export default class CalculatorDemo extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            operator:"+",
            a:'',
            b:'',
            c:''
        }
    }

    _operationHandler=event=>{
        let a = this.state.a
        let b = this.state.b
        let c;
        let operation = this.state.operator
        switch (operation) {
            case '+':
                c = Number(a) + Number(b)
                break
            case '-':
                c = Number(a) - Number(b)
                break
            case '*':
                c = Number(a) * Number(b)
                break
            case '/':
                c = Number(a) / Number(b)
                break
        }
        this.setState({c})
    }
    _aChangeHandler=event=>{
        let a = event.target.value;
        this.setState({a})
    }
    _bChangeHandler=event=>{
        let b = event.target.value;
        this.setState({b})
    }
    _operaterChangeHandler=event=>{
        let operator = event.target.value
        this.setState({operator})
    }


    render() {
        return <div>
            <input type="number" value={this.state.a} onChange={this._aChangeHandler}/>
            <select defaultChecked="+" onChange={this._operaterChangeHandler}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
            <input type="number" value={this.state.b} onChange={this._bChangeHandler}/>
            <button onClick={this._operationHandler}>=</button>
            <input type="number" value={this.state.c} />
        </div>
    }

}
