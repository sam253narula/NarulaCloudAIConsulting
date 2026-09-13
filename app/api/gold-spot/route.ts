import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

type AlphaVantageSpot = {
  symbol?: string;
  price?: string;
  timestamp?: string;
  currency?: string;
  exchange?: string;
  volume?: string;
  previous_close?: string;
  change?: string;
  change_percentage?: string;
  bid?: string;
  ask?: string;
  [key: string]: unknown;
};

export async function GET() {
  const apiKey = process.env.ALPHA_VANTAGE_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: 'Alpha Vantage API key is not configured.' }, { status: 503 });
  }

  const url = new URL('https://www.alphavantage.co/query');
  url.searchParams.set('function', 'GOLD_SILVER_SPOT');
  url.searchParams.set('symbol', 'GOLD');
  url.searchParams.set('apikey', apiKey);

  try {
    const response = await fetch(url, { next: { revalidate: 300 } });
    if (!response.ok) throw new Error(`Provider returned ${response.status}`);

    const payload = await response.json() as AlphaVantageSpot;
    const providerMessage = payload.Note ?? payload.Information ?? payload['Error Message'];
    if (providerMessage) {
      return NextResponse.json({ error: String(providerMessage) }, { status: 503 });
    }

    const price = Number(payload.price);
    if (!Number.isFinite(price)) {
      return NextResponse.json({ error: 'Alpha Vantage returned an unexpected response.' }, { status: 502 });
    }

    const previousClose = Number(payload.previous_close);
    const suppliedChange = Number(payload.change);
    const change = Number.isFinite(suppliedChange)
      ? suppliedChange
      : Number.isFinite(previousClose) ? price - previousClose : null;
    const rawPercent = String(payload.change_percentage ?? '').replace('%', '').trim();
    const suppliedPercent = rawPercent ? Number(rawPercent) : Number.NaN;
    const changePercent = Number.isFinite(suppliedPercent)
      ? suppliedPercent
      : change !== null && Number.isFinite(previousClose) && previousClose !== 0
        ? (change / previousClose) * 100
        : null;

    return NextResponse.json({
      symbol: payload.symbol ?? 'GOLD',
      price,
      currency: payload.currency ?? 'USD',
      change,
      changePercent,
      timestamp: payload.timestamp ?? new Date().toISOString(),
      source: 'Alpha Vantage',
    }, { headers: { 'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600' } });
  } catch (error) {
    return NextResponse.json({
      error: error instanceof Error ? error.message : 'Unable to fetch the gold spot price.',
    }, { status: 502 });
  }
}
