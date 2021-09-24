import React from 'react'
import Search from './components/searchBar/Search';
// import Table from './components/table/Table';
import {Link} from 'react-router-dom'
const Screen1 = () => {
    return (
        <div>
            <Search/>
            {/* <Table/> */}
            <Link to="/Screen2">
                <button>
                  View Updated List
                </button>
              </Link>
        </div>
    )
}

export default Screen1
