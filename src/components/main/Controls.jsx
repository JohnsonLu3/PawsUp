import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery'
import { connect } from 'react-redux'
import { addToWatch } from '../../redux/WatchList/watchListActions'
import { addToPass } from '../../redux/PassList/passListActions'

function Controls(props) {

    const { pet, add, pass } = props;

    const addTemp = () => {
        props.addToWatchList(pet)
        add(pet)
    }

    const passTemp = () => {
        props.addToPassList(pet)
        pass(pet.id)
    }

    return (
        <div className="controls">
            <button onClick={passTemp} className="pass" title="Pass">
                <span className="sr">Pass</span>
                <FontAwesomeIcon className="brandIcon" icon={faPaw} />
            </button>
            <button onClick={enlarge} className="more" title="View Larger Image">
                <span className="sr">Learn More</span>
                <FontAwesomeIcon className="brandIcon" icon={faEllipsisH} />
            </button>
            <button onClick={addTemp} className="add" title="Add To Watch List">
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