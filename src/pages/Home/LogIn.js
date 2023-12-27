import styles from "../../Group.module.css";

export default function LogIn(){


    const btn1 = <button className={styles.logBtn}>로그인</button>
    const btn2 = <button className={styles.logBtn}>회원가입</button>

    return (
        <div className={styles.bg}>
         <div className={styles.logTitle}>회억소</div>
         <div className={styles.btns}>
            {btn1}
            {btn2}
         </div>
        </div>
    );
} 