export async function getEurRateBnr(): Promise<number> {
  const isDev = process.env.NODE_ENV === 'development';
  const baseUrl = 'https://www.bnr.ro/nbrfxrates.xml';
  const proxy = 'https://cors-anywhere.herokuapp.com/';
  const url = isDev ? `${proxy}${baseUrl}` : baseUrl;
  const response = await fetch(url, {
    headers: {
      origin: 'http://localhost:3000',
    },
  });
  const xmlText = await response.text();
  const parser = new DOMParser();
  const xml = parser.parseFromString(xmlText, 'text/xml');
  const eurNode = xml.querySelector("Rate[Currency='EUR']");
  if (!eurNode) {
    throw new Error('EUR rate not found');
  }
  return parseFloat(eurNode.textContent!);
}

export async function getEurRateEcb(): Promise<number> {
  const isDev = process.env.NODE_ENV === 'development';
  const baseUrl =
    'https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml';
  const proxy = 'https://cors-anywhere.herokuapp.com/';
  const url = isDev ? `${proxy}${baseUrl}` : baseUrl;
  const response = await fetch(url, {
    headers: {
      origin: 'http://localhost:3000',
    },
  });
  const xmlText = await response.text();
  const parser = new DOMParser();
  const xml = parser.parseFromString(xmlText, 'text/xml');
  const eurNode = xml.querySelector("Cube[time] Cube[currency='RON']");
  if (!eurNode) {
    throw new Error('RON rate not found');
  }
  return parseFloat(eurNode.getAttribute('rate')!);
}
