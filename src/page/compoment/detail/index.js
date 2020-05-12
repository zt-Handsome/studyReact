import React from 'react'



export default function (props) {
    console.log(props);
    function childrenHandle () {
        props.setV('字串符');
    }
    return <div onClick={childrenHandle}>{props.articleId}</div>
}