import styles from "../../Group.module.css";
import {Friends, Home, List} from "../../assets";
import { useState, useEffect } from "react";
import axios from "axios"

export default function Friend(){
   
    const [friendList, setfriendList] = useState([]); 

    useEffect(() => {
        const userId = 1;
    
        axios
          .get(`http://3.36.63.145:8080/api/friend?userId=${userId}`)
          .then(function (response) {
            setfriendList(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
      }, []);

    const FreindsList = (props) => (
        <div className={styles.friend}> 
            {props.text}
        </div>
    ); 
    const fl = friendList.map((friend) => (              
        <FreindsList key={friend.friendId} text={friend.username} />
    ) );

    return(
        <>
            <div className={styles.icon}>
                <List/> <Home/>
            </div>
            <div className={styles.title}>친구 목록</div>        
            <Friends/>
            {fl}       
        
        </>

    );
} 