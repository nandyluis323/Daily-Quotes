import { FontData } from '../utils/setFont';
import { helvetica } from './woff/helvetica';
import { arial } from './woff/arial';
import { verdana } from './woff/verdana';
import { tahoma } from './woff/tahoma';
import { trebuchet_ms } from './woff/trebuchet_ms';
import { delius } from './woff/delius';
import { open_sans } from './woff/open_sans';
import { times_new_roman } from './woff/times_new_roman';
import { georgia } from './woff/georgia';
import { garamond } from './woff/garamond';
import { libre_baskerville } from './woff/libre_baskerville';
import { courier_new } from './woff/courier_new';
import { merienda } from './woff/merienda';
import { sofia } from './woff/sofia';
import { medieval_sharp } from './woff/medieval_sharp';

const fontFamilies: { [key: string]: FontData } = {
	// San Serif fonts (fallback: san-serif)
	helvetica: {
		name: 'Helvetica',
		family: 'Helvetica, sans-serif',
		woff: helvetica,
	},
	arial: {
		name: 'Arial',
		family: 'Arial, sans-serif',
		woff: arial,
	},
	verdana: {
		name: 'Verdana',
		family: 'Verdana, sans-serif',
		woff: verdana,
	},
	tahoma: {
		name: 'Tahoma',
		family: 'Tahoma, sans-serif',
		woff: tahoma,
	},
	trebuchet_ms: {
		name: 'Trebuchet MS',
		family: "'Trebuchet MS', sans-serif",
		woff: trebuchet_ms,
	},
	delius: {
		name: 'Delius',
		family: 'Delius, sans-serif',
		woff: delius,
	},
	open_sans: {
		name: 'Open Sans',
		family: "'Open Sans', sans-serif",
		woff: open_sans,
	},
	// Serif fonts (fallback: serif)
	times_new_roman: {
		name: 'Times New Roman',
		family: "'Times New Roman', serif",
		woff: times_new_roman,
	},
	georgia: {
		name: 'Georgia',
		family: 'Georgia, serif',
		woff: georgia,
	},
	garamond: {
		name: 'Garamond',
		family: 'Garamond, serif',
		woff: garamond,
	},
	libre_baskerville: {
		name: 'Libre Baskerville',
		family: "'Libre Baskerville', serif",
		woff: libre_baskerville,
	},
	// Monospace fonts (fallback: monospace)
	courier_new: {
		name: 'Courier New',
		family: "'Courier New', monospace",
		woff: courier_new,
	},
	// Cursive fonts (fallback: cursive)
	merienda: {
		name: 'Merienda',
		family: 'Merienda, cursive',
		woff: merienda,
	},
	sofia: {
		name: 'Sofia',
		family: 'Sofia, cursive',
		woff: sofia,
	},
	// Fantasy and Display fonts (fallback: fantasy)
	medieval_sharp: {
		name: 'MedievalSharp',
		family: 'MedievalSharp, fantasy',
		woff: medieval_sharp,
	},
};

export { fontFamilies };