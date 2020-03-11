import React from 'react'
import '../../scss/WatchList.scss'
import NoImage from '../../image/noimageavailable.png'
import { connect } from 'react-redux'
import { removeFromWatch } from '../../redux/WatchList/watchListActions'

class WatchList extends React.Component {

    render() {
        let watchList = this.props.watchList;
        return (
            <main>
                <div id="watchListBody" className="shadow">
                    <h1>WatchList <span> [{watchList.length}]</span></h1>
                    {
                        this.getWatchList()
                    }
                </div>
            </main>
        )
    }

    getWatchList() {
        //let watchList = this.state.watchList;
        let watchList = this.props.watchList;
        if (watchList.length > 0) {
            let list = [];
            for (let pet of watchList) {
                list.push(
                    <li key={"key_" + pet.id} className="watchlist-Card light-shadow">
                        {this.getPetImage(pet)}
                        <span>
                            <div><h2><a href={pet.url} target="_blank" rel="noopener noreferrer">{pet.name}</a></h2></div>
                            <div>{pet.age}</div>
                            <div>{pet.city}</div>
                            <div><button onClick={() => this.removePet(pet)}>Remove</button></div>
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

    getPetImage = (pet) => {

        if (pet.photos[0] == null) {
            const style = {
                backgroundImage: `url(${NoImage})`,
                backgroundSize: 'cover'
            }
            return <span style={style} className="petIcon"></span>
        } else {
            const style = {
                backgroundImage: `url(${pet.photos[0].full})`,
                backgroundSize: 'cover'
            }

            return <span style={style} className="petIcon"></span>
        }
    }

    removePet = (pet) => {
        this.props.removeFromWatch(pet);
    }
}

const mapStateToProps = state => {
    return ({
        watchList: state.watchList
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        removeFromWatch: (pet) => { dispatch(removeFromWatch(pet)) }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(WatchList)