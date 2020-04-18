import React, {Component} from 'react';

export default class FormDemo extends Component{

    constructor(props) {
        super(props);
        this.state={
            uname:"",
            unameEro:"",
            gender:"male",
            favs:['swim','bike'],
            major:""
        }
    }

    _userChangeHandler=event=>{
        this.setState({unameEro:""})
        this.setState({uname:event.target.value.toUpperCase()})
        if (this.state.uname.length <= 4){
            this.setState({unameEro:"用户名长度必须大于4"})
        }else {
            this.setState({unameEro:"合法的用户名"})
        }
    }

    _genderChangedHandler=event=>{
        this.setState({gender:event.target.value})
    }

    _favsChangeHandler=even=>{
        let fav = even.target.value;
        let favs2 = this.state.favs.slice(0)

        let index = favs2.indexOf(fav)
        if (index < 0){
            favs2.push(fav)
        }else {
            favs2.splice(index,1)
        }

        this.setState({favs:favs2})
    }

    _majorChangeHander=event=>{
        let major = event.target.value
        this.setState({major})
    }

    render() {
        return <div>
            <input name="uname" type="text" value={this.state.uname} onChange={this._userChangeHandler}/>
            <span>{this.state.unameEro}</span>
            <br/>
            <input name="gender" defaultChecked type="radio" value="male" onChange={this._genderChangedHandler}/>男
            <input name="gender" type="radio" value="female" onChange={this._genderChangedHandler}/>女
            <span>你的选择是: {this.state.gender}</span>
            <br/>
            <input name="favs" type="checkbox" value="swim" defaultChecked onChange={this._favsChangeHandler}/>游泳
            <input name="favs" type="checkbox" value="bike" defaultChecked onChange={this._favsChangeHandler}/>骑车
            <input name="favs" type="checkbox" value="NBA" onChange={this._favsChangeHandler}/>NBA
            <br/>
            <h5>您选择的爱好是{this.state.favs.join(',')}</h5>

            <select name="major" defaultChecked="SE" onChange={this._majorChangeHander}>
                <option value="SE">软件工程</option>
                <option value="CS">计算机科学</option>
                <option value="MC">移动云计算</option>
            </select>

            <h5>你选择的专业是: {this.state.major}</h5>

        </div>
    }

}
