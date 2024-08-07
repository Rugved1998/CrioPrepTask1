import styles from './Confirmation.module.css';

let name="Name";
let email="Email";
let phoneNumber="Phone Number";
let addrLn1="Address Line 1";
let addrLn2="Address Line 2";
let city="City";
let state="State";
let zipCode="Zip Code";


const Confirmation=()=>{
return(
    <div className={styles.content}>
        <h1> Confirm the below information</h1>
        
              
           <label defaultValue="Name" >{name}</label>
           <label defaultValue="Email" >{email}</label>
           <label defaultValue="Phone Number" >{phoneNumber}</label>
           <label defaultValue="Address Line 1" >{addrLn1}</label>
           <label defaultValue="Address Line 2" >{addrLn2}</label>
           <label defaultValue="City" >{city}</label>
           <label defaultValue="State" >{state}</label>
           <label defaultValue="zipcode" >{zipCode}</label>
  
    </div>
);

}


export default Confirmation;