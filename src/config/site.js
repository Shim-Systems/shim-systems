const SITE_URL = import.meta.env.PUBLIC_SITE_URL || "https://shim.systems";

export const siteConfig = {
	title: "SHIM — Systems Practice",
	author: "SHIM Systems Practice",
	url: SITE_URL,
	utm: {
		source: SITE_URL,
		medium: "referral",
		campaign: "navigation",
	},
	meta: {
		title: "SHIM — Systems Practice",
		description:
			"Practical systems architecture for environmental and social-impact enterprises. Reclaim your time, amplify your impact.",
		keywords:
			"systems architecture, environmental design, sustainable engineering, local first software, python development, operational efficiency",
		image: `${SITE_URL}/assets/preview.jpg`,
		twitterHandle: "",
	},
	social: {
		github: "", // Leave blank or add your company GitHub if you prefer
	},
};