
export const SECTORS = [
  'Agriculture & Agribusiness',
  'Fintech & Digital Payments',
  'Mining & Natural Resources',
  'Renewable Energy & GreenTech',
  'Oil & Gas',
  'Telecommunications & 5G',
  'Logistics & Supply Chain',
  'Healthcare & Pharmaceuticals',
  'Infrastructure & Construction',
  'Manufacturing & Industrial',
  'Retail & E-commerce',
  'Education & EdTech',
  'Tourism & Hospitality',
  'Creative Industries & Media',
  'Financial Services & Banking',
  'Water, Sanitation & Hygiene',
  'Real Estate & Urban Development',
  'Aerospace & Defense'
];

export const AFRICAN_COUNTRIES = [
  // North Africa
  { name: 'Algeria', code: 'DZ', region: 'North' },
  { name: 'Egypt', code: 'EG', region: 'North' },
  { name: 'Libya', code: 'LY', region: 'North' },
  { name: 'Morocco', code: 'MA', region: 'North' },
  { name: 'Sudan', code: 'SD', region: 'North' },
  { name: 'Tunisia', code: 'TN', region: 'North' },
  
  // West Africa
  { name: 'Benin', code: 'BJ', region: 'West' },
  { name: 'Burkina Faso', code: 'BF', region: 'West' },
  { name: 'Cabo Verde', code: 'CV', region: 'West' },
  { name: 'Gambia', code: 'GM', region: 'West' },
  { name: 'Ghana', code: 'GH', region: 'West' },
  { name: 'Guinea', code: 'GN', region: 'West' },
  { name: 'Guinea-Bissau', code: 'GW', region: 'West' },
  { name: 'Ivory Coast (Côte d\'Ivoire)', code: 'CI', region: 'West' },
  { name: 'Liberia', code: 'LR', region: 'West' },
  { name: 'Mali', code: 'ML', region: 'West' },
  { name: 'Mauritania', code: 'MR', region: 'West' },
  { name: 'Niger', code: 'NE', region: 'West' },
  { name: 'Nigeria', code: 'NG', region: 'West' },
  { name: 'Senegal', code: 'SN', region: 'West' },
  { name: 'Sierra Leone', code: 'SL', region: 'West' },
  { name: 'Togo', code: 'TG', region: 'West' },
  
  // Central Africa
  { name: 'Cameroon', code: 'CM', region: 'Central' },
  { name: 'Central African Republic', code: 'CF', region: 'Central' },
  { name: 'Chad', code: 'TD', region: 'Central' },
  { name: 'Congo, Democratic Republic of the', code: 'CD', region: 'Central' },
  { name: 'Congo, Republic of the', code: 'CG', region: 'Central' },
  { name: 'Equatorial Guinea', code: 'GQ', region: 'Central' },
  { name: 'Gabon', code: 'GA', region: 'Central' },
  { name: 'Sao Tome and Principe', code: 'ST', region: 'Central' },
  
  // East Africa
  { name: 'Burundi', code: 'BI', region: 'East' },
  { name: 'Comoros', code: 'KM', region: 'East' },
  { name: 'Djibouti', code: 'DJ', region: 'East' },
  { name: 'Eritrea', code: 'ER', region: 'East' },
  { name: 'Ethiopia', code: 'ET', region: 'East' },
  { name: 'Kenya', code: 'KE', region: 'East' },
  { name: 'Madagascar', code: 'MG', region: 'East' },
  { name: 'Mauritius', code: 'MU', region: 'East' },
  { name: 'Rwanda', code: 'RW', region: 'East' },
  { name: 'Seychelles', code: 'SC', region: 'East' },
  { name: 'Somalia', code: 'SO', region: 'East' },
  { name: 'South Sudan', code: 'SS', region: 'East' },
  { name: 'Tanzania', code: 'TZ', region: 'East' },
  { name: 'Uganda', code: 'UG', region: 'East' },
  
  // Southern Africa
  { name: 'Angola', code: 'AO', region: 'South' },
  { name: 'Botswana', code: 'BW', region: 'South' },
  { name: 'Eswatini', code: 'SZ', region: 'South' },
  { name: 'Lesotho', code: 'LS', region: 'South' },
  { name: 'Malawi', code: 'MW', region: 'South' },
  { name: 'Mozambique', code: 'MZ', region: 'South' },
  { name: 'Namibia', code: 'NA', region: 'South' },
  { name: 'South Africa', code: 'ZA', region: 'South' },
  { name: 'Zambia', code: 'ZM', region: 'South' },
  { name: 'Zimbabwe', code: 'ZW', region: 'South' }
].sort((a, b) => a.name.localeCompare(b.name));

export const DATA_SOURCES = [
  { name: 'AfDB Africa Information Highway', url: 'https://dataportal.opendataforafrica.org/', type: 'Macro' },
  { name: 'World Bank Open Data', url: 'https://donnees.banquemondiale.org/', type: 'Macro' },
  { name: 'openAFRICA', url: 'https://open.africa/', type: 'Dataset' },
  { name: 'AFRISTAT', url: 'https://www.afristat.org/', type: 'Stats' },
  { name: 'OpenCorporates', url: 'https://opencorporates.com/', type: 'Business' },
  { name: 'NewsData.io', url: 'https://newsdata.io/', type: 'News' }
];
