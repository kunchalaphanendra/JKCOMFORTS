import fs from 'fs';
import path from 'path';
import https from 'https';

const LOGO_DIR = path.join(process.cwd(), 'public', 'logos');

// Ensure logo directory exists
if (!fs.existsSync(LOGO_DIR)) {
  fs.mkdirSync(LOGO_DIR, { recursive: true });
}

const BRANDS = [
  { id: 'pratyusha', domain: 'pratyushadevelopers.in' },
  { id: 'varsity', domain: 'varsitymgmt.com' },
  { id: 'foodbazaar', domain: 'foodbazaar.com' }, // clearbit logo for foodbazaar
  { id: 'reliancefresh', url: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Reliance_Retail_Logo.svg' },
  { id: 'bommarillu', url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=120&auto=format&fit=crop&q=60' }, // food preview
  { id: 'accenture', domain: 'accenture.com' },
  { id: 'hdfcbank', domain: 'hdfcbank.com' },
  { id: 'lahari', domain: 'lahariresorts.com' },
  { id: 'hdbfinance', domain: 'hdbfs.com' },
  { id: 'chaitanya', domain: 'srichaitanya.net' },
  { id: 'publicschool', url: 'https://upload.wikimedia.org/wikipedia/commons/0/05/School_bus_icon.svg' },
  { id: 'icicibank', domain: 'icicibank.com' },
  { id: 'sureshtextiles', url: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=120&auto=format&fit=crop&q=60' },
  { id: 'nissan', domain: 'nissanusa.com' },
  { id: 'nclgroup', domain: 'nclind.com' },
  { id: 'unisys', domain: 'unisys.com' },
  { id: 'invecas', domain: 'invecas.com' },
  { id: 'apollo', domain: 'apollohospitals.com' },
  { id: 'mythri', domain: 'mythrihospital.net' },
  { id: 'thumby', domain: 'thumbayhospital.com' },
  { id: 'sanzyme', domain: 'sanzyme.com' },
  { id: 'eamobile', domain: 'ea.com' },
  { id: 'eprocure', url: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg' },
  { id: 'axisbank', domain: 'axisbank.com' },
  { id: 'amazon', domain: 'amazon.com' },
  { id: 'govtemblem', url: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg' },
  { id: 'hyundai', domain: 'hyundai.com' },
  { id: 'mmtc', url: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/MMTC_Limited_logo.png' },
  { id: 'varunmotors', domain: 'varunmotors.com' },
  { id: 'lic', domain: 'licindia.in' },
  { id: 'kfc', domain: 'kfc.com' },
  { id: 'macconstruct', url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=120&auto=format&fit=crop&q=60' },
  { id: 'idbibank', domain: 'idbibank.in' },
  { id: 'adityabirla', domain: 'adityabirla.com' },
  { id: 'lodha', domain: 'lodhagroup.in' },
  { id: 'vasaneyecare', domain: 'vasaneyecare.in' },
  { id: 'indiacements', url: 'https://upload.wikimedia.org/wikipedia/en/3/37/The_India_Cements_Limited_Logo.svg' },
  { id: 'more', domain: 'moreretail.in' }
];

function download(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        // follow redirect
        download(res.headers.location, filepath).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' status: ${res.statusCode}`));
        return;
      }
      const fileStream = fs.createWriteStream(filepath);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function run() {
  console.log('Downloading brand logos...');
  for (const brand of BRANDS) {
    const filename = `${brand.id}.${brand.url && brand.url.endsWith('.png') ? 'png' : brand.url && brand.url.endsWith('.jpg') ? 'jpg' : 'svg'}`;
    const dest = path.join(LOGO_DIR, filename);
    const url = brand.url || `https://logo.clearbit.com/${brand.domain}?size=256`;
    console.log(`Downloading ${brand.id} from ${url}...`);
    try {
      await download(url, dest);
      console.log(`Saved ${filename}`);
    } catch (err) {
      console.error(`Error downloading ${brand.id}:`, err.message);
      // Create a fallback colored box SVG if download fails
      const fallbackSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40"><rect width="120" height="40" fill="#1f2937" rx="6"/><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="11" fill="#f3f4f6">${brand.id.toUpperCase()}</text></svg>`;
      fs.writeFileSync(path.join(LOGO_DIR, `${brand.id}.svg`), fallbackSvg);
      console.log(`Saved fallback for ${brand.id}`);
    }
  }
  console.log('Finished downloading brand logos!');
}

run();
