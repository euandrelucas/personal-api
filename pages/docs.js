import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
    // make a api doc.
    return (
        <div className={styles.container}>
            <Head>
                <title>Documentation</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </div>
        
    )
}
