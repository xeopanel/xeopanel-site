export default function Home() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden relative selection:bg-blue-500/30">
			{/* Background effects */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none opacity-50 mix-blend-screen" />
			<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none opacity-30" />

			<main className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto animate-in fade-in zoom-in duration-1000 slide-in-from-bottom-4">
				<div className="space-y-6">
					<h1 className="text-6xl md:text-8xl font-bold tracking-tighter pb-2">
						<span className="bg-gradient-to-b from-white via-white/90 to-white/70 bg-clip-text text-transparent">
							XeoPanel
						</span>
					</h1>
					
					<p className="text-xl md:text-2xl text-white/60 font-medium tracking-wide">
						Scalable Web Hosting Panel
					</p>
				</div>

				{/* Optional: stylized separator or simple decorative element */}
				<div className="mt-12 w-24 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
			</main>
		</div>
	);
}
