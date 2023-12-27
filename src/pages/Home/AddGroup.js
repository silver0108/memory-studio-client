import { useState, useEffect } from "react";
import styles from "../../Group.module.css";
import MainHeader from "../../components/common/MainHeader";
import axios from "axios"
import { useNavigate } from "react-router-dom";


export default function AddGroup() {
    const navigate = useNavigate();
    const [friendList, setfriendList] = useState([]);   //친구목록 get
    const [friendListData, setFriendListData] = useState([]);
    const userId = 1;
    useEffect(() => {
        axios
          .get(`http://3.36.63.145:8080/api/friend?userId=${userId}`)
          .then(function (response) {
            setfriendList(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
      }, []);

    const [groupName, setGroupName] = useState("");  
    const handleChange = (event) => setGroupName(event.target.value);

    const group_name = (    
        <input
            className={styles.inputGroup}
            type="text"
            value={groupName}
            placeholder="그룹명 작성"
            onChange={handleChange}
        />
    ); 
    // 그룹명 입력받아서 groupName으로 설정

    
    const FreindsList = (props) => (
        <button onClick={onClick} value={props.value} className={styles.addB}>
          {props.text}
        </button>
    ); 
    const friends = friendList.map((friend) => (              
        <FreindsList key={friend.friendId} text={friend.username} value={friend.friendId}/>
    ) );
    // 친구목록수 만큼 맞춰 렌더링하기
    const onClick = (event) => {
      setFriendListData([event.target.value, ...friendListData])
    }
    // 버튼클릭하면 리스트에 멤버이름 추가하기

    const Post = () => {
      try{
        const response = axios.post('http://3.36.63.145:8080/api/group', {
          "userId": 1,
          "groupName": groupName,
          "list": friendListData
        })
        console.log(response.data)
        navigate('/')

      }catch(error){
        console.log(error)
      }
    };

    const creatBtn = <button className={styles.addBtn} onClick={Post}>그룹 생성하기</button>; 

    
    return (
        <>
        <MainHeader/> 
        <div>
          {group_name}
          {friends}
        </div> 
  
        {creatBtn}  
        </>
    );

}