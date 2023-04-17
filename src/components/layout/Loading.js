import { RiLoader5Fill } from 'react-icons/ri'

import styles from './Loading.module.css'

function Loading() {
    return (
        <div className={styles.loader_container}>
            <RiLoader5Fill />
        </div>
    )
}

export default Loading