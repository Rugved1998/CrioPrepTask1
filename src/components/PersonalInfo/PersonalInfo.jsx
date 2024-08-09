import styles from './PersonalInfo.module.css';

const PersonalInfo=({ formData, handleForm, errors })=>{
    const handleChange = (e) => {
        const { name, value } = e.target;
        handleForm({ name, value });
      };
    
    

return(
    <div className={`${styles.container} ${styles.active}`}>
        <h1> Personal Information </h1>
        <form className={`${styles.form} ${styles.active}`}>
              
            <input type ='text' name='name' placeholder='Enter your Name'  value={formData.name} onChange={handleChange}/>
            {errors.name && <div className={styles.error}>{errors.name}</div>}
           
            <input type='text' name='email' placeholder='Enter your Email' value={formData.email} onChange={handleChange}/>
            {errors.email && <div className={styles.error}>{errors.email}</div>}
                
            <input type='text' name='phone' placeholder='Enter your Phone Number' value={formData.phone}  onChange={handleChange}/>
            {errors.phone && <div className={styles.error}>{errors.phone}</div>}
            
    </form>
    </div>
);

}


export default PersonalInfo;