import React, { useState, useEffect } from "react" 
import styles from "../../Group.module.css";
import { Plus } from "../../assets";
import MainHeader from "../../components/common/MainHeader";
import axios from "axios"
import { useNavigate } from "react-router-dom";

export default function GroupPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const memberId = 1;

    axios
      .get(`http://3.36.63.145:8080/api/groups?memberId=${memberId}`)
      .then(function (response) {
        setGroups(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const [checkGroup, setCheckGroup] = useState();  // 선택한 그룹 확인
  const onClick = (event) => {
    setCheckGroup(event.target.value);
    navigate('/calendar')
  };

  const [groups, setGroups] = useState([]);       // userId가 소속된 group

  const MakeGroup = (props) => (
    <button onClick={onClick} value={props.value} className={styles.btn}>
      {props.text}
    </button>
  );
  const Change = () => {
    navigate('/addgroup')
  }
  const groupList = groups.map((group) => (
    <MakeGroup key={group.groupId} value={group.groupId} text={group.groupName} />
  ));

  return (
    <>
      <MainHeader/>
      <div className="btnD">
        {groupList}
      </div>
      <div className={styles.plus}>
      <Plus onClick={Change}/>
      </div>
    </>
  );
}
