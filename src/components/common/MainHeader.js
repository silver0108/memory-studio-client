import {Friends, Gallery, Alarm } from "../../assets";
import style from "../../Group.module.css"
export default function MainHeader () {
    return(
        <>
        <div className={style.title}>회억소</div>
        <div className={style.icons}>
            <Friends /> <Gallery /> <Alarm />
        </div>
        </>

    );

}