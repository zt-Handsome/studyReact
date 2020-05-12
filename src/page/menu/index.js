import React from 'react';
import {Link} from 'react-router-dom'
import {arr} from  '../../router/index'
export default function (props) {
    return <div>
        {
            arr.map((item,i)=>{
                return  <Link to={item.path} key={i} >
                    <div>{item.name}</div>
                </Link>
            })
        }
    </div>
}