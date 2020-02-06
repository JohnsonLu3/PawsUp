import React from 'react'
import '../../scss/WatchList.scss'
export default class WatchList extends React.Component {

    state = {
        watchList: this.props.watchList,
    }

    render() {
        return (
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

    getWatchList() {
        let watchList = this.state.watchList;
        if (watchList.length > 0) {
            let list = [];
            for (let i = 0; i < watchList.length; i++) {
                list.push(
                    <li key={"key_" + watchList[i].id} className="watchlist-Card light-shadow">
                        <span><img src={watchList[i].images[0]} alt={"picture of" + watchList[i].name} /></span>
                        <span>
                            <div><h2><a href={watchList[i].link}  target="_blank" rel="noopener noreferrer">{watchList[i].name}</a></h2></div>
                            <div>{watchList[i].age}</div>
                            <div>{watchList[i].city}</div>
                            <div><button  onClick={this.removePet.bind(this,i)}>Remove</button></div>
                        </span>
                    </li>
                );
            }

            return (
                <ul id="watchList">
                    {list}
                </ul>
            );
        } else {
            return (<p>Watch List is empty.</p>)
        }
    }

    removePet(index){
        let tempWatch = this.state.watchList;
        tempWatch.splice(index,1);
        this.setState((prevState, props) =>({
            watchList : tempWatch
        }));
    }
}