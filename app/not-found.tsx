import Link from 'next/link';
import { FC } from 'react';

const Custom404: FC = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            backgroundColor: '#f8f9fa',
            color: '#343a40',
            fontFamily: 'Arial, sans-serif',
            textAlign: 'center',
        }}>
            <h1 style={{ fontSize: '6rem', margin: '0' }}>404</h1>
            <p style={{ fontSize: '1.5rem', margin: '10px 0' }}>Page Not Found</p>
            <Link href="/" passHref style={{
                    textDecoration: 'none',
                    color: '#007bff',
                    fontSize: '1.2rem',
                    marginTop: '20px',
                    border: '2px solid #007bff',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    transition: 'background-color 0.3s, color 0.3s',
                }}>
                    Go Back Home
            </Link>
        </div>
    );
};

// Disable layout for this page
// Custom404. = true;
// Custom404.noLayout = true;
export default Custom404;