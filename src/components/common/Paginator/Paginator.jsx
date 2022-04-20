import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assect/images/149071.png";
import {NavLink} from "react-router-dom";


let Paginator = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p);
                             }}>{p},</span>
            })}
        </div>
    )

export default Paginator;