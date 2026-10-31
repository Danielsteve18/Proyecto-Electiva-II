import Image from 'next/image';

const contact = [
	{
		icon: 'fa-location-dot',
		text: 'Viva Centro Comercial, Calle 2N #66-86 Km 11, Buenaventura, Valle del Cauca',
	},
	{ icon: 'fa-phone', text: '+57 300 123 4567' },
];

// Horario tomado de info.md (sección Booking Table)
const schedule = [
	'Lunes a Jueves: 10:00 AM - 09:00 PM',
	'Viernes y Sábados: 09:00 AM - 10:00 PM',
	'Domingos: Cerrado',
];

const socials = [
	{
		label: 'Facebook',
		icon: 'fa-facebook',
		href: 'https://www.facebook.com/profile.php?id=61585009348729&sk=about',
	},
	{ label: 'X', icon: 'fa-x-twitter', href: 'https://x.com/?lang=es' },
	{
		label: 'Instagram',
		icon: 'fa-instagram',
		href: 'https://www.instagram.com/sabo.ralinstante/',
	},
];

export function Footer() {
	return (
		<footer className="bg-[var(--dark-color-divider)] text-[var(--text-color)] px-[15px] pb-[30px] pt-[100px] min-[993px]:px-0 min-[993px]:py-[100px]">
			<div className="mx-auto flex max-w-[1200px] flex-col gap-10 min-[993px]:gap-20">
				<div>
					{/* Logo */}
					<div className="flex items-center gap-5">
						<Image
							src="/images/logo.svg"
							alt="Logo Sabor al Instante"
							width={50}
							height={50}
							className="h-[50px] w-[50px] object-cover"
						/>
						<span className="text-[26px] font-semibold text-[var(--color-light)]">
							Sabor Al Instante
						</span>
					</div>

					{/* Contacto */}
					<ul className="mt-[30px] flex flex-col gap-5">
						{contact.map((c) => (
							<li key={c.icon} className="flex items-start gap-3">
								<i
									className={`fa-solid ${c.icon} mt-1 text-[var(--color-primary)]`}
									aria-hidden="true"
								/>
								<span className="text-base min-[769px]:text-lg">{c.text}</span>
							</li>
						))}
						{/* Horario */}
						<li className="flex items-start gap-3">
							<i
								className="fa-solid fa-clock mt-1 text-[var(--color-primary)]"
								aria-hidden="true"
							/>
							<div className="flex flex-col gap-1 text-base min-[769px]:text-lg">
								{schedule.map((s) => (
									<span key={s}>{s}</span>
								))}
							</div>
						</li>
					</ul>
				</div>

				{/* Redes */}
				<div className="flex items-center max-[768px]:flex-col max-[768px]:gap-5">
					<ul className="flex flex-1 gap-5 max-[768px]:justify-center">
						{socials.map((s) => (
							<li key={s.label}>
								<a
									href={s.href}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={s.label}
									className="group flex h-[50px] w-[50px] items-center justify-center rounded-full border border-[var(--color-divider)] text-[var(--color-light)] no-underline transition-all duration-500 ease-in-out hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]"
								>
									<i
										className={`fa-brands ${s.icon} text-[22px] group-hover:text-[var(--dark-color-divider)]`}
										aria-hidden="true"
									/>
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</footer>
	);
}
