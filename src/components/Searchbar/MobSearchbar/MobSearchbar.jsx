import React, {useState} from 'react'
import './MobSearchbar.css'
import Collapse from '@material-ui/core/Collapse';

export default function MobSearchbar() {
    const [flag, setFlag] = useState(false);
    return (
        <div className='mob-search-wrapper'>            
            <Collapse in={flag}>
                <div>hi</div>
                <div>hey</div>
            </Collapse>
            <div onClick={()=>setFlag(!flag)}>yo</div>

        </div>
    )
}
