import styles from './StepDisplay.module.css';

const StepDisplay = ({ currStep }) => {
    const steps = [1, 2, 3];

    return (
       <div className={styles.content}>
         <div className={` ${styles['step-indicator-div']}`}>
            {steps.map(step => (
                <button 
                    key={step} 
                    className={`${styles['step-indicator']} ${currStep === step ? styles.active : styles.inactive}`}
                >
                    {step}
                </button>
                
            ))}
             </div>
            <div className={styles.progressbar}>
                <div 
                    className={styles.progress} 
                    style={{ width: `${(currStep / steps.length) * 100}%` }}
                />
            </div>
       
       </div>
    );
};

export default StepDisplay;
