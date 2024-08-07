import styles from './AddressInfo.module.css';

const AddressInfo=()=>{
return(
    <div className={styles.content}>
        <h1> Address Information</h1>
        <form className={styles.form}>
              
            <input type ='text' placeholder='Address Line 1'/>
           
            <input type='text' placeholder='Address Line 2'/>
                
            <input type='text' placeholder='City'/>

            <input type='text' placeholder='State'/>

            <input type='text' placeholder='Zipcode'/>
    </form>
    </div>
);

}


export default AddressInfo;