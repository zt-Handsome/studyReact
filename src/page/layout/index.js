import React from "react";
import { Route, Switch} from 'react-router-dom';
import {arr} from '../../router/index'
import MenuItem from '../menu/index'


export default function (props) {

    console.log(props)
    return <div>
        <div>
            <MenuItem path={props.match.path}/>
        </div>
        <div className="mainConment">
                <Switch>
                    {
                        arr.map((item,index)=>{
                            return  <Route  path={item.path} component={item.compoment} key={index}/>
                        })
                    }
                </Switch>
        </div>
    </div>
}