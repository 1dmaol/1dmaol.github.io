import { useTranslation } from "react-i18next";
import { HELIOS_AI, HELIOS_ANALYTICS, HELIOS_CALENDAR, HELIOS_LEADER_ATTENDANCES, HELIOS_LEADER_HOME, HELIOS_LEADER_MEMBERS, HELIOS_LEADER_SHOP, HELIOS_MEMBER_ACCOUNTS, HELIOS_MEMBER_ADDITIONAL, HELIOS_MEMBER_MEMBERSHIPS, HELIOS_MEMBER_RESERVATIONS, HELIOS_MEMBER_SHOP, HELIOS_SHOP } from "../consts/images";



export const HeliosScenarios = () => {
	const { t } = useTranslation()

	return [
		{
			index: 0,
			title: "Apartado gerente",
			subtitle: "Dashboard para poder gestionar la tienda, sus centros, los entrenadores y los clientes, accesible tanto desde la aplicación como la página web. Además, incluye la gestión directa con la plataforma Verifactu.",
			features: [
				{
					name: "Inteligencia Artificial",
					description: "El dashboard está potenciado con inteligencia artificial que te ayuda a crear notificaciones adaptadas, gestionar nuevas ofertas y realizar análisis de los datos de tu negocio.",
					imageKey: HELIOS_AI,
					className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
				},
				{
					name: "Análisis de datos",
					description: "Con un solo clic, obtén informes detallados sobre el rendimiento de tu negocio, las tendencias de los clientes y las áreas de mejora.",
					imageKey: HELIOS_ANALYTICS,
					className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
				},
				{
					name: "Integración con Verifactu",
					description: "Conectado a un servidor propio que se comunica con la Agencia Tributaria, Helios está actualizado a los últimos estándares de facturación electrónica.",
					img: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Agencia_Tributaria.svg",
					className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
				},
				{
					name: "Tienda integrada",
					description: "Crea nuevos productos fácilmente, visualiza las ventas y gestiona el stock de cada centro internamente en la misma aplicación.",
					imageKey: HELIOS_SHOP,
					className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
				},
				{
					name: "Control del sistema",
					description: "Con Helios podrás tener al alcance de tu mano toda la información de tu negocio",
					advancedDescription:
						<div className="flex flex-col gap-2 px-4">
							<p>Con Helios podrás tener al alcance de tu mano toda la información de tu negocio, con las principales funcionalidades de:</p>
							<ul className="list-disc list-inside text-start px-4">
								<li>Ver y generar facturas.</li>
								<li>Enviar notificaciones a los usuarios (Push notifications).</li>
								<li>Cambiar tarifas, horarios y días festivos.</li>
								<li>Visualizar un calendario con las reservas.</li>
							</ul>
						</div>,
					imageKey: HELIOS_CALENDAR,
					className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
				}
			],
			stack: [
				"React",
				"Postgres",
				"Springboot",
				"Typescript",
				"Docker",
				"Firebase FCM",
				"Stripe",
				"DevOps",
				"Verifactu",
				"IA"
			]
		},
		{
			index: 1,
			title: "Apartado entrenador",
			subtitle: "Aplicación multiplataforma que permite al entrenador realizar gestiones en los miembros de manera rapida y visual.",
			features: [
				{
					name: "Listado y gestión de miembros",
					description: "El entrenador puede ver y gestionar rápidamente los miembros asignados a su centro, incluyendo detalles como adquisición de bonos, creación de facturas, compartir bonos y notas personalizadas.",
					imageKey: HELIOS_LEADER_MEMBERS,
					className: "lg:row-start-2 lg:row-end-4 lg:col-start-2 lg:col-end-4",
				},
				{
					name: "Análisis de rendimiento",
					description: "Con un solo clic, obtén informes detallados sobre el rendimiento de tu negocio, las tendencias de los clientes y las áreas de mejora.",
					imageKey: HELIOS_LEADER_HOME,
					className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
				},
				{
					name: "Control de asistencia",
					description: "Permite llevar un control detallado de las asistencias de los miembros a las sesiones, facilitando la gestión y el seguimiento del progreso de cada cliente.",
					imageKey: HELIOS_LEADER_ATTENDANCES,
					className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
				},
				{
					name: "Tienda integrada",
					description: "Añade productos fácilmente a los miembros, visualiza y cambia el estado de las últimas ventas.",
					imageKey: HELIOS_LEADER_SHOP,
					className: "lg:col-start-2 lg:col-end-4 lg:row-start-1 lg:row-end-2",
				}
			],
			stack: [
				"React Native",
				"Postgres",
				"Springboot",
				"Typescript",
				"IOS",
				"Android"
			]
		},
		{
			index: 2,
			title: "Apartado miembro",
			subtitle: "Aplicación multiplataforma que permite a los miembros gestionar su cuenta, sus facturas, sus reservas, sus bonos y sus familiares.",
			features: [
				{
					name: "Gestión de facturas y notificaciones internas",
					description: "El miembro puede ver y gestionar rápidamente sus facturas, así como recibir notificaciones importantes relacionadas con su cuenta, ofertas y actividades mediante Push Notifications.",
					imageKey: HELIOS_MEMBER_ADDITIONAL,
					className: "lg:row-start-1 lg:row-end-2 lg:col-start-3 lg:col-end-3",
				},
				{
					name: "Reserva y agenda de sesiones",
					description: "El miembro puede gestionar sus reservas y sesiones de manera eficiente, con acceso a un calendario que muestra todas sus actividades programadas. Además, Helios admite la reserva de multiples sesiones al mismo tiempo.",
					imageKey: HELIOS_MEMBER_RESERVATIONS,
					className: "lg:row-start-1 lg:row-end-4 lg:col-start-1 lg:col-end-2 lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
				},
				{
					name: "Soporte multicuenta para familiares",
					description: "El miembro puede gestionar múltiples cuentas para sus familiares, facilitando la administración de reservas, bonos y facturas de cada familiar desde una única cuenta principal.",
					imageKey: HELIOS_MEMBER_ACCOUNTS,
					className: "lg:col-start-3 lg:col-end-3 lg:row-start-3 lg:row-end-3",
				},
				{
					name: "Tienda integrada",
					description: "Con una interfaz intuitiva, el miembro puede ver y adquirir los productos disponibles para la compra, así como ver sus compras anteriores.",
					imageKey: HELIOS_MEMBER_SHOP,
					className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-2",
				},
				{
					name: "Adquisición y gestión de bonos",
					description: "El miembro podrá adquirir y ampliar nuevos bonos y sesiones de cualquier tipo de actividad, sin importar el tipo de negocio.",
					imageKey: HELIOS_MEMBER_MEMBERSHIPS,
					className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
				}],
			stack: [
				"React Native",
				"Postgres",
				"Springboot",
				"Typescript",
				"IOS",
				"Android"
			]
		}
	]
}


