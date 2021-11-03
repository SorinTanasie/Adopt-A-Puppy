import Pet from '../pet/pet';
import { fetchPosts } from '../../API requests/api-requests';

import '../adoption-list/adoption-list.style.scss'
import { useEffect, useState } from 'react';

const AdoptionList = () =>{

    return(
        <div className="adoption-list">
            <Pet/>
        </div>
    )

}

export default AdoptionList;