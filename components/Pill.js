function Pill({ styles, name }) {
    return ( 
        <span className={styles.pill}>
            { name }
        </span>
     );
}

export default Pill;