export const HeliosThemes = () => {
	const { t } = useTranslation()

	return [
		{
			id: "dark",
			type: 1,
			color: "#1e1e1e",
			images: {
				HELIOS_AI: new URL('../assets/viking/helios_ai_dark.png', import.meta.url).href,
				HELIOS_ANALYTICS: new URL('../assets/viking/helios_admin_analytics_dark.png', import.meta.url).href,
				HELIOS_SHOP: new URL('../assets/viking/helios_shop_dark.png', import.meta.url).href,
				HELIOS_CALENDAR: new URL('../assets/viking/helios_admin_calendar_dark.png', import.meta.url).href,
				HELIOS_MEMBER_ACCOUNTS: new URL('../assets/viking/helios_member_home_light.png', import.meta.url).href,
				HELIOS_MEMBER_MEMBERSHIPS: new URL('../assets/viking/helios_member_memberships_light.png', import.meta.url).href,
				HELIOS_MEMBER_RESERVATIONS: new URL('../assets/viking/helios_member_reservations_light.png', import.meta.url).href,
				HELIOS_MEMBER_ADDITIONAL: new URL('../assets/viking/helios_member_additional_light.png', import.meta.url).href,
				HELIOS_MEMBER_SHOP: new URL('../assets/viking/helios_member_shop_light.png', import.meta.url).href,
				HELIOS_LEADER_HOME: new URL('../assets/viking/helios_leader_home_light.png', import.meta.url).href,
				HELIOS_LEADER_MEMBERS: new URL('../assets/viking/helios_leader_members_light.png', import.meta.url).href,
				HELIOS_LEADER_ATTENDANCES: new URL('../assets/viking/helios_leader_attendances_light.png', import.meta.url).href,
				HELIOS_LEADER_SHOP: new URL('../assets/viking/helios_leader_shop_light.png', import.meta.url).href
			}
		},
		{
			id: "light",
			type: 1,
			color: "#e1e1e1",
			images: {
				HELIOS_AI: new URL('../assets/viking/helios_ai_dark.png', import.meta.url).href,
				HELIOS_ANALYTICS: new URL('../assets/viking/helios_admin_analytics_dark.png', import.meta.url).href,
				HELIOS_SHOP: new URL('../assets/viking/helios_shop_dark.png', import.meta.url).href,
				HELIOS_CALENDAR: new URL('../assets/viking/helios_admin_calendar_dark.png', import.meta.url).href,
				HELIOS_MEMBER_ACCOUNTS: new URL('../assets/viking/helios_member_accounts_light.png', import.meta.url).href,
				HELIOS_MEMBER_MEMBERSHIPS: new URL('../assets/viking/helios_member_memberships_light.png', import.meta.url).href,
				HELIOS_MEMBER_RESERVATIONS: new URL('../assets/viking/helios_member_reservations_light.png', import.meta.url).href,
				HELIOS_MEMBER_ADDITIONAL: new URL('../assets/viking/helios_member_additional_light.png', import.meta.url).href,
				HELIOS_MEMBER_SHOP: new URL('../assets/viking/helios_member_shop_light.png', import.meta.url).href,
				HELIOS_LEADER_HOME: new URL('../assets/viking/helios_leader_home_light.png', import.meta.url).href,
				HELIOS_LEADER_MEMBERS: new URL('../assets/viking/helios_leader_members_light.png', import.meta.url).href,
				HELIOS_LEADER_ATTENDANCES: new URL('../assets/viking/helios_leader_attendances_light.png', import.meta.url).href,
				HELIOS_LEADER_SHOP: new URL('../assets/viking/helios_leader_shop_light.png', import.meta.url).href
			}
		},
		{
			id: "custom",
			type: 0
		}
	]
}