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
                    <h1>WatchList <span> [{this.state.watchList.size}]</span></h1>
                    {
                        this.getWatchList()
                    }
                </div>
            </main>
        )
    }

    getWatchList() {
        let watchList = this.state.watchList;
        if (watchList.size > 0) {
            let list = [];
            for (let [key, value] of watchList) {
                list.push(
                    <li key={"key_" + value.id} className="watchlist-Card light-shadow">
                        <span><img src={value.images[0]} alt={"picture of" + value.name} /></span>
                        <span>
                            <div><h2><a href={value.link} target="_blank" rel="noopener noreferrer">{value.name}</a></h2></div>
                            <div>{value.age}</div>
                            <div>{value.city}</div>
                            <div><button onClick={() => this.removePet(key)}>Remove</button></div>
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

    removePet = (id) => {
        console.log(id);
        let tempWatch = this.state.watchList;
        tempWatch.delete(id);
        this.setState((prevState, props) => ({
            watchList: tempWatch
        }));
    }
}