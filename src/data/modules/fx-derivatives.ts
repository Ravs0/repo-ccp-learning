import { Module } from './types'

export const fxDerivativesModule: Module = {
  id: 'fx-derivatives',
  title: 'FX Derivatives & Markets',
  region: 'Global',
  description: 'Foreign exchange derivatives, CLS Bank settlement, non-deliverable forwards, and currency risk management.',
  lessons: [
    {
      id: 'lesson-1',
      title: 'FX Swaps, Forwards & CLS Bank',
      duration: '40 min',
      content: `
## The FX Market: Largest in the World

The foreign exchange market trades over **$7.5 trillion daily** (BIS 2022), making it the largest and most liquid financial market globally.

## FX Swaps

**Structure:**
Simultaneous purchase and sale of identical amounts of one currency for another with two different value dates.

**Mechanics:**
- Near leg: Exchange currency A for currency B at spot rate
- Far leg: Reverse exchange at forward rate
- Difference reflects interest rate differential

**Economic Interpretation:**
Effectively a collateralized loan in one currency versus another. No exchange rate risk—only counterparty credit risk.

**Formula:**
Forward Rate = Spot Rate × (1 + r_quote × t) / (1 + r_base × t)

Where r = interest rates, t = time to maturity

## FX Forwards

**Single exchange:** Agreement to exchange currencies at future date at predetermined rate

**Forward Points:**
Difference between forward and spot rate, quoted in pips (0.0001 for most pairs, 0.01 for JPY pairs)

**Covered Interest Rate Parity:**
Forward premium/discount should equal interest rate differential

**Deviation = Arbitrage Opportunity:**
When CIP fails, "FX swap basis" emerges—the basis is the deviation from theoretical forward rate

## CLS Bank: Eliminating Settlement Risk

**The Problem:**
Herstatt Risk—1974 German bank failure left counterparties exposed during settlement. Bank failed after receiving DEM but before delivering USD.

**CLS Solution:**
Continuous Linked Settlement—Payment versus Payment (PvP)

**How It Works:**
1. Both parties fund CLS with their payment currencies
2. CLS holds both sides simultaneously
3. Simultaneous release when both confirmed
4. Eliminates Herstatt risk

**Statistics:**
- Settles $6+ trillion daily
- 18 currencies supported
- 76 settlement members
- 23,000+ third-party clients

## Non-Deliverable Forwards (NDFs)

**Purpose:**
Hedge or speculate on currencies with capital controls or limited convertibility

**Mechanism:**
- Net settlement only (no physical currency delivery)
- Difference between contracted rate and fixing rate settled in convertible currency
- Popular for: CNY, KRW, TWD, PHP, IDR, BRL, MXN, RUB, etc.

**Fixing Sources:**
- CNY: CFETS reference rate
- KRW: KRW fixing at 11:00am Seoul
- Other: Reputable market sources

**Offshore CNY (CNH) vs Onshore (CNY):**
- CNH: Freely tradable outside mainland China
- CNY: Capital controlled onshore
- NDFs provide non-China access to CNY exposure

## Key Takeaways

**FX swaps** are the dominant instrument (50%+ of FX volume)
**CLS Bank** eliminated Herstatt risk through PvP settlement
**NDFs** provide access to restricted currencies without physical delivery
**CIP deviations** signal funding market stress (widened significantly in 2008, 2020)

[External Reading: BIS Triennial Survey](https://www.bis.org/statistics/rpfx22.htm)
`,
      keyPoints: [
        'FX market: $7.5T daily volume; FX swaps are largest component',
        'FX swaps = collateralized loan; forward points reflect interest rate differential',
        'CLS Bank: PvP settlement eliminates Herstatt risk; settles $6T+ daily',
        'NDFs: Net-settled forwards for restricted currencies (CNY, KRW, TWD)'
      ],
      quiz: [
        {
          question: 'What risk does CLS Bank eliminate?',
          options: ['Credit risk', 'Interest rate risk', 'Herstatt (settlement) risk', 'Liquidity risk'],
          correctIndex: 2,
          explanation: 'CLS Bank eliminates Herstatt risk through Payment-versus-Payment (PvP) settlement, ensuring both sides of an FX transaction settle simultaneously.'
        },
        {
          question: 'What is the primary purpose of NDFs?',
          options: ['Physical currency delivery', 'Trading major currencies', 'Accessing currencies with capital controls', 'Central bank intervention'],
          correctIndex: 2,
          explanation: 'NDFs (Non-Deliverable Forwards) allow hedging and speculation on currencies with capital controls (like CNY, KRW) without requiring physical currency delivery.'
        },
        {
          question: 'What does an FX swap economically represent?',
          options: ['A bet on exchange rate direction', 'A collateralized loan in one currency vs another', 'A currency option', 'A credit default swap'],
          correctIndex: 1,
          explanation: 'An FX swap is economically a collateralized loan in one currency versus another, with the interest rate differential reflected in the forward points.'
        }
      ]
    }
  ]
}
