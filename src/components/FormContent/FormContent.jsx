
import AddressInfo from '../AddressInfo/AddressInfo';
import Confirmation from '../Confirmation/Confirmation';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
// import styles from './FormContent.module.css';

const FormContent=({currStep, formData, setFormData, errors })=>{
    switch (currStep) {
        case 1:
          return <PersonalInfo  formData={formData} setFormData={setFormData} errors={errors} />;
        case 2:
          return <AddressInfo formData={formData} setFormData={setFormData} errors={errors} />;
        case 3:
          return <Confirmation formData={formData}/>;
        default:
          console.log(`Invalid step: ${currStep}`);
          return null;
      }

}


export default FormContent;