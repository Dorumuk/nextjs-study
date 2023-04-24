import Link from 'next/link';
import styles from './layout.module.css';

export default function productLayout ({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <nav className={styles.nav}>
                <Link href='/products/woman'>여성 옷</Link>
                <Link href='/products/man'>남성 옷</Link>
            </nav>
            <section className={styles.product}>
                {children}
            </section>
        </>
    )
}