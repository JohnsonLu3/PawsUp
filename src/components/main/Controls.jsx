import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery'
import { connect } from 'react-redux'
import { addToWatch } from '../../redux/WatchList/watchListActions'
import { addToPass } from '../../redux/PassList/passListActions'

function Controls(props) {

    const { pet } = props;

    const add = () => {
        props.addToWatchList(pet)
    }

    const pass = () => {
        props.addToPassList(pet)
    }

    return (
        <div className="controls">
            <button onClick={pass} className="pass" title="Pass">
                <span className="sr">Pass</span>
                <FontAwesomeIcon className="brandIcon" icon={faPaw} />
            </button>
            <button onClick={enlarge} className="more" title="View Larger Image">
                <span className="sr">Learn More</span>
                <FontAwesomeIcon className="brandIcon" icon={faEllipsisH} />
            </button>
            <button onClick={add} className="add" title="Add To Watch List">
                <span className="sr">Add to Watch List</span>
                <FontAwesomeIcon className="brandIcon" icon={faPaw} />
            </button>
        </div>
    )
}

const enlarge = () => {
    let modal = document.getElementById("enlargedImage");
    $(modal).removeClass("hide-modal")
    $("#dim").removeClass("hide");
}

const mapStateToProps = state => {
    return {
        passList: state.passList,
        watchList: state.watchList
    }
}

const mapDispatchToProps = dispatch => {
    return ({
        addToWatchList: (pet) => {
            dispatch(
                addToWatch(pet)
            )
        },
        addToPassList: (pet) => {
            dispatch(
                addToPass(pet)
            )
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Controls)