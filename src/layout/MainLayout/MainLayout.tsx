import { Navbar } from '@/components';
import { Sidebar } from '@/components/Sidebar';
import Head from 'next/head';
import React from 'react';

export interface MainLayoutInterface {
	children: React.ReactNode;
	title: string;
	imageUrl?: string;
	description?: string;
}

const MainLayout: React.FC<MainLayoutInterface> = ({
	children,
	title,
	description,
	imageUrl,
}) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="description" content={description} />
				<meta name="og:title" content={title} />
				<meta name="og:description" content={description} />
				<meta name="og:type" content="website" />
				{imageUrl && <meta name="og:image" content={imageUrl} />}
			</Head>

			<nav>
				<Navbar />
			</nav>

			<Sidebar />

			<main
				style={{
					margin: '80px auto',
					maxWidth: '1440px',
					padding: '0 30px',
				}}>
				{children}
			</main>
			{/* //TODO: footer */}
			<footer></footer>
		</>
	);
};

export default MainLayout;
