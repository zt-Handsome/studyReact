import React from "react";
import { Route,Redirect} from 'react-router-dom';


export default {
    checkToken(item,index) {
        let accessToken = localStorage.getItem('token');
        if (accessToken) {
            console.log(accessToken,item);
            if(item.path==='/'){
                return <Redirect to={'/homepage'} key={index}/>
            }else {
                return  <Route exact={item.exact}  path={'/homepage'+item.path} component={item.compoment} key={index}/>
            }
        } else {
            return <Redirect to={'/login'}/>
        }
    }
}