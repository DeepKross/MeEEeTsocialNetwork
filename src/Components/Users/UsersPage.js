import React from "react";
import css from "./UsersPage.module.css"
import Preloader from "../common/PreLoader/Preloader";

//const url4Avatar = "https://graphicriver.img.customer.envatousercontent.com/files/383753376/Letter+A+Logo+-+Anglex_1.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=1322843b6a4dc44c34d61c195d61ee3e";

function UsersPage(props) {

    let pagesCount = Math.ceil(props.totalUsers / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(e => <button className={props.currentPage === e && css.selected}
                                    onClick={() => {
                                        props.handleClick(e)
                                    }}>{e}</button>)}
        </div>
        {props.isFetching === true ? <Preloader/> : props.users}
    </div>

}

export default UsersPage;