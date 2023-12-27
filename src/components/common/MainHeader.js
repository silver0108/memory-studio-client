import { useNavigate } from "react-router";
import {Friends, Gallery, Alarm } from "../../assets";
import style from "../../Group.module.css"
export default function MainHeader () {
    const navigate = useNavigate();
    return(
        <>
        <div className={style.title}>회억소</div>
        <div className={style.icons}>
            <Friends/> 
            <Gallery onClick={() => navigate('/gallery')} /> 
            <Alarm />
        </div>
        </>

    );

}