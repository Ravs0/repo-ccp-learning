import { Module } from './types'

export const algoTradingModule: Module = {
  id: 'algo-trading',
  title: 'Algorithmic Trading & Market Microstructure',
  region: 'Global',
  description: 'High-frequency trading, market making, order types, and the mechanics of modern electronic markets.',
  lessons: [
    {
      id: 'lesson-1',
      title: 'Market Structure & HFT',
      duration: '40 min',
      content: `
## Modern Market Structure

**Evolution:**
- 1990s: Floor-based trading (specialists, open outcry)
- 2000s: Electronic trading adoption
- 2010s+: High-frequency trading dominance
- Today: 70%+ of equity volume is algorithmic

## Market Participants

**HFT (High-Frequency Trading) Firms:**
- Renaissance Technologies, Two Sigma, Citadel, Virtu
- Hold positions milliseconds to minutes
- Co-located servers at exchanges
- Compete on speed, not directional views

**Market Makers:**
- Provide continuous bid/offer quotes
- Profit from spread, rebate capture
- Inventory management critical

**Institutional Algorithms:**
- VWAP, TWAP, Implementation Shortfall
- Minimize market impact of large orders
- Broker-provided execution services

**Retail Flow:**
- Robinhood, Charles Schwab, etc.
- Often internalized or sold to wholesalers
- Payment for order flow (PFOF) model

## Order Types

**Basic Orders:**
- Market: Execute immediately at best price
- Limit: Execute at specified price or better
- Stop: Become market order when trigger hit

**Advanced Order Types:**
- Iceberg/Disclosed: Show only portion of size
- Pegged: Follow NBBO (mid, bid+, ask-)
- IOC (Immediate-or-Cancel): Fill what you can, cancel rest
- FOK (Fill-or-Kill): All or nothing immediately
- Post-Only: Only add liquidity, never remove

## Market Making Economics

**Revenue Sources:**
1. **Spread capture:** Buy at bid, sell at offer
2. **Exchange rebates:** Payment for providing liquidity
3. **Inventory appreciation:** Directional bias (sometimes)

**Costs:**
1. **Adverse selection:** Trading with informed flow
2. **Inventory holding:** Carrying cost, risk
3. **Technology:** Infrastructure, colocation, data

**Profit Formula:**
E[Profit] = (Spread + Rebate) - (Adverse Selection + Holding Cost)

## Latency Arbitrage

**The Race:**
- Multiple exchanges exist (NYSE, NASDAQ, IEX, etc.)
- Price discrepancies arise between venues
- HFT firms detect and exploit in microseconds

**Example:**
1. Large order hits NASDAQ at price P
2. HFT firm sees this before exchange broadcasts
3. Buys at other exchanges at <P
4. Sells at P on NASDAQ

**SNARK:** Systematic Normalized Activity and Response Kit
- Michael Lewis "Flash Boys" controversy
- IEX introduced 350μs delay (speed bump) to prevent this

## Market Impact

**Temporary vs. Permanent Impact:**
- Temporary: Price reverts after order completion (liquidity effect)
- Permanent: Price moves persist (information effect)

**Square Root Law:**
Market Impact ≈ σ × √(Order Size / Average Daily Volume)

Where σ = daily volatility

**Implication:**
- Doubling order size increases impact by ~41% (not 100%)
- Spreading execution reduces impact

## Regulatory Response

**SEC Rule 15c3-5 (Market Access Rule):**
- Pre-trade risk controls required
- Credit limits, price collars, order limits
- "Kill switch" capability

**Reg NMS (National Market System):**
- Trade-through rule (must get best price)
- Sub-penny pricing prohibited (> $1 stocks)
- Access fee caps

**MiFID II (Europe):
- Algorithm registration required
- Kill switches, maximum order-to-trade ratios
- HFT definitions and obligations
- Tick size regimes

## Flash Crashes

**May 6, 2010:**
- Dow dropped 998 points (largest intraday decline)
- Recovered most losses in minutes
- E-Mini S&P 500 circuit breakers triggered

**Causes:**
- Large mutual fund sell algorithm
- HFT firms withdrew liquidity
- Cross-market contagion (futures → equities)
- No fundamental news

**Regulatory Response:**
- Market-wide circuit breakers (LULD: Limit Up-Limit Down)
- Minimum resting times for orders
- Cancellation of clearly erroneous trades

## Information Asymmetries

**Three Types of Information:**

**Public Information:**
- News, earnings, economic data
- Efficiently priced quickly

**Private Information (Illegal):**
- Insider trading
- Material non-public information

**Semi-Private Information (Gray Area):**
- Order flow data (who's buying/selling)
- Market makers see this
- Payment for order flow monetizes this

## Payment for Order Flow (PFOF)

**The Model:**
- Retail brokers route orders to wholesalers (Citadel, Virtu, etc.)
- Wholesalers pay brokers for the flow
- Wholesalers profit from execution

**Controversy:**
- Does retail get best execution?
- PFOF banned in UK/EU (conflict of interest)
- Robinhood relies heavily on PFOF revenue

**SEC Study:**
Retail often receives price improvement vs. NBBO, but may miss better prices at other venues

## Key Takeaways

**Markets are faster than ever:** Microsecond competition, co-location essential
**HFT provides liquidity:** Tighter spreads, more continuous markets
**But creates new risks:** Flash crashes, algorithmic feedback loops
**Market structure matters:** Exchange fees, rebates, order types affect outcomes
**Regulation evolving:** Balancing innovation with stability

[External Reading: Larry Harris - Trading and Exchanges](https://www.amazon.com/Trading-Exchanges-Market-Microstructure-Practitioners/dp/0195144708)
`,
      keyPoints: [
        '70%+ of equity volume is algorithmic; HFT firms compete on speed',
        'Market makers profit from spreads + rebates; costs are adverse selection',
        'Market Impact ≈ σ × √(Order Size / ADV) — square root law',
        'Flash Crash (2010): Algorithms + withdrawn liquidity caused 998-point drop',
        'PFOF: Retail brokers sell order flow to wholesalers (controversial)'
      ],
      quiz: [
        {
          question: 'What is the primary revenue source for market makers?',
          options: ['Directional trading profits', 'Spread capture + exchange rebates', 'Interest income', 'Commission fees'],
          correctIndex: 1,
          explanation: 'Market makers primarily profit from capturing the bid-ask spread and receiving exchange rebates for providing liquidity, not from directional bets.'
        },
        {
          question: 'What caused the May 6, 2010 Flash Crash?',
          options: ['Terrorist attack', 'Large mutual fund algorithm + HFT liquidity withdrawal', 'Interest rate spike', 'Bank failure'],
          correctIndex: 1,
          explanation: 'The Flash Crash was caused by a large mutual fund sell algorithm triggering HFT firms to withdraw liquidity, causing cascading price declines and cross-market contagion.'
        },
        {
          question: 'What is Payment for Order Flow (PFOF)?',
          options: ['Retail investors paying brokers', 'Brokers receiving payment from wholesalers for routing retail orders', 'Exchanges paying for listings', 'HFT firms paying for market data'],
          correctIndex: 1,
          explanation: 'PFOF is when retail brokers receive payment from market makers/wholesalers (like Citadel, Virtu) in exchange for routing customer orders to them.'
        }
      ]
    }
  ]
}
