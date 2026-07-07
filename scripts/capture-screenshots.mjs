import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const outputDir = new URL("../public/screenshots/", import.meta.url);

function architectureSvg() {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="1400" height="980" viewBox="0 0 1400 980">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0 L0 0 0 40" fill="none" stroke="rgba(255,255,255,0.06)" />
        </pattern>
      </defs>
      <rect width="1400" height="980" fill="#07110d" />
      <rect width="1400" height="980" fill="url(#grid)" />

      <text x="54" y="72" fill="#9fe7be" font-size="13" font-weight="800" letter-spacing="3">LEDGER CORE API / API CENTRAL LEDGER</text>
      <text x="54" y="142" fill="#f4fff8" font-size="58" font-weight="900">NestJS + Prisma + PostgreSQL</text>
      <text x="54" y="184" fill="#a9b8af" font-size="20">Enterprise reconciliation backend with fake data / Backend de conciliacion con datos simulados</text>

      <g transform="translate(54, 250)">
        <rect width="380" height="170" rx="10" fill="#102018" stroke="#244434" />
        <text x="24" y="42" fill="#9fe7be" font-size="14" font-weight="800">HTTP API</text>
        <text x="24" y="82" fill="#f4fff8" font-size="28" font-weight="900">NestJS modules</text>
        <text x="24" y="118" fill="#a9b8af" font-size="16">/api/health</text>
        <text x="24" y="146" fill="#a9b8af" font-size="16">/api/reconciliations</text>
      </g>

      <g transform="translate(510, 250)">
        <rect width="380" height="170" rx="10" fill="#102018" stroke="#244434" />
        <text x="24" y="42" fill="#9fe7be" font-size="14" font-weight="800">DOMAIN</text>
        <text x="24" y="82" fill="#f4fff8" font-size="28" font-weight="900">Reconciliation service</text>
        <text x="24" y="118" fill="#a9b8af" font-size="16">DTO validation / Validacion DTO</text>
        <text x="24" y="146" fill="#a9b8af" font-size="16">Summary + workload queries</text>
      </g>

      <g transform="translate(966, 250)">
        <rect width="380" height="170" rx="10" fill="#102018" stroke="#244434" />
        <text x="24" y="42" fill="#9fe7be" font-size="14" font-weight="800">PERSISTENCE</text>
        <text x="24" y="82" fill="#f4fff8" font-size="28" font-weight="900">Prisma ORM</text>
        <text x="24" y="118" fill="#a9b8af" font-size="16">Reconciliation model</text>
        <text x="24" y="146" fill="#a9b8af" font-size="16">Event history relation</text>
      </g>

      <path d="M434 335 L510 335" stroke="#9fe7be" stroke-width="3" />
      <path d="M890 335 L966 335" stroke="#9fe7be" stroke-width="3" />

      <g transform="translate(54, 510)">
        <rect width="1292" height="250" rx="10" fill="#f4fff8" />
        <text x="30" y="50" fill="#173025" font-size="15" font-weight="900" letter-spacing="2">LOCAL INFRASTRUCTURE / INFRAESTRUCTURA LOCAL</text>
        <text x="30" y="104" fill="#07110d" font-size="34" font-weight="900">Docker Compose runs PostgreSQL on port 5438</text>
        <text x="30" y="150" fill="#52665b" font-size="19">Seed creates fake ERP, billing, vendor, and reconciliation records.</text>
        <text x="30" y="188" fill="#52665b" font-size="19">El seed crea datos falsos de ERP, facturacion, proveedores y conciliaciones.</text>
        <rect x="910" y="58" width="314" height="122" rx="8" fill="#07110d" />
        <text x="934" y="100" fill="#9fe7be" font-family="monospace" font-size="16">docker compose up -d</text>
        <text x="934" y="136" fill="#9fe7be" font-family="monospace" font-size="16">npm run prisma:seed</text>
      </g>

      <g transform="translate(54, 818)">
        <text x="0" y="0" fill="#a9b8af" font-size="16">Validation: TypeScript strict, ESLint, Jest, Prisma generate, Docker-ready.</text>
        <text x="0" y="34" fill="#a9b8af" font-size="16">Validacion: TypeScript strict, ESLint, Jest, Prisma generate y Docker.</text>
      </g>
    </svg>`;
}

async function main() {
  await mkdir(outputDir, { recursive: true });
  await sharp(Buffer.from(architectureSvg())).png().toFile(
    fileURLToPath(new URL("./ledger-core-api-architecture.png", outputDir)),
  );
}

await main();
