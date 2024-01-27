import React from 'react';
import styles from "../page.module.css"
import AppNavbar from "@/components/AppNavbar";
const Page = () => {
    return (
        <div>
            <AppNavbar />
            <h2 className={styles.pageText}>This is About Page</h2>
        </div>
    );
};

export default Page;