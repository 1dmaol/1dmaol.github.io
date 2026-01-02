import { useTranslation } from "react-i18next";
import { HeliosScenarios, HeliosThemes } from "./helios";

export const ProjectsData = () => {
	const { t } = useTranslation()

	return [
		{
			title: "Helios",
			body: t("project_helios_body"),
			order: 1,
			fav: true,
			awards: [
				{
					title: "🏋🏼 " + t("real_case"),
					url: "https://vikingcentro.com/",
					record: {
						title: t("users"),
						amount: "+1k"
					}
				}
			],
			themes: HeliosThemes(),
			scenarios: HeliosScenarios(),
			achievements: [
				{
					title: t("project_helios_title1"),
					content: t("project_helios_hint1"),
					image: new URL('../assets/viking/image_hint_1.png', import.meta.url).href
				},
				{
					title: t("project_helios_title2"),
					content: t("project_helios_hint2"),
					image: new URL('../assets/viking/image_hint_2.png', import.meta.url).href
				},
				{
					title: t("project_helios_title3"),
					content: t("project_helios_hint3"),
					image: new URL('../assets/viking/image_hint_3.png', import.meta.url).href
				},
				{
					title: t("project_helios_title4"),
					content: t("project_helios_hint4"),
					image: new URL('../assets/viking/image_hint_4.png', import.meta.url).href
				}
			],
			href: "https://github.com/marcocaballero/portfolio",
			image: new URL('../assets/viking/image_hint_1.png', import.meta.url).href,
			shopRef: {
				image: new URL('../assets/google-apple-store-logo.png', import.meta.url).href
			},
			stack: [
				"React",
				"React Native",
				"Postgres",
				"Springboot",
				"Typescript",
				"IOS",
				"Android",
				"Docker",
				"Firebase FCM",
				"Stripe",
				"DevOps",
				"Verifactu",
				"IA"
			]
		},
		{
			title: "Enso",
			body: t("project_enso_body"),
			order: 2,
			href: "https://github.com/marcocaballero/portfolio",
			achievements: [
				{
					title: t("project_enso_title1"),
					content: t("project_enso_hint1"),
					image: new URL('../assets/EnsoIphoneMac.png', import.meta.url).href
				},
				{
					title: t("project_enso_title2"),
					content: t("project_enso_hint2"),
					image: new URL('../assets/EnsoIphoneMac.png', import.meta.url).href
				}
			],
			image: new URL('../assets/EnsoIphoneMac.png', import.meta.url).href,
			website: "https://ensosplit.com/",
			//github: { namespace: "1dmaol", repo: "Enso" },
			stack: [
				"React",
				"Google Drive",
				"Typescript",
				"Tailwind",
				"Render.com",
			]
		},
		{
			title: "iDrill",
			order: 3,
			body: t("project_idrill_body"),
			href: "https://github.com/marcocaballero/portfolio",
			achievements: [
				{
					title: t("project_idrill_title1"),
					content: t("project_idrill_hint1"),
					image: new URL('../assets/idrillonPhone.png', import.meta.url).href
				},
				{
					title: t("project_idrill_title2"),
					content: t("project_idrill_hint2"),
					image: new URL('../assets/setupiDrill.png', import.meta.url).href
				},
				{
					title: t("project_idrill_title3"),
					content: t("project_idrill_hint3"),
					image: new URL('../assets/idrilltest_1.jpeg', import.meta.url).href
				},
				{
					title: t("project_idrill_title4"),
					content: t("project_idrill_hint4"),
					image: new URL('../assets/idrilltest_2.jpeg', import.meta.url).href
				}
			],
			image: new URL('../assets/idrillonPhone.png', import.meta.url).href,
			awards: [
				{
					title: "🥇 " + t("best_tfg"),
					url: "https://www.linkedin.com/feed/update/urn:li:activity:7026505574502514688/",
				},
				{
					title: "🧑🏻‍⚕️ " + t("real_case") + " (IVIO)",
					url: "https://ivio.es/"
				}
			],
			stack: [
				"React",
				"Unity",
				"C#",
				"AR",
				"Springboot"
			]
		},
		{
			title: t("project_see_more_title"),
			body: t("project_see_more_body"),
			order: 4,
			href: "https://www.linkedin.com/in/marc-oller/details/projects/",
			redirect: true,
			stack: [
			]
		}
	];
}