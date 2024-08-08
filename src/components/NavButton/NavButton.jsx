import styles from './NavButton.module.css';

const NavButton=({text,flag,action})=>{


return(
    <div className={styles.navbutton}>
    <button disabled={flag} onClick={action}>{text}</button>
    </div>
);

}


export default NavButton;