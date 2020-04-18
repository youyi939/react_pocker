import React from 'react'

export default class FormDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = { uname: 'john', unameTip: '', gender: 'male', favs: ['nba'], major: 'MC' }
    }

    _unameChangeHandler = event => {
        this.setState({ unameTip: '' })
        let uname = event.target.value
        if (uname.length <= 3) {
            this.setState({ unameTip: '你输入的长度太短了' })
        }
        this.setState({ uname: uname })
    }
    _genderChangeHander = event => {
        let gender = event.target.value
        this.setState({ gender: gender })
    }
    _favsChangeHander = event => {
        let fav = event.target.value
        let favs = this.state.favs.slice(0)
        let index = favs.indexOf(fav)

        //  let index=favs.findIndex(item=>item===fav)
        console.log(index)
        if (index < 0)
            favs.push(fav)
        else
            favs.splice(index, 1)
        this.setState({ favs })

    }

    _majorChangeHander = event => {
        let major = event.target.value
        this.setState({ major })
    }
    render() {
        return (
            <div>
                <h3>{this.state.uname}</h3>
                <form>
                    <input type="text" value={this.state.uname} onChange={this._unameChangeHandler} />
                    <span>{this.state.unameTip}</span>
                    <br />

                    <input name="gender" defaultChecked type="radio" value="male" onChange={this._genderChangeHander} />
                    <input name="gender" type="radio" value="female" onChange={this._genderChangeHander} />
                    <br />
                    <h5>你选择的性别是：{this.state.gender}</h5>

                    <input name='favs' type="checkbox" value="swim" onChange={this._favsChangeHander} />swim
                    <input name='favs' defaultChecked type="checkbox" value="nba" onChange={this._favsChangeHander} />NBA
                    <input name='favs' type="checkbox" value="fifa" onChange={this._favsChangeHander} />FIFA
                    <br />
                    <h5>你的爱好是：{this.state.favs.join(',')}</h5>

                    <select name="major" defaultValue="MC" onChange={this._majorChangeHander}>
                        <option value="SE">软件工程</option>
                        <option value="CS">计算机科学</option>
                        <option value="MC">移动云计算</option>
                    </select>

                    <h5>你的专业是：{this.state.major}</h5>
                </form>
            </div>
        )
    }
}
