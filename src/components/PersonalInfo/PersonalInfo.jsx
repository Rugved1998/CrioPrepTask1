

import styles from './PersonalInfo.module.css';

const PersonalInfo=()=>{
return(
    <div className={styles.content}>
        <h1> Personal Information </h1>
        <form className={styles.form}>
              
            <input type ='text' placeholder='Enter your Name'/>
           
            <input type='text' placeholder='Enter your Email'/>
                
            <input type='text' placeholder='Enter your Phone Number'/>
    </form>
    </div>
);

}


export default PersonalInfo;