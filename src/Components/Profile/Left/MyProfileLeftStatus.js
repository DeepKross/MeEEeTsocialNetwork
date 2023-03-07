import React from "react";
import Preloader from "../../common/PreLoader/Preloader";
import css from "../MyProfile.module.css";

class MyProfileLeftStatus extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        {!this.props.status ? <Preloader/> :
                            <div onDoubleClick={this.activateEditMode.bind(this)}
                                 className={css.desc}>{this.props.status}</div>}
                    </div>}
                {this.state.editMode &&
                    <div>
                        {!this.props.status ? <Preloader/> :
                            <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} className={css.desc}
                                   value={this.props.status}></input>}
                    </div>}
            </div>

        )
    }
}

export default MyProfileLeftStatus;