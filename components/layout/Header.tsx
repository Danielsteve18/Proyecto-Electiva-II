'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const links = [
	{ href: '/', label: 'Inicio' },
	{ href: '/menu', label: 'Menú' },
	{ href: '/reserva', label: 'Reservas' },
	{ href: '/contacto', label: 'Contacto' },
	{ href: '/sobrenosotros', label: 'Sobre nosotros' },
];

// Breakpoint del sitio original: 992px
export function Header() {
	const [open, setOpen] = useState(false);
	const close = () => setOpen(false);

	return (
		<header className="absolute left-0 top-0 z-[1000] w-full border-b border-[var(--color-divider)] bg-[#00000060] p-[15px] min-[993px]:px-0 min-[993px]:py-[30px]">
			<div className="mx-auto flex max-w-[1200px] items-center gap-[50px]">
				{/* Logo */}
				<Link
					href="/"
					onClick={close}
					className="flex flex-1 items-center gap-5 no-underline min-[993px]:flex-none"
				>
					<Image
						src="/images/logo.svg"
						alt="Logo Sabor al Instante"
						width={50}
						height={50}
						className="h-[50px] w-[50px] object-cover"
						priority
					/>
					<span className="text-[26px] font-semibold text-[var(--color-light)]">
						sabor al instante
					</span>
				</Link>

				{/* Navegación desktop */}
				<nav
					aria-label="Principal"
					className="flex flex-1 justify-center max-[992px]:hidden"
				>
					<ul className="flex items-center gap-10">
						{links.map((l) => (
							<li key={l.href}>
								<Link
									href={l.href}
									className="text-base font-medium text-[var(--color-light)] no-underline transition-colors duration-300 hover:text-[var(--color-primary)]"
								>
									{l.label}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				{/* Botón Login (desktop) */}
				<Link
					href="/login"
					className="flex items-center gap-[10px] rounded-full bg-[var(--color-primary)] px-[25px] py-[17px] text-base font-bold capitalize text-[var(--color-light)] no-underline transition-colors duration-300 hover:bg-[var(--color-light)] hover:text-[var(--dark-color-divider)] max-[992px]:hidden"
				>
					Login
					<i className="fa-solid fa-arrow-right" aria-hidden="true" />
				</Link>

				{/* Botón hamburguesa (móvil) */}
				<button
					type="button"
					aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
					aria-expanded={open}
					aria-controls="menu-responsive"
					onClick={() => setOpen((o) => !o)}
					className="hidden h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-[7px] border-none bg-[var(--color-primary)] text-[var(--color-light)] max-[992px]:flex"
				>
					<i
						className={`fa-solid ${open ? 'fa-xmark' : 'fa-bars'} text-[22px]`}
						aria-hidden="true"
					/>
				</button>
			</div>

			{/* Menú desplegable (móvil) */}
			<div
				id="menu-responsive"
				className={`absolute left-0 top-full w-full overflow-hidden bg-[var(--color-primary)] transition-[max-height] duration-300 ease-in-out min-[993px]:hidden ${
					open ? 'max-h-[400px]' : 'max-h-0'
				}`}
			>
				<ul className="flex flex-col items-start gap-5 p-5">
					{[...links, { href: '/login', label: 'Login' }].map((l) => (
						<li key={l.href} className="w-full">
							<Link
								href={l.href}
								onClick={close}
								tabIndex={open ? 0 : -1}
								className="block text-base font-normal text-[var(--color-light)] no-underline transition-colors duration-300 hover:text-[var(--dark-color-divider)]"
							>
								{l.label}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</header>
	);
}
