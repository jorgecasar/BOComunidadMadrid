import { updateStatus } from './utils/updateStatus.js';

export const tweetNewBulletin = ({ number, sectionsMap, total, summary }) => {
	const content = Object.entries(sectionsMap).map(([key, value]) => `- ${key} (${value})`).join('\n');
	const heading = `🔔 Ya disponible el Boletín nº ${number}, con ${total} anuncios:`;
	const footer = `Ver sumario 👇
${summary}`;
	const message = `${heading}
${content}
${footer}`;

	updateStatus(message);
}
