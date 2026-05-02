import { Module } from './types'

export const sovereignDebtModule: Module = {
  id: 'sovereign-debt',
  title: 'Sovereign Debt Crises & Restructuring',
  region: 'Global',
  description: 'Sovereign default history, debt restructuring mechanics, collective action clauses, and crisis management.',
  lessons: [
    {
      id: 'lesson-1',
      title: 'Sovereign Default & Restructuring',
      duration: '45 min',
      content: `
## Sovereign Debt: A Unique Asset Class

Unlike corporate debt, sovereign debt lacks:
- Bankruptcy court jurisdiction
- Collateral enforcement
- Liquidation mechanism

Sovereigns default selectively when cost of repayment exceeds cost of default.

## Historical Defaults

**Notable Sovereign Defaults:**

**Argentina (2001-2005, 2014):**
- $100+ billion default (largest at the time)
- 70% "haircut" on debt exchange
- Holdout creditors led by Elliott Management
- Decades of litigation

**Greece (2012):**
- Largest sovereign restructuring in history
- €200+ billion debt exchange
- 53.5% haircut on face value
- Collective action clauses used

**Russia (1998):**
- Devaluation + default on GKOs (local currency)
- IMF bailout failed
- Recovery took years

**Lehman of Sovereigns:**
- Venezuela (2017): Default on $60+ billion
- Ongoing sanctions, hyperinflation

## Why Sovereigns Default

**Willingness vs. Ability:**
- **Ability:** Can they physically pay? (rarely the issue for local currency)
- **Willingness:** Do they choose to pay? (political decision)

**Common Causes:**
1. External debt burden > export capacity
2. Currency mismatch (borrowed foreign, revenue local)
3. Banking crisis → fiscal costs
4. Commodity price collapse (exporters)
5. Political shocks, regime change

**Odious Debt Doctrine:**
Should successor regimes honor debts incurred by prior regimes for personal benefit? Not legally recognized, but influences negotiations.

## Debt Sustainability Analysis (DSA)

**IMF Framework:**

**Indicators:**
- Debt-to-GDP ratio
- Debt-to-revenue ratio
- Interest-to-revenue ratio
- Gross financing needs (% of GDP)

**Thresholds (rough guide):**
- Emerging markets debt/GDP > 70% = risky
- Advanced economies can sustain higher levels (>100%)

**Dynamic:**
Δd = (r - g) × d + primary deficit

Where:
- d = debt/GDP
- r = interest rate
- g = growth rate
- If r > g, debt grows without primary surplus

## Restructuring Mechanics

### The Restructuring Process

**1. Pre-Default Negotiation:**
- Creditor committees formed
- Debt sustainability analysis
- Negotiate terms

**2. Standstill:**
- Payment suspension during negotiation
- May trigger cross-default clauses

**3. Exchange Offer:**
- Old bonds exchanged for new bonds
- Haircut: reduction in face value or coupons
- Maturity extension

**4. Implementation:**
- Minimum participation threshold (often 75-95%)
- Collective Action Clauses (CACs) bind holdouts

### Haircut Calculation

Not just face value reduction—includes:
- Face value haircut
- Coupon reduction
- Maturity extension (present value effect)
- Collateral/seniority changes

**Present Value Haircut:**
Compare PV of old cash flows vs. new cash flows (at appropriate discount rate)

**Example:**
- Old bond: 10-year, 8% coupon, $100 face
- New bond: 20-year, 4% coupon, $50 face
- Market yield: 10%
- Face value haircut: 50%
- PV haircut: ~65%

## Collective Action Clauses (CACs)

**The Problem:**
Free-rider holdouts (vulture funds) demand full payment, blocking restructuring.

**CACs Solution:**
Contractual provisions allowing majority to bind minority.

**Single Series CACs:**
- Vote by individual bond series
- Typically 75% threshold
- Series-by-series approach

**Aggregation CACs:**
- Vote across all series combined
- Lower individual series thresholds
- Prevents cherry-picking by holdouts

**ICMA Standard CACs (2014):**
- Dual limb: 66⅔% across all bonds + 50% in each series
- Single limb: 75% across all bonds (no per-series requirement)

## The Argentine Saga: A Case Study

**2001:** Default on $100+ billion

**2005 Exchange:**
- 76% participation
- ~70% haircut (NAV)
- Held out: Elliott, Aurelius, etc.

**2010 Exchange:**
- Additional 18% participate
- Total: ~93%

**Holdout Litigation:**
- Elliott (NML Capital) bought distressed debt
- Sued for full payment in NY courts
- Pari passu clause interpretation: equal ranking = equal payment
- Judge Griesa: Argentina cannot pay exchanged bondholders without paying holdouts

**2014:**
- Argentina defaults again to avoid paying holdouts
- Sovereign bond markets turmoil

**2016 Resolution:**
- Macri government settles with holdouts
- $4.65 billion to Elliott and others
- Argentina returns to markets

**Lessons:**
- Pari passu risk in NY law bonds
- Importance of CACs
- Holdouts can block payments to others

## Official Sector Involvement

**IMF:**
- Balance of payments financing
- Conditionality (fiscal austerity, reforms)
- Debt sustainability assessments
- "Lender of last resort" for sovereigns

**Paris Club:**
- Government-to-government debt restructuring
- 22 creditor nations
- Coordinated approach

**Bilateral vs. Multilateral:**
- Bilateral: Government to government (often concessional)
- Multilateral: IMF, World Bank, regional development banks
- Multilateral typically "preferred creditor status"—paid first

## Private Sector Involvement (PSI)

**Greek Restructuring (2012):**
- Largest sovereign debt restructuring ever
- €206 billion of bonds exchanged
- 53.5% face value haircut
- CACs invoked retroactively (legislation)

**Lessons:**
- Retroactive CACs possible (legal/political risk)
- Greek law bonds easier to restructure than foreign law
- ECB holdings exempted (controversial)

## Contemporary Risks (2024-2025)

**High Risk Sovereigns:**
- Argentina (again): Inflation >100%, new restructuring likely
- Egypt: Large debt service, IMF program
- Pakistan: Balance of payments crisis
- Ghana, Zambia, Ethiopia: In default/restructuring
- Ukraine: War-related restructuring needed

**Emerging Market Concerns:**
- Higher US rates = higher refinancing costs
- Dollar strength = local currency debt stress
- China slowdown = commodity exporter pain

## Key Takeaways

**Sovereign debt is political:** Default is a choice, not always inevitable
**Restructuring is messy:** Takes years, holdouts complicate, litigation common
**CACs essential:** Majority restructuring prevents minority obstruction
**No bankruptcy court:** Sovereign immunity, forum selection critical
**Local vs. foreign currency:** Local currency can inflate away; foreign currency harder to default on but more painful when it happens

[External Reading: IMF Sovereign Debt Restructuring](https://www.imf.org/en/Publications/Policy-Papers/Issues/2020/03/27/IMF-Sovereign-Debt-Restructuring-49519)
`,
      keyPoints: [
        'Sovereigns default when repayment cost exceeds default cost (willingness vs ability)',
        'Argentina (2001): Largest default, decade of litigation, Elliott holdout case',
        'Greece (2012): Largest restructuring, 53.5% haircut, retroactive CACs used',
        'Collective Action Clauses (CACs) allow majority to bind minority creditors',
        'Paris Club coordinates government-to-government restructurings'
      ],
      quiz: [
        {
          question: 'What is the primary difference between sovereign and corporate debt?',
          options: ['Interest rates are higher', 'No bankruptcy mechanism exists', 'All sovereign debt is local currency', 'Sovereigns never default'],
          correctIndex: 1,
          explanation: 'Unlike corporate debt, sovereign debt lacks a bankruptcy court, collateral enforcement, and liquidation mechanism. Sovereign immunity complicates creditor remedies.'
        },
        {
          question: 'What are Collective Action Clauses (CACs)?',
          options: ['Government spending limits', 'Provisions allowing majority creditors to bind minority', 'IMF lending conditions', 'Currency controls'],
          correctIndex: 1,
          explanation: 'CACs are contractual provisions in bond documentation that allow a supermajority of bondholders (typically 75%) to approve a restructuring that binds all creditors, preventing holdout obstruction.'
        },
        {
          question: 'What was the key issue in the Argentina holdout litigation?',
          options: ['Currency devaluation', 'Pari passu clause interpreted as requiring equal payment to all creditors', 'Fraudulent bond issuance', 'Inflation adjustment'],
          correctIndex: 1,
          explanation: 'Holdout funds successfully argued that Argentina\'s pari passu (equal treatment) clause required equal payment to all creditors, blocking payments to exchange bondholders unless holdouts were paid.'
        }
      ]
    }
  ]
}
