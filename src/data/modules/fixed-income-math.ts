import { Module } from './types'

export const fixedIncomeMathModule: Module = {
  id: 'fixed-income-math',
  title: 'Fixed Income Mathematics',
  region: 'Global',
  description: 'Essential bond math: duration, convexity, yield curve dynamics, and fixed income risk metrics.',
  lessons: [
    {
      id: 'lesson-1',
      title: 'Duration, Convexity & Yield Curve',
      duration: '40 min',
      content: `
## Bond Pricing Fundamentals

**Price-Yield Relationship:**
Bond prices and yields move inversely. Higher yields → lower prices.

**Price Formula:**
P = Σ (C / (1+y)^t) + (F / (1+y)^n)

Where C=coupon, y=yield, F=face value, n=maturity

**Current Yield:**
Annual Coupon / Price

**Yield to Maturity (YTM):**
Internal rate of return if held to maturity

## Duration

Duration measures price sensitivity to yield changes.

### Macaulay Duration

Weighted average time until cash flows received:

MacD = Σ (t × PV(CF_t)) / Price

### Modified Duration

Price sensitivity (% change per 1% yield change):

ModD = MacD / (1 + y/k)

Where k = compounding periods per year

**Approximate Price Change:**
ΔP/P ≈ -ModD × Δy

**Example:**
- Modified Duration = 5 years
- Yield increases 1% (100 bps)
- Price declines ≈ 5%

### Dollar Duration

Dollar change in value:
DD = ModD × Price × 0.0001 (for 1bp)

### Effective Duration

For bonds with embedded options:

EffD = (P_- - P_+) / (2 × P_0 × Δy)

Measures sensitivity using price changes from rate shifts (accounts for option exercise)

## Convexity

Duration is a linear approximation; convexity improves accuracy.

**Convexity Formula:**
Convexity = [P_+ + P_- - 2×P_0] / [P_0 × (Δy)^2]

**Combined Price Change:**
ΔP/P ≈ -ModD × Δy + ½ × Convexity × (Δy)^2

**Why Convexity Matters:**
- Positive convexity: Price rises more when yields fall than it falls when yields rise
- Negative convexity (callable bonds): Opposite behavior
- Longer maturity and lower coupon = higher convexity

**Example:**
- Duration: 5, Convexity: 30
- Yield falls 2%: ΔP/P ≈ -5×(-0.02) + ½×30×(0.02)^2 = 10% + 0.6% = 10.6%
- Duration alone would estimate only 10%

## Yield Curve Dynamics

### Theories of the Yield Curve

**Expectations Theory:**
Long rates equal expected future short rates
Forward rate = Expected future spot rate

**Liquidity Preference Theory:**
Investors demand premium for holding long-term bonds
Upward slope even if expectations are flat

**Market Segmentation Theory:**
Different investor preferences create supply/demand at different maturities
Pension funds buy long end; banks buy short end

### Key Yield Curve Shapes

**Normal:** Upward sloping (long rates > short rates)
**Inverted:** Downward sloping (recession predictor)
**Flat:** Similar rates across maturities
**Humped:** Highest at intermediate maturities

### Yield Curve Strategies

**Steepener:**
- Long short-term, short long-term
- Profit if curve steepens

**Flattener:**
- Short short-term, long long-term
- Profit if curve flattens

**Butterfly:**
- Position in three maturities (e.g., 2s/5s/10s)
- Express views on curvature

**Barbell vs. Bullet:**
- Barbell: Concentrated at short and long ends
- Bullet: Concentrated in one maturity area
- With same duration, barbell has higher convexity

## DV01 (Dollar Value of 01)

Price change for 1 basis point (0.01%) yield change:

DV01 = Modified Duration × Price × 0.0001

**Example:**
- $10m position, duration 5
- DV01 = 5 × $10m × 0.0001 = $5,000
- 1bp rate increase → $5,000 loss

## Key Rate Duration

Sensitivity to rate changes at specific maturity points:

- 2-year key rate duration: sensitivity to 2-year rate change
- 10-year key rate duration: sensitivity to 10-year rate change

**Use:** Decompose portfolio exposure across the curve

## Real-World Application: Hedging

**Hedge Ratio:**
HR = (DV01_target / DV01_hedge) × (CF_target / CF_hedge)

**Example:**
- Long $10m corporate bonds (DV01 = $5,000)
- Hedge with Treasury futures (DV01 = $50/contract)
- Contracts needed: 5,000 / 50 = 100 contracts

## Key Takeaways

**Duration** measures first-order price sensitivity
**Convexity** measures second-order (curvature) improvement to duration approximation
**Yield curve** reflects expectations, risk premia, and supply/demand
**DV01** is the practical trading metric for basis point sensitivity
**Effective duration** required for bonds with embedded options

[External Reading: Fabozzi - Fixed Income Analysis](https://www.cfainstitute.org/)
`,
      keyPoints: [
        'Modified Duration ≈ % price change for 1% yield change (inverse relationship)',
        'Convexity improves price change estimate: ΔP/P ≈ -ModD×Δy + ½×Convexity×(Δy)²',
        'DV01 = dollar value of 1bp change = ModD × Price × 0.0001',
        'Yield curve shape reflects expectations, liquidity preference, and segmentation',
        'Barbell portfolios have higher convexity than bullet portfolios at same duration'
      ],
      quiz: [
        {
          question: 'What does modified duration measure?',
          options: ['Time to maturity', 'Price sensitivity to yield changes', 'Credit risk', 'Coupon rate'],
          correctIndex: 1,
          explanation: 'Modified duration measures the approximate percentage change in bond price for a 1% change in yield. A duration of 5 means ~5% price change for 100bp yield move.'
        },
        {
          question: 'Why is convexity important?',
          options: ['It measures credit risk', 'It improves the linear duration approximation by capturing curvature', 'It measures liquidity', 'It replaces duration entirely'],
          correctIndex: 1,
          explanation: 'Duration is a linear (first-order) approximation. Convexity (second-order) improves accuracy by accounting for the fact that the price-yield relationship is curved, not straight.'
        },
        {
          question: 'What does an inverted yield curve typically signal?',
          options: ['Economic expansion', 'Expected recession', 'High inflation', 'Currency devaluation'],
          correctIndex: 1,
          explanation: 'An inverted yield curve (short-term rates > long-term rates) has historically been a reliable predictor of recession, as it suggests markets expect future rate cuts to stimulate a slowing economy.'
        }
      ]
    }
  ]
}
