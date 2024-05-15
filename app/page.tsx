import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ui/mode-toggle';

export default function Home() {
	return (
		<div className='flex justify-center items-center h-screen flex-col'>
			<h1 className='text-4xl pb-6 font-bold'>Next.js with Shadcn</h1>
			<ModeToggle />
			<Button className='mt-6'>Click me</Button>
		</div>
	);
}
