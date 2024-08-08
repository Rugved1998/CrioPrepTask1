import styles from './Confirmation.module.css';

let name="Name";
let email="Email";
let phoneNumber="Phone Number";
let addrLn1="Address Line 1";
let addrLn2="Address Line 2";
let city="City";
let state="State";
let zipCode="Zip Code";


const Confirmation=({ formData })=>{
return(
    <div className={styles.content}>
        <h1> Confirm the below information</h1>
        
              
           <label defaultValue="Name" >{formData.name.length>0?formData.name:name}</label>
           <label defaultValue="Email" >{formData.email.length > 0 ? formData.email : email}</label>
           <label defaultValue="Phone Number" >{formData.phone.length > 0 ? formData.phone : phoneNumber}</label>
           <label defaultValue="Address Line 1" >{formData.address1.length > 0 ? formData.address1 : addrLn1}</label>
           <label defaultValue="Address Line 2" >{formData.address2.length > 0 ? formData.address2 : addrLn2}</label>
           <label defaultValue="City" >{formData.city.length > 0 ? formData.city : city}</label>
           <label defaultValue="State" >{formData.state.length > 0 ? formData.state : state}</label>
           <label defaultValue="zipcode" >{formData.zip.length > 0 ? formData.zip : zipCode}</label>
  
    </div>
);

}


export default Confirmation;