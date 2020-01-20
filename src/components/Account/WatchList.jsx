import React from 'react'
import '../../scss/WatchList.scss'
export default class WatchList extends React.Component {

    state = {
        watchList : this.props.watchList,
    }

    render(){
        return(
            <main>
                <div id="watchListBody" className="shadow">
                    <h1>WatchList</h1>
                    {
                        this.getWatchList()
                    }
                </div>
            </main>
        )
    }

    getWatchList(){
        let watchList = this.state.watchList;
        let list = [];
        for(let i = 0; i < watchList.length; i++){
            list.push(
                <li>
                    <span>THUMBNAIL HERE </span>
                    <span>{watchList[i].name}</span>
                </li>
            );
        }

        return(
            <ul>
                {list}
            </ul>
        );
    }
}