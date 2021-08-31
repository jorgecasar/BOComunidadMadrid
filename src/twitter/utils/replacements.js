import { acronyms } from './replacements/acronyms.js';
import { hashtags } from './replacements/hashtags.js';
import { councils } from './replacements/councils.js';
import { counseling } from './replacements/counseling.js';
import { organizations } from './replacements/organizations.js';

export const getRegex = (replacements) => new RegExp(`(?:^|\\b)(${Object.keys(replacements).join("|")})(?:$|\\b)`, 'gi');
const makeReplacement = (str, replacements) => str.replace(getRegex(replacements), match => replacements[match]);


export const replaceCouncilsAccounts = str => makeReplacement(str, councils);
export const replaceCounselingAccounts = str => makeReplacement(str, counseling);
export const replaceOrganizationsAccounts = str => makeReplacement(str, organizations);
export const replaceHashtags = str => makeReplacement(str, hashtags);
export const replaceAcronyms = str => makeReplacement(str, acronyms);

export const councilFullNames = new RegExp(`(?:(?:(el|del)\\s+)?(?:Ayuntamiento de)\\s+)(${Object.keys(councils).join("|")})`, 'gi');
export const replaceFullNameCouncil = str => str.replace(councilFullNames, (match, $1, $2) => $1 === 'del' ? `de ${councils[$2]}` : councils[$2]);
