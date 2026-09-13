'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  Bell,
  ChevronDown,
  CircleHelp,
  Download,
  Globe2,
  Landmark,
  Menu,
  Search,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';

type Flow = {
  bank: string;
  country: string;
  code: string;
  region: 'Asia' | 'Europe' | 'Americas' | 'Middle East';
  tonnes: number;
  reserves: number;
  month: string;
  direction: 'Buy' | 'Sell';
};

const flows: Flow[] = [
  { bank: 'People’s Bank of China', country: 'China', code: 'CN', region: 'Asia', tonnes: 18.2, reserves: 2292, month: 'Jun 2026', direction: 'Buy' },
  { bank: 'National Bank of Poland', country: 'Poland', code: 'PL', region: 'Europe', tonnes: 12.4, reserves: 461, month: 'Jun 2026', direction: 'Buy' },
  { bank: 'Reserve Bank of India', country: 'India', code: 'IN', region: 'Asia', tonnes: 8.7, reserves: 888, month: 'Jun 2026', direction: 'Buy' },
  { bank: 'Central Bank of Türkiye', country: 'Türkiye', code: 'TR', region: 'Middle East', tonnes: 6.3, reserves: 623, month: 'Jun 2026', direction: 'Buy' },
  { bank: 'Czech National Bank', country: 'Czechia', code: 'CZ', region: 'Europe', tonnes: 3.1, reserves: 65, month: 'Jun 2026', direction: 'Buy' },
  { bank: 'Central Bank of Uzbekistan', country: 'Uzbekistan', code: 'UZ', region: 'Asia', tonnes: -7.8, reserves: 361, month: 'Jun 2026', direction: 'Sell' },
  { bank: 'Central Bank of Kazakhstan', country: 'Kazakhstan', code: 'KZ', region: 'Asia', tonnes: -4.2, reserves: 291, month: 'Jun 2026', direction: 'Sell' },
  { bank: 'Banco Central de Bolivia', country: 'Bolivia', code: 'BO', region: 'Americas', tonnes: -2.6, reserves: 20, month: 'Jun 2026', direction: 'Sell' },
];

const priceData = [3168, 3185, 3176, 3214, 3202, 3248, 3261, 3252, 3288, 3305, 3294, 3340, 3368, 3351, 3392, 3418, 3402, 3446, 3472, 3494, 3478, 3521, 3548, 3586];

const regionData = [
  { label: 'Asia', value: 14.9, color: '#e8b44b' },
  { label: 'Europe', value: 15.5, color: '#fae7b1' },
  { label: 'Middle East', value: 6.3, color: '#a87821' },
  { label: 'Americas', value: -2.6, color: '#d86d59' },
];

const signals = [
  { label: 'Price momentum', value: 82, note: 'Strong', weight: '25%' },
  { label: 'ETF flows', value: 71, note: 'Positive', weight: '20%' },
  { label: 'Central bank demand', value: 88, note: 'Strong', weight: '25%' },
  { label: 'Real yields', value: 61, note: 'Supportive', weight: '15%' },
  { label: 'Positioning', value: 74, note: 'Elevated', weight: '15%' },
];

type SpotPrice = {
  price: number;
  change: number | null;
  changePercent: number | null;
  timestamp: string;
  source: string;
};

