import React from 'react';
import { Switch,Route} from 'react-router-dom';
import Layout from './page/layout'
export default function () {

    return  <div>
            <Switch>

                   < Route  path={'/'} component={Layout} />

            </Switch>
    </div>


}