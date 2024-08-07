import styles from './StepDisplay.module.css';

const StepDisplay = ({ currStep }) => {
    const steps = [1, 2, 3];

    return (
        <div className={styles.content}>
            {steps.map(step => (
                <button 
                    key={step} 
                    className={currStep === step ? styles.active : styles.inactive}
                >
                    {step}
                </button>
            ))}
        </div>
    );
};

export default StepDisplay;