function linePath(values: number[], width = 640, height = 180) {
  const min = Math.min(...values) - 20;
  const max = Math.max(...values) + 20;
  return values.map((value, index) => {
    const x = (index / (values.length - 1)) * width;
    const y = height - ((value - min) / (max - min)) * height;
    return `${index === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
  }).join(' ');
}

function Flag({ code }: { code: string }) {
  return <span className="gold-flag" aria-label={code}>{code}</span>;
}

export function GoldTracker() {
  const [region, setRegion] = useState('All regions');
  const [query, setQuery] = useState('');
  const [showMethod, setShowMethod] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [spot, setSpot] = useState<SpotPrice | null>(null);
  const [spotError, setSpotError] = useState(false);

  useEffect(() => {
    let active = true;
    fetch('../api/gold-spot')
      .then(async (response) => {
        if (!response.ok) throw new Error('Price unavailable');
        return response.json() as Promise<SpotPrice>;
      })
      .then((data) => { if (active) setSpot(data); })
      .catch(() => { if (active) setSpotError(true); });
    return () => { active = false; };
  }, []);

  const filtered = useMemo(() => flows.filter((flow) => {
    const regionMatch = region === 'All regions' || flow.region === region;
    const queryMatch = `${flow.bank} ${flow.country}`.toLowerCase().includes(query.toLowerCase());
    return regionMatch && queryMatch;
  }), [query, region]);

  const net = flows.reduce((sum, flow) => sum + flow.tonnes, 0);
  const buyers = flows.filter((flow) => flow.direction === 'Buy').length;

  const exportCsv = () => {
    const rows = [
      ['Institution', 'Country', 'Region', 'Flow (tonnes)', 'Reserves (tonnes)', 'Period'],
      ...filtered.map((flow) => [flow.bank, flow.country, flow.region, flow.tonnes, flow.reserves, flow.month]),
    ];
    const csv = rows.map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(',')).join('\n');
    const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = 'aurum-signal-bank-flows.csv';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="gold-app">
      <header className="gold-header">
        <a className="gold-brand" href="/gold-tracker" aria-label="Aurum Signal home">
          <span className="gold-brand-mark"><Landmark size={19} /></span>
          <span>AURUM<span>SIGNAL</span></span>
        </a>
        <nav className={menuOpen ? 'gold-nav is-open' : 'gold-nav'}>
          <a className="active" href="#overview">Overview</a>
          <a href="#flows">Bank flows</a>
          <a href="#mood">Market mood</a>
          <a href="#methodology">Methodology</a>
        </nav>
        <div className="gold-header-actions">
          <button className="gold-icon-button" aria-label="Notifications"><Bell size={18} /></button>
          <button className="gold-live"><span /> {spot ? 'Live spot' : spotError ? 'Price delayed' : 'Connecting'}</button>
          <button className="gold-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu"><Menu size={21} /></button>
        </div>
      </header>

      <section className="gold-shell" id="overview">
        <div className="gold-intro">
          <div>
            <div className="gold-eyebrow"><Globe2 size={14} /> GLOBAL PRECIOUS METALS INTELLIGENCE</div>
            <h1>Follow the money.<br /><em>Read the mood.</em></h1>
            <p>Central-bank gold activity and market sentiment, distilled into one decisive view.</p>
          </div>
          <div className="gold-updated">
            <span>LAST UPDATED</span>
            <strong>22 JUL 2026 · 10:42 IST</strong>
            <small>Sample dataset for product preview</small>
          </div>
        </div>

        <div className="gold-kpis">
          <article className="gold-kpi featured">
            <div className="gold-card-label">GOLD SPOT · USD/OZ <span className="status-dot" /></div>
            <div className="gold-kpi-value">{spot ? `$${spot.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : spotError ? 'Unavailable' : 'Loading…'}</div>
            {spot?.changePercent != null && <div className={`gold-change ${spot.changePercent >= 0 ? 'up' : 'down'}`}>{spot.changePercent >= 0 ? <ArrowUpRight size={15} /> : <ArrowDownRight size={15} />}{Math.abs(spot.changePercent).toFixed(2)}% <span>vs previous close</span></div>}
            {!spot && <div className="gold-change"><span>{spotError ? 'Provider request failed' : 'Fetching Alpha Vantage'}</span></div>}
            <svg viewBox="0 0 640 180" preserveAspectRatio="none" className="gold-sparkline" aria-hidden="true">
              <defs><linearGradient id="priceFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#dcae45" stopOpacity=".30" /><stop offset="1" stopColor="#dcae45" stopOpacity="0" /></linearGradient></defs>
              <path d={`${linePath(priceData)} L 640 180 L 0 180 Z`} fill="url(#priceFill)" />
              <path d={linePath(priceData)} fill="none" stroke="#e0b54f" strokeWidth="3" vectorEffect="non-scaling-stroke" />
            </svg>
            {spot && <div className="gold-price-source">ALPHA VANTAGE · {new Date(spot.timestamp).toLocaleString()}</div>}
          </article>
          <article className="gold-kpi">
            <div className="gold-card-label">NET BANK FLOW · JUN</div>
            <div className="gold-kpi-value">+{net.toFixed(1)} <small>t</small></div>
            <div className="gold-change up"><ArrowUpRight size={15} /> 18.4% <span>vs May</span></div>
            <div className="gold-kpi-foot"><span>{buyers} net buyers</span><span>{flows.length - buyers} net sellers</span></div>
          </article>
          <article className="gold-kpi">
            <div className="gold-card-label">GOLD MOOD INDEX</div>
            <div className="gold-mood-number">76</div>
            <div className="gold-mood-label"><Sparkles size={14} /> BULLISH</div>
            <div className="gold-meter"><span style={{ width: '76%' }} /></div>
            <div className="gold-meter-ends"><span>Bearish</span><span>Neutral</span><span>Bullish</span></div>
          </article>
          <article className="gold-kpi">
            <div className="gold-card-label">GLOBAL RESERVES TRACKED</div>
            <div className="gold-kpi-value">5,001 <small>t</small></div>
            <div className="gold-change up"><ArrowUpRight size={15} /> 0.7% <span>this quarter</span></div>
            <div className="gold-kpi-foot single"><ShieldCheck size={15} /><span>8 reporting institutions</span></div>
          </article>
        </div>

        <section className="gold-grid" id="flows">
          <article className="gold-panel gold-flow-panel">
            <div className="gold-panel-head">
              <div><div className="gold-card-label">CENTRAL BANK ACTIVITY</div><h2>Who’s buying. Who’s selling.</h2></div>
              <button className="gold-export" onClick={exportCsv}><Download size={15} /> Export CSV</button>
            </div>
            <div className="gold-toolbar">
              <label className="gold-search"><Search size={16} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search bank or country" /></label>
              <label className="gold-select">Region<select value={region} onChange={(event) => setRegion(event.target.value)}><option>All regions</option><option>Asia</option><option>Europe</option><option>Americas</option><option>Middle East</option></select><ChevronDown size={15} /></label>
            </div>
            <div className="gold-table-wrap">
              <table className="gold-table">
                <thead><tr><th>Institution</th><th>Latest flow</th><th>Gold reserves</th><th>Period</th></tr></thead>
                <tbody>{filtered.map((flow) => (
                  <tr key={flow.bank}>
                    <td><div className="gold-bank"><Flag code={flow.code} /><span><strong>{flow.bank}</strong><small>{flow.country} · {flow.region}</small></span></div></td>
                    <td><span className={flow.tonnes > 0 ? 'flow-pill buy' : 'flow-pill sell'}>{flow.tonnes > 0 ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}{flow.tonnes > 0 ? '+' : ''}{flow.tonnes.toFixed(1)} t</span></td>
                    <td><strong>{flow.reserves.toLocaleString()} t</strong></td>
                    <td>{flow.month}</td>
                  </tr>
                ))}</tbody>
              </table>
              {!filtered.length && <div className="gold-empty">No institutions match those filters.</div>}
            </div>
          </article>

          <aside className="gold-panel gold-region-panel">
            <div className="gold-card-label">FLOW BY REGION · JUN</div>
            <h2>Demand map</h2>
            <div className="gold-donut-wrap">
              <div className="gold-donut"><div><strong>+34.1</strong><span>NET TONNES</span></div></div>
            </div>
            <div className="gold-region-list">{regionData.map((item) => (
              <div key={item.label}><span><i style={{ background: item.color }} />{item.label}</span><strong className={item.value < 0 ? 'negative' : ''}>{item.value > 0 ? '+' : ''}{item.value}t</strong></div>
            ))}</div>
          </aside>
        </section>

        <section className="gold-panel gold-mood-panel" id="mood">
          <div className="gold-panel-head">
            <div><div className="gold-card-label">SENTIMENT COMPOSITE</div><h2>Inside the Gold Mood Index</h2></div>
            <button className="gold-export" onClick={() => setShowMethod(true)}><CircleHelp size={15} /> How it works</button>
          </div>
          <div className="gold-signal-grid">
            <div className="gold-score-ring"><div><span>MOOD</span><strong>76</strong><em>BULLISH</em></div></div>
            <div className="gold-signals">{signals.map((signal) => (
              <div className="gold-signal" key={signal.label}>
                <div><strong>{signal.label}</strong><span>{signal.weight} weight</span></div>
                <div className="gold-signal-bar"><span style={{ width: `${signal.value}%` }} /></div>
                <b>{signal.value}</b><em>{signal.note}</em>
              </div>
            ))}</div>
            <div className="gold-readout">
              <div className="gold-card-label">TODAY’S READ</div>
              <blockquote>“Demand remains broad, while momentum and fund flows continue to reinforce the bullish regime.”</blockquote>
              <div className="gold-readout-stat"><span>7-day change</span><strong className="positive">+4 pts</strong></div>
              <div className="gold-readout-stat"><span>30-day high</span><strong>81</strong></div>
              <div className="gold-readout-stat"><span>Current regime</span><strong>Bullish</strong></div>
            </div>
          </div>
        </section>

        <footer className="gold-footer" id="methodology">
          <span>AURUM SIGNAL · RESEARCH PROTOTYPE</span>
          <p>Preview figures are illustrative and not investment advice. Production data should be connected to official central-bank releases, IMF IFS, World Gold Council and market-data providers.</p>
        </footer>
      </section>

      {showMethod && <div className="gold-modal-backdrop" onClick={() => setShowMethod(false)}>
        <div className="gold-modal" onClick={(event) => event.stopPropagation()}>
          <button onClick={() => setShowMethod(false)} aria-label="Close"><X size={19} /></button>
          <div className="gold-card-label">METHODOLOGY</div>
          <h2>One score. Five market signals.</h2>
          <p>The Gold Mood Index is a 0–100 composite. Each input is normalized against its trailing history, then multiplied by its stated weight.</p>
          <div className="gold-formula">25% momentum + 20% ETF flows + 25% central-bank demand + 15% real yields + 15% positioning</div>
          <div className="gold-bands"><span>0–34<br /><b>Bearish</b></span><span>35–64<br /><b>Neutral</b></span><span>65–100<br /><b>Bullish</b></span></div>
          <small>Real yields are scored inversely. Extreme positioning is penalized to account for crowding risk.</small>
        </div>
      </div>}
    </main>
  );
}
