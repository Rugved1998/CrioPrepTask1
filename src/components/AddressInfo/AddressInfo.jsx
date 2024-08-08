import styles from './AddressInfo.module.css';

const AddressInfo=({ formData, setFormData, errors  })=>{
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
      };

return(
    <div className={styles.content}>
        <h1> Address Information</h1>
        <form className={styles.form}>
              
            <input type ='text' name='address1' placeholder='Address Line 1' value={formData.address1} onChange={handleChange}/>
            {errors.address1 && <div className={styles.error}>{errors.address1}</div>}
           
            <input type='text' name='address2' placeholder='Address Line 2' value={formData.address2} onChange={handleChange}/>
            {errors.address2 && <div className={styles.error}>{errors.address2}</div>}
                
            <input type='text' name='city' placeholder='City' value={formData.city}  onChange={handleChange}/>
            {errors.city && <div className={styles.error}>{errors.city}</div>}

            <input type='text' name='state' placeholder='State' value={formData.state} onChange={handleChange}/>
            {errors.state && <div className={styles.error}>{errors.state}</div>}

            <input type='text' name='zip' placeholder='Zipcode' value={formData.zip} onChange={handleChange}/>
            {errors.zip && <div className={styles.error}>{errors.zip}</div>}
    </form>
    </div>
);

}


export default AddressInfo;