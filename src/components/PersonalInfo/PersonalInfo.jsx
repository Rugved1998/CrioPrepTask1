import styles from './PersonalInfo.module.css';

const PersonalInfo=()=>{
return(
    <div className={styles.content}>
        <h1> Personal Information Form</h1>
        <form className={styles.form}>
            <div>
                <label>Name:</label>
                <input type ='text' placeholder='Enter your Name'/>
            </div>
            <div>
                <label>Email:</label>
                <input type='text' placeholder='Enter your Email'/>
            </div>
            <div>
                <label>Phone Number:</label>
                <input type='text' placeholder='Enter your Phone Number'/>
            </div>
    </form>
    </div>
);

}


export default PersonalInfo;