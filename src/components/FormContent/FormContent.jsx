
import AddressInfo from '../AddressInfo/AddressInfo';
import Confirmation from '../Confirmation/Confirmation';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
// import styles from './FormContent.module.css';

const FormContent=({currStep})=>{
    switch (currStep) {
        case 1:
          return <PersonalInfo />;
        case 2:
          return <AddressInfo/>;
        case 3:
          return <Confirmation/>;
        default:
          console.log(`Invalid step: ${currStep}`);
          return null;
      }

}


export default FormContent;