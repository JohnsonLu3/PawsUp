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
                    <h1>WatchList <span> [{this.state.watchList.length}]</span></h1>
                    {
                        this.getWatchList()
                    }
                </div>
            </main>
        )
    }

    getWatchList(){
        let watchList = this.state.watchList;
        if(watchList.length > 0){
            let list = [];
        for(let i = 0; i < watchList.length; i++){
            list.push(
                <li>
                    <span>{i} </span>
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
        }else{
            return(<p>Watch List is empty.</p>)
        }
    }
}