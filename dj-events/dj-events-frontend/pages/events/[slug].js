import Layout from '@/components/Layout';
import { useRouter } from 'next/router';

export default function EventPage() {
	const router = useRouter();

	return (
		<Layout>
			<h1>My Event</h1>
			<h3>{router.query.slug}</h3>
		</Layout>
	);
}
