import React,{useState,useEffect, Component} from 'react';
import Detail from '../detail/index';

class Test extends Component {
    clickMe1() {
        this.setState(
            {a: this.props.setV}
        )
    };
    state = {
        a: 1111
    };
    componentDidMount() {
        console.log(this.props)
    }
    componentWillMount() {

    }
    componentDidUpdate(prevProps, prevState, snapshot) {

    }
    componentWillReceiveProps(nextProps, nextContext) {

    }
    componentWillUnmount() {

    }

    render() {
        return <div onClick={() => {this.clickMe1()}}>{this.props.setV}


            {this.props.children}
        </div>
    }
}

export default function () {
    let [a,setA] = useState({a:1,b:2});
    function clickMe() {
        let na={...a};
        na.a=a.a+=1;
        setA(na)
    }
    function changeMe(e) {
        let na={...a};
        na.b=e.target.value;
        setA(na)
    }
    let [name,setName] = useState('你好')
    function setChildren(name1) {
        setName(name1);
        console.log(name1);

    }
    return <div >
        <div onClick={clickMe}>{a.a}</div>
        <Test setV={a.b} setF={() => {alert(111111)}}>
            {
                a.b?null:<div>插我</div>
            }
            {/*<div style={{display:a.b?'none':'block'}}>插我</div>*/}
        </Test>
        <input type="text" onChange={changeMe} value={a.b}/>
        <Detail articleId={a.b} setV={setChildren}/>
        <div>{name}</div>
    </div>
}