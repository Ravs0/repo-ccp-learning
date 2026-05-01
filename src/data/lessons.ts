export interface Lesson {
  id: string
  title: string
  duration: string
  content: string
  keyPoints: string[]
  quiz: QuizQuestion[]
  hasDiagram?: boolean
  diagramType?: 'us-flow' | 'asia-flow' | 'comparison'
}

export interface QuizQuestion {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

export interface Module {
  id: string
  title: string
  description: string
  region: 'US' | 'Asia' | 'Global' | 'General'
  lessons: Lesson[]
}

export const modules: Module[] = [
  {
    id: 'us-repo',
    title: 'U.S. Repo Markets & CCPs',
    region: 'US',
    description: 'Master the structure of U.S. Treasury repo markets, from bilateral trading to central clearing through DTCC/FICC.',
    lessons: [
      {
        id: 'lesson-1',
        title: 'What Is Repo?',
        duration: '25 min',
        hasDiagram: false,
        content: `
## The Core Idea

A repurchase agreement (repo) is economically a short-term, collateralized loan. One party (the cash borrower) sells securities to another (the cash lender) with a binding agreement to repurchase those securities at a specified future date for a specified price. The difference between the sale price and the repurchase price represents the interest on the loan.

Repo is the plumbing of the financial system. It finances dealer inventories, enables hedge fund leverage, and allows money market funds to deploy cash safely. When repo markets seize (as in 2008 and 2020), systemic risk escalates rapidly.

## Economic vs. Legal Form

**Legal form:** Two separate sales (spot sale + forward repurchase)
**Economic substance:** Secured lending transaction
**Why this matters:** Bankruptcy treatment, accounting, and regulatory capital all hinge on this characterization

## Key Terms

- **Repo rate:** The implicit interest rate (annualized)
- **Haircut:** The discount applied to collateral value (e.g., 2% haircut on $100m Treasuries = $98m cash borrowed)
- **Open repo:** No fixed term (either party can terminate daily)
- **Term repo:** Fixed maturity (e.g., overnight, 5-day, 1-month)

## Market Size and Significance

- The U.S. repo market exceeds **$5 trillion daily volume**
- It is the primary funding mechanism for primary dealers who make markets in Treasuries
- Disruptions create spillovers across money markets, derivatives, and Treasury auctions
`,
        keyPoints: [
          'Repo = collateralized short-term loan',
          'Legal form is two sales; economic form is secured lending',
          'Haircut determines leverage ratio',
          'U.S. repo market > $5 trillion daily',
          'Critical for dealer financing and market liquidity'
        ],
        quiz: [
          {
            question: 'If a hedge fund wants to finance $100m in Treasuries with a 2% haircut, how much cash does it receive?',
            options: ['$100m', '$98m', '$102m', '$96m'],
            correctIndex: 1,
            explanation: 'A 2% haircut means the lender withholds 2% of collateral value as a buffer. $100m × (1 - 0.02) = $98m.'
          },
          {
            question: 'What is the legal form of a repo transaction?',
            options: ['A loan agreement', 'Two separate sales (spot + forward)', 'A derivative contract', 'A pledge agreement'],
            correctIndex: 1,
            explanation: 'Legally, a repo is structured as two separate sales—a spot sale and a forward repurchase—though economically it functions as a secured loan.'
          },
          {
            question: 'Why do repo markets matter for systemic stability?',
            options: ['They are small and insignificant', 'They provide critical funding for dealers and leveraged investors', 'They only affect stock prices', 'They are unregulated'],
            correctIndex: 1,
            explanation: 'Repo markets finance dealer inventories and enable hedge fund leverage. When they seize (as in 2008 and 2020), systemic risk escalates.'
          }
        ]
      },
      {
        id: 'lesson-2',
        title: 'Bilateral Repo Structure',
        duration: '30 min',
        hasDiagram: true,
        diagramType: 'us-flow',
        content: `
## The Core Idea

In non-centrally cleared ("bilateral") repo, two parties face each other directly. Each bears the full credit risk of the other. This creates complex webs of exposure and requires each dealer to manage collateral and risk individually for every counterparty.

## The Actors

**REPO DEALERS:** JPMorgan, UBS, and other primary dealers with balance-sheet capacity
**NON-CENTRALLY CLEARED REPO MARKETS:** Bilateral trading relationships outside the CCP
**HEDGE FUNDS:** PGIM and others running "Relative Value Books" — levered strategies exploiting small yield differentials

## Trade Structures

### "Fund Leveraged Long" (Left Side)
- Hedge fund wants to own securities but lacks cash
- Repo dealer lends cash, receives securities as collateral
- This is a *reverse repo* from the dealer's perspective
- The hedge fund now holds securities (long position) financed by repo

### "Fund Leveraged Short" (Right Side)
- Hedge fund wants to short securities (bet on price decline)
- Repo dealer borrows securities, posts cash
- Hedge fund receives cash, must return securities later

## Balance Sheet Mechanics

**REPO DEALERS (Left):**
- Liabilities: "Cash collateral on deposit" — cash given to hedge fund
- Assets: "Loan made to hedge fund" — the repo receivable

**HEDGE FUNDS (Center):**
- Assets: Securities (long position) and Cash (from shorting)
- Liabilities: Loan from repo dealer and Reverse repo obligation
- Net: Highly levered exposure to small spread movements

## Key Risks in Bilateral Repo

1. **Counterparty credit risk:** Each party worries the other will default
2. **Operational complexity:** Managing margin calls, collateral valuation, and substitutions bilaterally
3. **Balance-sheet intensity:** Gross exposures remain on balance sheets; limited netting benefits
4. **Procyclicality:** In stress, haircuts rise and funding evaporates (the "run on repo")
`,
        keyPoints: [
          'Bilateral repo = direct counterparty exposure',
          'Dealers face fund-side risk directly',
          'Balance sheets show gross exposures',
          'Operational complexity for margin/collateral',
          'Run on repo risk in stressed markets'
        ],
        quiz: [
          {
            question: 'In bilateral repo, who bears the counterparty credit risk?',
            options: ['The CCP', 'Each party bears the full risk of the other', 'Only the cash lender', 'Only the cash borrower'],
            correctIndex: 1,
            explanation: 'In bilateral repo, each party faces the other directly. There is no central counterparty to mutualize risk.'
          },
          {
            question: 'What happens to a hedge fund\'s balance sheet when it goes long via repo?',
            options: ['Assets decrease', 'Assets increase (securities), liabilities increase (loan)', 'Only liabilities increase', 'Nothing changes'],
            correctIndex: 1,
            explanation: 'The hedge fund receives securities (asset) financed by a loan from the dealer (liability). This creates leverage.'
          },
          {
            question: 'What is the "run on repo"?',
            options: ['A marathon event', 'When lenders withdraw funding in stress, causing procyclical deleveraging', 'A type of interest rate', 'A regulatory requirement'],
            correctIndex: 1,
            explanation: 'In stress, repo lenders may withdraw funding or increase haircuts, forcing borrowers to sell assets, driving prices down further.'
          }
        ]
      },
      {
        id: 'lesson-3',
        title: 'Introducing the CCP',
        duration: '30 min',
        hasDiagram: true,
        diagramType: 'us-flow',
        content: `
## The Core Idea

A Central Counterparty (CCP) interposes itself between buyers and sellers through **novation**—the legal process of replacing a bilateral contract with two new contracts. The CCP becomes the buyer to every seller and the seller to every buyer.

## What Is Novation?

Novation legally extinguishes the original contract between Party A and Party B, and replaces it with:
- **Contract 1:** Party A vs. CCP
- **Contract 2:** Party B vs. CCP

The CCP "faces" both parties. If Party A defaults, the CCP must still perform to Party B (and vice versa).

## Risk Reduction Mechanisms

1. **Netting:** Multilateral offsetting reduces gross exposures
2. **Margin:** Centralized collateral management (initial and variation margin)
3. **Default management:** Centralized auction of defaulted member positions
4. **Loss mutualization:** Pre-funded default funds absorb residual losses

## The "Sole Repo Clearing Corporation"

In the U.S., **DTCC's Fixed Income Clearing Corporation (FICC)** is the **only** CCP for Treasury repo:
- **Efficiency:** Standardized processes, single rulebook
- **Risk concentration:** All Treasury repo clearing risk resides in one entity
- **Systemic importance:** FICC is a Financial Market Utility (FMU) under Dodd-Frank

## Who Faces Whom?

In the CCP model:
- **Dealers** face the CCP (not the hedge fund)
- **Hedge funds** (as "sponsored members") face the CCP through their sponsoring dealer
- The dealer still faces the hedge fund's behavior, but the CCP intermediates the financial risk
`,
        keyPoints: [
          'Novation replaces bilateral contract with two CCP contracts',
          'CCP becomes buyer to every seller, seller to every buyer',
          'Netting, margin, and loss mutualization reduce risk',
          'FICC is the sole U.S. Treasury repo CCP',
          'Dealers face CCP, not the end hedge fund'
        ],
        quiz: [
          {
            question: 'After novation, who is Party A contractually obligated to?',
            options: ['Still Party B', 'The CCP', 'Both Party B and CCP', 'No one'],
            correctIndex: 1,
            explanation: 'Novation extinguishes the original bilateral contract. Party A now has a contract only with the CCP.'
          },
          {
            question: 'Why is FICC called the "sole" U.S. repo clearer significant?',
            options: ['It has no competitors', 'All Treasury repo risk concentrates in one entity', 'It is the oldest CCP', 'It is owned by the Fed'],
            correctIndex: 1,
            explanation: 'FICC being the sole clearer means all Treasury repo clearing risk concentrates in one entity, creating systemic importance but also efficiency through standardization.'
          },
          {
            question: 'What happens if a sponsored member (hedge fund) defaults?',
            options: ['FICC pursues the sponsor dealer', 'FICC has no recourse', 'The other party absorbs the loss', 'The trade is cancelled'],
            correctIndex: 0,
            explanation: 'Sponsored members access FICC through direct members (dealers) who remain liable to FICC for their sponsored members\' performance.'
          }
        ]
      },
      {
        id: 'lesson-4',
        title: 'DTCC/FICC Architecture',
        duration: '35 min',
        hasDiagram: true,
        diagramType: 'us-flow',
        content: `
## DTCC Structure

\`\`\`
DTCC (Holding)
├── FICC (Fixed Income Clearing Corporation)
│   ├── GSD (Government Securities Division) — Treasuries, agencies
│   └── MBS (Mortgage-Backed Securities Division)
├── DTC (Depository Trust Company) — Equity and corporate debt settlement
└── NSCC (National Securities Clearing Corporation) — Equity clearing
\`\`\`

## FICC's GSD (Government Securities Division)

- Clears Treasury repo, cash market Treasuries, and agency securities
- Members: Primary dealers, banks, broker-dealers
- Sponsored members: Hedge funds, asset managers (access through direct members)

## Membership Types

### Direct Members (CCP Members)
- Barclays, UBS, Jefferies
- Must sign CCP contract
- Maintain margin accounts at FICC
- Responsible for their sponsored members' performance

### Sponsored Members (Access via CCP Member)
- Hedge funds, money market funds, other leveraged players
- Do not have direct contractual relationship with FICC
- Their sponsor (dealer) faces FICC on their behalf
- Still benefit from central clearing (netting, operational efficiency)

## The "Sole U.S. Repo Clearer" Implications

- **Standardization:** All cleared repo follows FICC rules
- **Concentration risk:** No redundancy if FICC fails
- **Recovery and resolution:** FICC must have plans for orderly wind-down or recapitalization
- **SEC oversight:** As a systemically important FMU, subject to heightened supervision
`,
        keyPoints: [
          'DTCC owns FICC, DTC, and NSCC',
          'FICC GSD handles Treasury repo and agency securities',
          'Direct members = banks/dealers with FICC contracts',
          'Sponsored members = funds accessing through dealers',
          'FICC is a systemically important Financial Market Utility'
        ],
        quiz: [
          {
            question: 'Which division of FICC handles Treasury repo?',
            options: ['MBS Division', 'GSD (Government Securities Division)', 'DTC', 'NSCC'],
            correctIndex: 1,
            explanation: 'The Government Securities Division (GSD) clears Treasury repo, cash market Treasuries, and agency securities.'
          },
          {
            question: 'What is the difference between a direct member and a sponsored member?',
            options: ['Nothing—they are the same', 'Direct members have FICC contracts; sponsored members access through dealers', 'Sponsored members pay higher fees', 'Direct members cannot clear repo'],
            correctIndex: 1,
            explanation: 'Direct members (banks/dealers) have direct contractual relationships with FICC. Sponsored members (funds) access clearing through sponsoring dealers who remain liable to FICC.'
          },
          {
            question: 'What regulatory status makes FICC subject to heightened supervision?',
            options: ['Bank holding company', 'Financial Market Utility (FMU) under Dodd-Frank', 'Investment adviser', 'Insurance company'],
            correctIndex: 1,
            explanation: 'FICC is designated as a systemically important Financial Market Utility (FMU), subjecting it to SEC oversight and enhanced supervision.'
          }
        ]
      },
      {
        id: 'lesson-5',
        title: 'Clearing Bank & Fed CBES',
        duration: '30 min',
        hasDiagram: true,
        diagramType: 'us-flow',
        content: `
## BNY Mellon: The Sole U.S. Repo Clearing Bank

While FICC manages contracts and risk, actual securities and cash reside at the **clearing bank:**

- Holds "CCP's Clearing Accounts" — FICC's own securities and cash
- Holds "Cash Lender's Custodian Account" (e.g., Citadel's securities)
- Holds "Cash Borrower's Custodian Account" (e.g., Barclays' securities)
- Manages securities ownership records
- Facilitates DVP settlement by moving securities and cash simultaneously

## Account Structure

**For Cash Lender (e.g., Citadel):**
- Custodian Account: Securities owned by Citadel, pledged to FICC
- Cash Account: Where cash proceeds from repo are received

**For CCP (FICC):**
- Clearing Accounts at BNY Mellon and JPMorgan: Where FICC holds pooled collateral

**For Cash Borrower (e.g., Barclays):**
- Custodian Account: Securities borrowed from FICC
- Cash Account: Where cash collateral is posted

## Federal Reserve CBES (Commercial Book-Entry System)

- The **"official ledger"** for U.S. Treasury securities
- Relevant accounts: Cash Lender's, CCP's, and Cash Borrower's Custodian Accounts
- CBES records are definitive; clearing bank records must reconcile to CBES

## The Tri-Party Repo Structure

- BNY Mellon acts as agent managing collateral
- Daily "unwind": Collateral returned to borrower each morning, re-posted each afternoon
- This exposes the system to intraday risk if the clearing bank fails
`,
        keyPoints: [
          'BNY Mellon is the sole U.S. repo clearing bank',
          'Clearing bank holds custodial and cash accounts',
          'Fed CBES is the definitive ledger for Treasury securities',
          'Tri-party repo involves daily "unwind" creating intraday risk',
          'DVP = Delivery versus Payment (simultaneous exchange)'
        ],
        quiz: [
          {
            question: 'Why is BNY Mellon being the "sole" clearing bank a systemic concern?',
            options: ['It charges high fees', 'No redundancy exists if it fails', 'It is unregulated', 'It competes with FICC'],
            correctIndex: 1,
            explanation: 'With only one clearing bank, there is no redundancy. BNY Mellon failure would paralyze Treasury repo settlement.'
          },
          {
            question: 'What is the role of the Federal Reserve\'s CBES?',
            options: ['It clears all trades', 'It is the definitive ledger for Treasury securities ownership', 'It provides loans to dealers', 'It regulates FICC'],
            correctIndex: 1,
            explanation: 'CBES (Commercial Book-Entry System) maintains the official record of Treasury securities ownership. Clearing bank records must reconcile to CBES.'
          },
          {
            question: 'What is the "unwind" in tri-party repo?',
            options: ['Closing all positions', 'Returning collateral to borrower each morning, re-posted afternoon', 'A type of bankruptcy', 'Fed intervention'],
            correctIndex: 1,
            explanation: 'The daily unwind returns collateral to the borrower each morning and re-posts it in the afternoon, creating intraday uncollateralized exposure.'
          }
        ]
      },
      {
        id: 'lesson-6',
        title: 'Trade Lifecycle: Quote to Match',
        duration: '35 min',
        hasDiagram: true,
        diagramType: 'us-flow',
        content: `
## Step 1: Quote Request

Cash Lender (e.g., Citadel) requests quotes via:
- **Email** (still used for bespoke trades)
- **Voice** (phone/verbal agreement, confirmed in writing)
- **Electronic platforms** (DTCC, Bloomberg, Tradeweb)
- **Inter-Dealer Brokers (IDBs)** like BrokerTec facilitate between dealers

## Step 2: Trade Execution

Cash Borrower (e.g., Barclays) provides quotes
- Trade details agreed: collateral type, repo rate, term, size
- Trade occurs on venue (or via voice/email with venue reporting)

## Step 3: Trade Submission to CCP

Both parties submit trade details to FICC:
- "Cash Lender's Data File" — details from Citadel's perspective
- "Cash Borrower's Data File" — details from Barclays' perspective
- These must match exactly for FICC to accept the trade

## Step 4: Matching Engine

FICC's systems:
1. Receive trade details from both sides
2. Verify trade instructions match (collateral, rate, size, settlement date)
3. Run matching algorithm
4. If matched → proceed to novation
5. If unmatched → exception handling, manual review, or rejection

## Step 5: Novation (Simultaneous Contracts)

- FICC novates the trade by creating two contracts:
  - **Contract 1:** FICC vs. Cash Lender (FICC acts as borrower)
  - **Contract 2:** FICC vs. Cash Borrower (FICC acts as lender)
- Original bilateral contract between Citadel and Barclays is extinguished

## Step 6: Clearing Instructions

FICC sends "Send Clearing Instructions" to BNY Mellon
- Instructions specify which securities, which accounts, what cash amounts
- BNY Mellon prepares for settlement
`,
        keyPoints: [
          'Quote request via email, voice, or electronic platforms',
          'Both parties submit trade details to FICC',
          'Matching engine verifies trade instructions match',
          'Novation creates two new contracts, extinguishes original',
          'Clearing instructions sent to BNY Mellon for settlement'
        ],
        quiz: [
          {
            question: 'What happens if submitted trade details do not match?',
            options: ['The trade clears anyway', 'Exception handling, manual review, or rejection', 'The CCP corrects the error', 'The trade is cancelled automatically'],
            correctIndex: 1,
            explanation: 'If trade details from both parties do not match, FICC routes to exception handling for manual review or rejects the trade.'
          },
          {
            question: 'At what point is the original bilateral contract extinguished?',
            options: ['At quote request', 'At trade execution', 'At novation', 'At settlement'],
            correctIndex: 2,
            explanation: 'Novation legally extinguishes the original bilateral contract and replaces it with two new contracts between each party and the CCP.'
          },
          {
            question: 'What is an Inter-Dealer Broker (IDB)?',
            options: ['A bank regulator', 'A facilitator of repo trading between dealers', 'A type of hedge fund', 'A central bank facility'],
            correctIndex: 1,
            explanation: 'IDBs like BrokerTec and Tradeweb facilitate repo trading between dealers by providing electronic platforms for quote and trade execution.'
          }
        ]
      },
      {
        id: 'lesson-7',
        title: 'Netting, Margining & Trade Maintenance',
        duration: '35 min',
        hasDiagram: true,
        diagramType: 'us-flow',
        content: `
## Trade Maintenance

FICC "carries out multiple times during the day":

## 1. Netting

- Calculates net obligations between CCP and each party
- Removes redundant trades
- **Example:** If Party A owes Party B $10m and Party B owes Party A $10m on offsetting trades, netting eliminates both obligations
- **Multilateral netting:** Party A's obligation to Party B can be offset against Party C's obligation to Party A through the CCP
- Result: Fewer settlements, less balance-sheet usage, lower funding costs

## 2. Margining

- **Initial Margin:** Posted when position opened; covers potential future exposure
- **Variation Margin:** Daily (or intraday) adjustment for market value changes
- FICC collects from **both** parties to mutualize risk
- Haircuts applied to collateral to buffer price moves

## The Novation Process Detailed

**First Novation (Faces Lender on Behalf of Borrower):**
- Cash Lender (Citadel) had contract with Cash Borrower (Barclays)
- FICC steps in: "Contract with Cash Lender" (FICC takes role of Cash Borrower)
- Citadel now faces FICC, not Barclays

**Second Novation (Faces Borrower on Behalf of Lender):**
- FICC creates "Contract with Cash Borrower" (FICC takes role of Cash Lender)
- Barclays now faces FICC, not Citadel

## The CCP Waterfall (Default Scenario)

If a member defaults:
1. Defaulter's margin (initial and variation) seized
2. Defaulter's contribution to default fund used
3. Surviving members' default fund contributions (pro-rata)
4. FICC's own capital (skin in the game)
5. Assessment on surviving members (additional contributions)
6. (Theoretical) External support (Fed, regulators)
`,
        keyPoints: [
          'Netting reduces gross exposures through multilateral offsetting',
          'Initial margin posted at trade opening; variation margin daily',
          'FICC collects margin from both parties',
          'CCP waterfall: margin → default fund → mutualized losses → FICC capital → assessments',
          'Trade maintenance occurs multiple times per day'
        ],
        quiz: [
          {
            question: 'What is multilateral netting?',
            options: ['Only two parties can net', 'Obligations can be offset across multiple parties through the CCP', 'No netting is allowed', 'Only cash can be netted'],
            correctIndex: 1,
            explanation: 'Multilateral netting allows Party A\'s obligation to Party B to be offset against Party C\'s obligation to Party A through the CCP.'
          },
          {
            question: 'What is the first resource used if a member defaults?',
            options: ['Fed intervention', 'The defaulter\'s own margin', 'Other members\' default funds', 'FICC capital'],
            correctIndex: 1,
            explanation: 'The CCP waterfall starts with the defaulter\'s own margin (initial and variation), then proceeds to default funds and mutualized resources.'
          },
          {
            question: 'Why does FICC collect margin from both parties?',
            options: ['To increase profits', 'Both parties pose risk to FICC; margin protects against either defaulting', 'Only the borrower poses risk', 'Regulatory requirement only'],
            correctIndex: 1,
            explanation: 'Both the cash lender and cash borrower pose credit risk to FICC. Either could default, so FICC collects margin from both.'
          }
        ]
      },
      {
        id: 'lesson-8',
        title: 'Systemic Implications & Policy',
        duration: '40 min',
        hasDiagram: false,
        content: `
## The Concentration Problem

### Single CCP (FICC/DTCC)

**Benefits:**
- Standardized rules, interoperability, economies of scale

**Risks:**
- Single point of failure; no redundancy if FICC becomes insolvent or inoperable

**Mitigation:**
- Extensive regulation, capital requirements, recovery and resolution planning, Fed access (contingent)

### Single Clearing Bank (BNY Mellon)

**Benefits:**
- Operational efficiency, established relationships, market practice standardization

**Risks:**
- Clearing bank failure would paralyze Treasury repo settlement
- Intraday exposure from daily "unwind"

## Systemic Risk Transmission Channels

### Through the CCP
- If FICC fails: All cleared repo freezes; Treasury market liquidity evaporates
- Loss mutualization: One large member default can exhaust mutualized resources
- Procyclicality: Margin requirements increase in stress, forcing liquidations

### Through the Clearing Bank
- If BNY Mellon fails: Collateral and cash are trapped
- "Doom loop" between bank failure and repo market freeze
- No alternative clearing bank exists to absorb volume

## The 2008 and 2020 Crises

**2008:**
- Bilateral repo markets seized
- Tri-party repo (BNY Mellon and JPMorgan) showed fragility

**2020:**
- COVID-19 shock triggered dash for cash
- FICC-margined positions faced heavy variation margin calls
- Fed intervention (repo facility, Treasury purchases) backstopped both markets

## Policy Responses and Debates

### 1. Central Clearing Mandate
- G20 agreed to mandate central clearing for standardized derivatives after 2008
- Repo is "standardized" but no universal clearing mandate (yet)
- Debate: Should more repo be forced into FICC?

### 2. CCP Resilience
- SEC and CFTC rules on FMU supervision
- Recovery and resolution planning ("living wills" for CCPs)
- Liquidity resources: FICC has access to Fed discount window under extreme conditions

### 3. Clearing Bank Reform
- Intraday credit risk reduction initiatives
- Potential for multiple clearing banks (competition vs. fragmentation)

## The "Too Systemically Important to Fail" Question

- FICC and BNY Mellon are private entities
- Yet their failure would trigger government intervention
- This creates **moral hazard**: market participants may under-price CCP/clearing bank risk
- Resolution: Enhanced supervision, mandatory resolvability, clear loss allocation rules
`,
        keyPoints: [
          'Concentration: Single CCP (FICC) and single clearing bank (BNY Mellon)',
          '2008 and 2020 crises revealed repo market fragility',
          'Debate on central clearing mandate for all repo',
          'Moral hazard from "too systemically important to fail" status',
          'Fed backstop (SRF) exists but creates moral hazard concerns'
        ],
        quiz: [
          {
            question: 'What is the moral hazard concern with FICC and BNY Mellon?',
            options: ['They charge too much', 'Market participants may under-price their risk because they expect government backstop', 'They compete unfairly', 'They are unregulated'],
            correctIndex: 1,
            explanation: 'Because FICC and BNY Mellon are "too systemically important to fail," market participants may not fully price their risk, expecting government intervention if they fail.'
          },
          {
            question: 'What happened to repo markets in March 2020?',
            options: ['They functioned normally', 'COVID-19 shock triggered dash for cash and heavy margin calls', 'They were closed by regulators', 'Rates went to zero'],
            correctIndex: 1,
            explanation: 'The COVID-19 shock in March 2020 triggered a "dash for cash," causing heavy variation margin calls and requiring Fed intervention.'
          },
          {
            question: 'What is a proposed policy response to tri-party repo intraday risk?',
            options: ['Close all repo markets', 'Intraday credit risk reduction initiatives and potential multiple clearing banks', 'Eliminate FICC', 'Ban hedge funds'],
            correctIndex: 1,
            explanation: 'Proposed reforms include intraday credit risk reduction initiatives and consideration of multiple clearing banks to reduce concentration risk.'
          }
        ]
      }
    ]
  },
  {
    id: 'asia-repo',
    title: 'Asia-Pacific Repo Markets',
    region: 'Asia',
    description: 'Explore repo and clearing mechanisms across Japan, Singapore, Hong Kong, and Korea—markets with diverse structures and evolving CCP landscapes.',
    lessons: [
      {
        id: 'asia-intro',
        title: 'Asia Repo Overview',
        duration: '25 min',
        hasDiagram: true,
        diagramType: 'asia-flow',
        content: `
## Asia-Pacific Repo Landscape

Unlike the U.S. with its single CCP (FICC), the Asia-Pacific region features:
- **Multiple CCPs** across jurisdictions
- **Varying clearing models** (some markets have no repo CCP)
- **Diverse regulatory frameworks** reflecting local market structures
- **Different collateral types** (not just U.S. Treasuries)

## Key Markets

| Market | CCP | Government Securities | Repo Clearing |
|--------|-----|----------------------|---------------|
| **Japan** | JSCC | JGBs | Yes (since 2002) |
| **Singapore** | CDP | Singapore Gov't Bonds | Limited |
| **Hong Kong** | HKSCC | HK Gov't Bonds | Limited |
| **Korea** | KSD/KRX | Korean Treasuries | Developing |
| **Australia** | ASX Clear | Commonwealth Gov't Bonds | Available |

## Structural Differences from U.S.

1. **Fragmentation:** Multiple CCPs rather than single monopoly
2. **Developing markets:** Some markets lack repo CCPs entirely
3. **Collateral diversity:** Local government bonds, not just U.S. Treasuries
4. **Cross-border complexity:** Different currencies, settlement systems
5. **Regulatory variation:** PFMI adoption differs across jurisdictions

## JSCC: The Pioneer

**Japan Securities Clearing Corporation (JSCC)** was:
- First CCP in Asia for securities (2002)
- Licensed under amended Securities and Exchange Law
- Model for other Asian markets considering CCP implementation

## Korea's CCP Debate

Korea has actively debated introducing a repo CCP:
- 2022: U.S. regulators proposed mandate for single central clearing
- Korean market considering necessity for domestic repo CCP
- Systemic risks highlighted by GFC driving reform interest
`,
        keyPoints: [
          'Asia has multiple CCPs, not a single monopoly like FICC',
          'JSCC (Japan) was first Asian securities CCP (2002)',
          'Some markets (Singapore, HK) have limited repo clearing',
          'Korea actively debating CCP introduction',
          'Collateral: local government bonds, diverse currencies'
        ],
        quiz: [
          {
            question: 'Which Asian CCP was the first to clear securities?',
            options: ['CDP (Singapore)', 'HKSCC (Hong Kong)', 'JSCC (Japan)', 'ASX Clear (Australia)'],
            correctIndex: 2,
            explanation: 'Japan Securities Clearing Corporation (JSCC) was the first CCP in Asia, established in 2002 under amended securities legislation.'
          },
          {
            question: 'How does the Asian CCP landscape differ from the U.S.?',
            options: ['It is identical', 'Multiple CCPs across jurisdictions vs. single FICC monopoly', 'Asia has no CCPs', 'Only Japan has a CCP'],
            correctIndex: 1,
            explanation: 'Unlike the U.S. with FICC as the sole repo CCP, Asia has multiple CCPs across different jurisdictions with varying clearing models.'
          },
          {
            question: 'Which market is currently debating the introduction of a repo CCP?',
            options: ['Japan', 'Singapore', 'Korea', 'Australia'],
            correctIndex: 2,
            explanation: 'Following the 2022 U.S. proposal for mandatory central clearing, Korea has been actively debating the necessity of introducing a domestic repo CCP.'
          }
        ]
      },
      {
        id: 'japan-jscc',
        title: 'Japan: JSCC & Repo Clearing',
        duration: '35 min',
        hasDiagram: true,
        diagramType: 'asia-flow',
        content: `
## Japan Securities Clearing Corporation (JSCC)

**Established:** 2002 (first Asian securities CCP)
**Ownership:** Japan Exchange Group (JPX)
**Legal basis:** Financial Instruments and Exchange Law

## JSCC Clearing Services

### 1. Cash Market Clearing
- Japanese equities
- Japanese government bonds (JGBs)
- Corporate bonds

### 2. Derivatives Clearing
- Futures and options on JPX markets
- Interest rate swaps (IRS)

### 3. Repo Clearing
- JGB repo
- Cross-border repo (limited)

## JSCC Netting Mechanism

JSCC provides **obligation assumption service**—its term for novation:
- Interposes itself between buyer and seller
- Becomes counterparty to both sides
- Multilateral netting of obligations

## Risk Management Framework

**Margin Requirements:**
- Initial margin based on portfolio risk (VaR-based)
- Variation margin (daily mark-to-market)
- Additional margin during stress periods

**Default Waterfall:**
1. Defaulter's margin
2. JSCC's contributed capital (skin in the game)
3. Non-defaulting members' contributions
4. Assessment calls on non-defaulting members

## Comparison with FICC

| Feature | FICC (U.S.) | JSCC (Japan) |
|---------|-------------|--------------|
| Established | 1976 | 2002 |
| Ownership | DTCC (private) | JPX (public company) |
| Sole clearer? | Yes (Treasury repo) | No (competes with BOJ) |
| Currency | USD | JPY |
| Settlement | DVP through Fedwire | BOJ-Net (central bank) |

## Unique Japanese Features

1. **BOJ-Net:** Settlement occurs through Bank of Japan's proprietary system
2. **JGB specialness:** JGB repo rates can go deeply negative (safe haven)
3. **Cross-border:** Limited due to currency controls and FX regulations
4. **Retail participation:** Higher retail ownership of JGBs than U.S. Treasuries
`,
        keyPoints: [
          'JSCC established 2002, first Asian securities CCP',
          'Owned by Japan Exchange Group (JPX)',
          'Provides obligation assumption (novation) service',
          'Settlement through BOJ-Net (central bank system)',
          'JGB repo can have deeply negative rates (safe haven demand)'
        ],
        quiz: [
          {
            question: 'Who owns JSCC?',
            options: ['The Japanese government', 'Japan Exchange Group (JPX)', 'Private banks', 'The Bank of Japan'],
            correctIndex: 1,
            explanation: 'JSCC is owned by Japan Exchange Group (JPX), a publicly traded company, unlike FICC which is owned by DTCC.'
          },
          {
            question: 'How does JGB repo settlement differ from U.S. Treasury repo?',
            options: ['No difference', 'Uses BOJ-Net (Bank of Japan system) vs. Fedwire/Clearing Bank', 'Cash settlement only', 'No settlement required'],
            correctIndex: 1,
            explanation: 'JGB repo settlement occurs through BOJ-Net, the Bank of Japan\'s proprietary settlement system, rather than through private clearing banks.'
          },
          {
            question: 'What is unique about JGB repo rates compared to U.S. Treasury repo?',
            options: ['They are always higher', 'They can go deeply negative due to safe haven demand', 'They are fixed by the government', 'They do not exist'],
            correctIndex: 1,
            explanation: 'Due to Japan\'s persistent deflationary concerns and safe haven demand, JGB repo rates can trade at deeply negative levels—uncommon for U.S. Treasuries.'
          }
        ]
      },
      {
        id: 'singapore-hk',
        title: 'Singapore & Hong Kong',
        duration: '30 min',
        hasDiagram: true,
        diagramType: 'asia-flow',
        content: `
## Singapore: CDP and Securities Lending

### Central Depository (Pte) Limited (CDP)
- Subsidiary of Singapore Exchange (SGX)
- Clears Singapore equities and bonds
- **Limited repo clearing capabilities**

### Securities Borrowing and Lending (SBL) Pool
- CDP operates central SBL facility
- Automated borrowing/lending of securities
- Not true repo—no cash leg in standard SBL

### Repo Market Structure
- Primarily **bilateral/repo-like transactions**
- Interbank market for Singapore Government Securities (SGS)
- Corporate bond repo limited
- No dedicated repo CCP comparable to FICC

## Hong Kong: HKEX Clearing

### Clearing Houses
HKEX operates four clearing houses:
1. **HKSCC** — Hong Kong Securities Clearing Company (equities)
2. **HKFE Clearing** — Futures/options
3. **SEOCH** — Stock options
4. **OTC Clearing** — OTC derivatives (CCASS)

### Government Bond Repo
- **Limited CCP clearing** for repo
- Primarily **bilateral market**
- HKMA (central bank) provides some repo facilities

### Connect Programs
- **Stock Connect:** Mainland China-Hong Kong equity clearing
- **Bond Connect:** Overseas investors access China interbank bond market
- Clearing complexities due to cross-border settlement

## Comparison Table

| Feature | Singapore | Hong Kong |
|---------|-----------|-------------|
| CCP | CDP | HKSCC |
| Repo clearing | Limited | Limited |
| Primary market | Bilateral/repo-like | Bilateral |
| Central bank role | MAS facilities | HKMA facilities |
| Cross-border | ASEAN focus | Mainland China connect |

## Key Challenges

1. **Market size:** Smaller government bond markets than U.S./Japan
2. **CCP economics:** Limited volume makes dedicated repo CCP challenging
3. **Regulatory:** Different approaches to PFMI implementation
4. **Currency:** SGD and HKD are not major reserve currencies

## Growth Areas

- **Green bonds:** Both markets developing ESG repo frameworks
- **Digital assets:** Tokenized securities may change clearing models
- **RMB internationalization:** HK positioning as offshore RMB repo hub
`,
        keyPoints: [
          'Singapore CDP: limited repo clearing, SBL pool for securities lending',
          'Hong Kong HKSCC: primarily bilateral repo market',
          'Both have central bank repo facilities (MAS, HKMA)',
          'Cross-border connect programs add complexity',
          'Market size challenges for dedicated repo CCP economics'
        ],
        quiz: [
          {
            question: 'What is CDP\'s SBL Pool in Singapore?',
            options: ['A swimming pool', 'Securities Borrowing and Lending facility (not true repo)', 'A repo CCP', 'A hedge fund'],
            correctIndex: 1,
            explanation: 'CDP\'s Securities Borrowing and Lending (SBL) Pool facilitates securities lending but is not true repo—it typically lacks the cash leg of a repo transaction.'
          },
          {
            question: 'Which Hong Kong clearing house handles equities?',
            options: ['HKFE Clearing', 'HKSCC', 'OTC Clearing', 'CDP'],
            correctIndex: 1,
            explanation: 'HKSCC (Hong Kong Securities Clearing Company) is the clearing house for equities in Hong Kong, while HKFE Clearing handles futures/options.'
          },
          {
            question: 'What is a key challenge for repo CCP development in Singapore and Hong Kong?',
            options: ['No banks', 'Market size—smaller government bond markets make dedicated CCP economics challenging', 'No regulations', 'No demand'],
            correctIndex: 1,
            explanation: 'Compared to the U.S. and Japan, Singapore and Hong Kong have smaller government bond markets, making the economics of a dedicated repo CCP more challenging.'
          }
        ]
      },
      {
        id: 'asia-comparison',
        title: 'U.S. vs. Asia: Comparative Analysis',
        duration: '40 min',
        hasDiagram: true,
        diagramType: 'comparison',
        content: `
## Structural Comparison

| Dimension | United States | Asia-Pacific |
|-----------|---------------|--------------|
| **CCP Structure** | Single monopoly (FICC) | Multiple, fragmented |
| **Clearing Bank** | Single (BNY Mellon) | Multiple, jurisdiction-specific |
| **Settlement** | Fedwire/Clearing Bank | Central bank systems (BOJ-Net, etc.) |
| **Currency** | USD (global reserve) | Local currencies (JPY, SGD, HKD, KRW) |
| **Market Depth** | Deepest (>$5T daily) | Varies (Japan deep, others smaller) |
| **Regulatory** | SEC/CFTC unified | Fragmented across jurisdictions |

## U.S. vs. Asia: Structural Divergence

While both the U.S. and Asia-Pacific have developed sophisticated repo clearing infrastructures, they represent fundamentally different organizational models—**centralized standardization** versus **fragmented resilience**.

### The U.S. Model: Single CCP Dominance

**DTCC/FICC** is the sole CCP for U.S. Treasury repo. This creates:

- **Economies of scale:** Lower per-transaction costs through massive netting benefits
- **Standardization:** Single set of rules, margin models, and operational procedures
- **Liquidity concentration:** All repo liquidity in one venue
- **Single point of failure risk:** Systemic risk concentrated in one entity (designated FMU)

The U.S. model treats CCP failure as an unacceptable tail risk, backed by the Federal Reserve's role as lender of last resort.

### The Asian Model: Multiple CCPs

**JSCC, CDP, HKSCC, KSD** operate across different jurisdictions. This creates:

- **Resilience through redundancy:** No single point of failure
- **Jurisdictional alignment:** Each CCP matches local regulatory preferences
- **Fragmentation costs:** Lower netting efficiency, multiple membership requirements
- **Coordination challenges:** Cross-border stress management is more complex

### Academic Perspective: Systemic Risk in Multi-CCP Markets

Research by **Aldasoro & Veraart (BIS Working Paper No 1052)** provides critical insights into the Asian model's risk dynamics:

> "Joint clearing members can play an important role in how losses are transmitted between several CCPs, especially when realistic frictions affecting contagion are present."

**Key findings for multi-CCP environments like Asia:**

1. **Shared membership as transmission channel:** Large banks that are members of multiple CCPs (e.g., major dealers clearing at both JSCC and CDP) can transmit stress across markets
2. **The Cover-2 standard may be insufficient:** Current CCP stress testing typically requires resources to cover the default of the two largest members. However, when interconnectedness through shared membership is considered, the "top two" members may differ significantly from what isolated analysis suggests
3. **VMGH spillovers:** Variation Margin Gains Haircutting by one CCP can have spillover effects on other CCPs through shared clearing members

**Implication for Asia:** The multi-CCP model provides redundancy at the entity level but creates new transmission channels through overlapping membership—stress testing must account for network effects.

### COVID-19 as Natural Experiment

The March 2020 market stress revealed:
- **U.S.:** Fed-FICC coordination was immediate and decisive; single-CCP model enabled rapid, centralized response
- **Asia:** Multiple central banks (BOJ, MAS, HKMA, BOK) and CCPs required complex coordination, but the distributed system proved resilient with no single CCP under critical stress

The IMF's analysis (WP/21/267) noted that repo market stress during COVID-19 was characterized by:
- Flight-to-safety increasing Treasury collateral demand
- Dealer balance sheet constraints limiting intermediation
- Central bank intervention becoming essential across both models

### Tri-Party Repo: A U.S.-Specific Risk

The New York Fed's **Tri-Party Repo Infrastructure Reform** initiative addresses a risk unique to the U.S. model—the massive intra-day credit extended by clearing banks (BNY Mellon). While Asia's repo markets are primarily bilateral or centrally cleared, the U.S. retains a large tri-party segment that creates systemic risk distinct from CCP risk.

### Policy Implications and Convergence

The **PFMI standards** push both models toward convergence:
- **U.S.:** Must enhance CCP resiliency through recovery and resolution planning; address tri-party bank risk
- **Asia:** Must improve cross-border coordination and liquidity backstops; consider the Aldasoro-Veraart framework for multi-CCP stress testing

**Emerging consensus:** Neither pure model is clearly superior. The optimal architecture may involve:
- Regional CCPs with strong mutual liquidity arrangements
- Shared stress testing frameworks accounting for interconnectedness
- Clear central bank backstop protocols

### Reading: The Cover-2 Challenge

The BIS research challenges the Cover-2 standard that dominates CCP stress testing:

> "We show that who the two top clearing members are varies significantly depending on whether one accounts for contagion effects stemming from interconnectedness through shared clearing membership."

For Asian regulators, this implies:
1. Stress scenarios must include correlated defaults across CCPs
2. Joint clearing members' exposures must be aggregated across all CCPs they participate in
3. VMGH spillovers between CCPs must be modeled

This research provides a tool for selecting stress scenarios in Asia's multi-CCP environment—looking at the **full network** of CCPs and shared clearing members is essential for financial stability.

## Advantages of U.S. Model

### Efficiency
- Standardized rules across entire market
- Economies of scale in technology and operations
- Single point of regulatory oversight

### Liquidity
- Concentrated flow creates deep markets
- Lower transaction costs
- Tighter bid-ask spreads

### Systemic Risk Management
- Single CCP allows holistic risk view
- Coordinated default management
- Unified Fed backstop

## Advantages of Asian Model

### Resilience
- No single point of failure
- Redundancy across CCPs
- Regional diversification

### Competition
- Multiple providers may innovate faster
- Lower fees through competition
- Tailored services for local markets

### Regulatory Flexibility
- Jurisdiction-specific rules fit local markets
- Different PFMI interpretations possible
- Sandbox approaches for innovation

## Challenges in Both Models

### U.S. Concentration Risks
- "Too systemically important to fail" creates moral hazard
- No redundancy if FICC or BNY Mellon fails
- Single CCP may become complacent

### Asian Fragmentation Challenges
- Cross-border repo more complex
- Multiple regulatory regimes to navigate
- Higher operational costs for global dealers
- Liquidity fragmented across markets

## The Future: Convergence or Divergence?

### Convergence Forces
- **PFMI standards:** Global pressure for harmonized CCP standards
- **Cross-border trading:** Demand for interoperable CCPs
- **Global dealers:** Banks want simplified operations

### Divergence Forces
- **Local priorities:** Different systemic risk concerns
- **Currency sovereignty:** Central banks prefer control
- **Market structures:** Different collateral and settlement practices
- **Geopolitics:** Technology and financial infrastructure as strategic assets

## Case Study: March 2020 COVID Shock

### U.S. Response
- Fed Standing Repo Facility activated
- FICC margin calls managed through waterfall
- Treasury purchases provided collateral relief

### Asian Responses
- **Japan:** BOJ expanded JGB purchases, repo operations
- **Singapore:** MAS provided USD liquidity via swap lines
- **Hong Kong:** HKMA activated contingent repo facility
- **Challenge:** Coordination across multiple CCPs and central banks more complex

## Lessons for Market Development

1. **Size matters:** Deep government bond markets support CCP economics
2. **Currency:** Reserve currency status affects repo market development
3. **Regulatory:** Coordination across jurisdictions is essential
4. **Infrastructure:** Settlement system efficiency drives repo market depth
5. **Backstop:** Central bank support is crucial in stress
`,
        keyPoints: [
          'U.S.: Single CCP (efficiency, liquidity) vs. Asia: Multiple CCPs (resilience, competition)',
          'U.S. concentration risk vs. Asian fragmentation challenges',
          'PFMI standards push for convergence; local priorities drive divergence',
          'COVID-19 revealed coordination challenges in fragmented Asian model',
          'Currency status and market depth are key determinants'
        ],
        quiz: [
          {
            question: 'What is the main advantage of the U.S. single-CCP model?',
            options: ['No risk', 'Efficiency through standardization and economies of scale', 'More CCPs to choose from', 'No regulation'],
            correctIndex: 1,
            explanation: 'The U.S. single-CCP model provides efficiency through standardized rules, economies of scale, and concentrated liquidity.'
          },
          {
            question: 'What is the main advantage of the Asian multi-CCP model?',
            options: ['Lower costs', 'Resilience—no single point of failure, redundancy across CCPs', 'Unified regulation', 'Single currency'],
            correctIndex: 1,
            explanation: 'The Asian multi-CCP model provides resilience through diversification—no single point of failure and redundancy across jurisdictions.'
          },
          {
            question: 'What coordination challenge did the March 2020 COVID shock reveal in Asia?',
            options: ['No impact', 'Multiple CCPs and central banks required more complex coordination than U.S. single-CCP model', 'No central banks in Asia', 'All markets closed'],
            correctIndex: 1,
            explanation: 'Unlike the U.S. where the Fed and FICC coordinated centrally, Asia\'s multiple CCPs and central banks required more complex coordination during the COVID shock.'
          }
        ]
      }
    ]
  },
  {
    id: 'central-banking',
    title: 'Central Banking & Monetary Policy',
    region: 'General',
    description: 'Understand how central banks influence economies through monetary policy, interest rates, and financial stability tools.',
    lessons: [
      {
        id: 'lesson-1',
        title: 'What Is Monetary Policy?',
        duration: '30 min',
        content: `
## The Dual Mandate

Monetary policy is what central banks do to accomplish two key goals mandated by law:

1. **Promoting maximum employment** – the highest level of employment or lowest level of unemployment that the economy can sustain while maintaining a stable inflation rate
2. **Promoting stable prices** – for the goods and services we all purchase

## How Central Banks Influence the Economy

Central banks set the stance of monetary policy to influence short-term interest rates and overall financial conditions with the aim of moving the economy toward maximum employment and stable prices.

**Easing** (lowering rates): Loosening financial conditions to stimulate economic activity
**Tightening** (raising rates): Tightening financial conditions to curb inflation

The Federal Reserve changes the stance of monetary policy primarily by raising or lowering its target range for the federal funds rate—an interest rate for overnight borrowing by banks.

## Independence with Accountability

While Congress specifies the goals for monetary policy, it has provided central banks operational independence. This flexibility ensures that monetary policy decisions can be directed toward the longer term, be based on data and objective analysis, and best serve the interests of all citizens.

At the same time, central banks remain accountable through transparency about policy deliberations and actions through official communications.

*External Reading: [The Fed Explained - Monetary Policy](https://www.federalreserve.gov/aboutthefed/fedexplained/monetary-policy.htm)*
`,
        keyPoints: [
          'Monetary policy aims for maximum employment and stable prices',
          'Central banks use interest rates to influence economic conditions',
          'Operational independence allows data-driven decisions',
          'Easing stimulates growth; tightening fights inflation',
          'Accountability achieved through transparency and communication'
        ],
        quiz: [
          {
            question: 'What are the two main goals of monetary policy?',
            options: ['Profit maximization and market share', 'Maximum employment and stable prices', 'Government debt reduction and currency appreciation', 'Bank profitability and lending growth'],
            correctIndex: 1,
            explanation: 'The dual mandate of monetary policy is promoting maximum employment and stable prices.'
          },
          {
            question: 'What does "easing" monetary policy mean?',
            options: ['Raising interest rates to fight inflation', 'Lowering interest rates to stimulate the economy', 'Increasing bank reserves', 'Reducing government spending'],
            correctIndex: 1,
            explanation: 'Easing means lowering interest rates to loosen financial conditions and stimulate economic activity.'
          },
          {
            question: 'Why are central banks given operational independence?',
            options: ['To avoid government oversight', 'To make decisions based on data and objective analysis for long-term goals', 'To increase their profits', 'To reduce transparency'],
            correctIndex: 1,
            explanation: 'Operational independence allows central banks to make decisions based on data and objective analysis, directed toward long-term economic goals rather than short-term political pressures.'
          }
        ]
      },
      {
        id: 'lesson-2',
        title: 'Monetary Policy Tools',
        duration: '35 min',
        content: `
## The Federal Funds Rate

The federal funds rate is the interest rate for overnight borrowing by banks. When the Federal Open Market Committee (FOMC) adjusts the target range for this rate, the Federal Reserve uses its monetary policy tools to ensure that market interest rates move in the direction of the new target range.

## Key Policy Tools

### 1. Interest on Reserve Balances (IORB)
The primary new monetary policy tool. Banks earn interest on the reserves they hold at the Federal Reserve. This rate helps set a floor for short-term interest rates.

### 2. Overnight Reverse Repurchase Agreement Facility (ON RRP)
A supplementary tool that provides a floor for short-term rates by allowing eligible institutions to invest cash overnight at the Fed in exchange for Treasury securities.

### 3. Discount Rate
The interest rate charged to banks for borrowing directly from the Federal Reserve. This sets a ceiling for the federal funds rate.

### 4. Open Market Operations
Buying and selling government securities to maintain ample reserves in the banking system.

## How Tools Work Together

These administered rates work together to ensure the federal funds rate stays within the target range. The IORB and ON RRP provide a floor, while the discount rate provides a ceiling. Open market operations ensure banks have adequate reserves.

*External Reading: [How the Fed Implements Monetary Policy](https://www.stlouisfed.org/in-plain-english/the-fed-implements-monetary-policy)*
`,
        keyPoints: [
          'Federal funds rate is the primary monetary policy lever',
          'Interest on reserves sets a floor for short-term rates',
          'ON RRP facility provides supplementary rate floor',
          'Discount rate sets a ceiling for interbank lending',
          'Open market operations maintain adequate bank reserves'
        ],
        quiz: [
          {
            question: 'What is the primary purpose of the Interest on Reserve Balances tool?',
            options: ['To punish banks for holding too much cash', 'To set a floor for short-term interest rates', 'To provide emergency loans to banks', 'To control inflation directly'],
            correctIndex: 1,
            explanation: 'Interest on Reserve Balances sets a floor for short-term interest rates by paying banks interest on their reserves held at the Fed.'
          },
          {
            question: 'What does the Overnight Reverse Repo facility do?',
            options: ['Banks borrow from the Fed overnight', 'Institutions invest cash overnight at the Fed in exchange for Treasuries', 'The Fed sells bonds to the public', 'Banks lend to each other at discounted rates'],
            correctIndex: 1,
            explanation: 'The ON RRP facility allows eligible institutions to invest cash overnight at the Fed in exchange for Treasury securities, providing a supplementary floor for short-term rates.'
          },
          {
            question: 'What role does the discount rate play?',
            options: ['Sets a floor for market rates', 'Sets a ceiling for the federal funds rate', 'Determines mortgage rates', 'Controls stock market prices'],
            correctIndex: 1,
            explanation: 'The discount rate is the rate banks pay when borrowing directly from the Fed, setting a ceiling for the federal funds rate.'
          }
        ]
      },
      {
        id: 'lesson-3',
        title: 'Quantitative Easing & Unconventional Policy',
        duration: '30 min',
        content: `
## When Traditional Tools Aren't Enough

When interest rates approach zero (the "zero lower bound"), central banks cannot lower rates further to stimulate the economy. This is when unconventional monetary policy tools become necessary.

## Quantitative Easing (QE)

QE involves large-scale purchases of government bonds and other securities by the central bank. This:

1. **Increases the money supply** by injecting reserves into the banking system
2. **Lowers long-term interest rates** by increasing demand for bonds
3. **Signals commitment** to keeping rates low for an extended period
4. **Supports asset prices** through portfolio rebalancing effects

## How QE Works

When the Fed buys bonds from banks, it credits their reserve accounts. This increases the supply of reserves in the banking system, which should lower interbank lending rates. The increased demand for bonds also pushes up their prices, which lowers their yields (interest rates).

## Forward Guidance

Central banks also use forward guidance—communicating their future policy intentions—to influence market expectations and long-term rates. By promising to keep rates low for an extended period, central banks can reduce long-term borrowing costs even if short-term rates are at zero.

## Risks and Trade-offs

- **Asset bubbles:** Low rates can inflate asset prices
- **Income inequality:** Asset price increases benefit wealthier households
- **Exit challenges:** Unwinding QE without disrupting markets
- **Central bank balance sheet risk:** Holding large portfolios of securities

QE was used extensively after the 2008 financial crisis and during the COVID-19 pandemic.
`,
        keyPoints: [
          'QE is used when interest rates hit the zero lower bound',
          'Large-scale asset purchases increase money supply and lower long-term rates',
          'Forward guidance communicates future policy intentions',
          'QE supports asset prices through portfolio rebalancing',
          'Risks include asset bubbles, inequality, and exit challenges'
        ],
        quiz: [
          {
            question: 'When is quantitative easing typically used?',
            options: ['When inflation is too high', 'When interest rates approach zero and traditional tools are exhausted', 'When the stock market is rising', 'When government debt is low'],
            correctIndex: 1,
            explanation: 'QE is used when interest rates approach the zero lower bound and traditional monetary policy tools are no longer effective.'
          },
          {
            question: 'How does QE affect long-term interest rates?',
            options: ['It raises them by selling bonds', 'It lowers them by increasing demand for bonds', 'It has no effect on long-term rates', 'It only affects short-term rates'],
            correctIndex: 1,
            explanation: 'QE lowers long-term interest rates by increasing demand for bonds, which pushes up bond prices and reduces their yields.'
          },
          {
            question: 'What is forward guidance?',
            options: ['Guidance on which stocks to buy', 'Communicating future policy intentions to influence market expectations', 'Directing banks on whom to lend to', 'Setting exchange rate targets'],
            correctIndex: 1,
            explanation: 'Forward guidance is a communication strategy where central banks announce their future policy intentions to influence market expectations and long-term interest rates.'
          }
        ]
      }
    ]
  },
  {
    id: 'global-finance',
    title: 'Global Finance & Capital Flows',
    region: 'Global',
    description: 'Explore international capital flows, balance of payments, exchange rates, and the global financial system.',
    lessons: [
      {
        id: 'lesson-1',
        title: 'International Capital Flows',
        duration: '35 min',
        content: `
## The Financial Side of Trade

International capital flows are the financial side of international trade. When someone imports a good or service, the buyer (the importer) gives the seller (the exporter) a monetary payment. If total exports were equal to total imports, these monetary transactions would balance at net zero.

## Gross vs. Net Flows

**Gross flows** (credits plus debits) represent the total volume of financial transactions. During 1995–2003, gross flows involving industrial countries averaged $4.9 trillion per year.

**Net flows** represent the difference between inflows and outflows. Gross flows were about ten times the net capital flows, reflecting the netting out of the vast majority of financial flows.

## Financing Trade Imbalances

While much international trade is financed by offsetting trade flows, ultimately net trade balances must be financed by net financial flows.

- **United States:** Large current-account deficits (imports > exports)
- **Non-U.S. industrial countries:** Large trade surpluses
- **Developing countries:** Shifted from deficits to surpluses by the late 1990s

Net capital and financial flows finance these net trade imbalances, increasingly flowing from both developing and non-U.S. industrial countries to the United States.

## The "Missing" Flows Problem

Global balance of payments data shows statistical discrepancies—the world appears to run a current account deficit with itself, which is logically impossible. This implies:

1. Underreported exports to the United States from other countries
2. Unreported financial flows to the United States
3. Potential measurement errors in foreign direct investment earnings

These discrepancies exceed $100 billion per year, highlighting the challenges of tracking global financial flows.

*External Reading: [International Capital Flows - EconLib](https://www.econlib.org/library/Enc/InternationalCapitalFlows.html)*
`,
        keyPoints: [
          'Capital flows finance international trade imbalances',
          'Gross flows are typically much larger than net flows',
          'US runs current account deficits financed by foreign capital',
          'Developing countries became net capital suppliers by late 1990s',
          'Global flow data shows significant statistical discrepancies'
        ],
        quiz: [
          {
            question: 'What is the relationship between gross and net capital flows?',
            options: ['Gross flows are smaller than net flows', 'Gross flows are typically about 10 times net flows', 'They are always equal', 'Net flows are larger than gross flows'],
            correctIndex: 1,
            explanation: 'Gross flows (total transactions) are typically about 10 times net flows (difference between inflows and outflows), reflecting the netting out of most transactions.'
          },
          {
            question: 'How are trade imbalances financed?',
            options: ['By printing money', 'By net financial flows between countries', 'By barter arrangements', 'They are not financed'],
            correctIndex: 1,
            explanation: 'Net trade imbalances must be financed by net financial flows between countries—capital flows from surplus countries to deficit countries.'
          },
          {
            question: 'What does the "missing flows" problem indicate?',
            options: ['Capital flows are not important', 'Global trade data has significant measurement errors and underreporting', 'Money is disappearing', 'All countries have balanced trade'],
            correctIndex: 1,
            explanation: 'The statistical discrepancies in global balance of payments data (the world appearing to run a deficit with itself) indicate significant measurement errors and underreporting of exports and financial flows.'
          }
        ]
      },
      {
        id: 'lesson-2',
        title: 'Balance of Payments',
        duration: '30 min',
        content: `
## What Is the Balance of Payments?

The Balance of Payments (BoP) is a record of all economic transactions that take place between residents of a country and the rest of the world during a specific period. It's expressed in the domestic currency.

## The Main Components

### Current Account
Records trade in goods and services, income, and current transfers:
- **Trade balance:** Exports minus imports of goods and services
- **Primary income:** Investment income (dividends, interest)
- **Secondary income:** Transfers (remittances, foreign aid)

### Capital Account
Records capital transfers and acquisition/disposal of non-produced, non-financial assets (relatively small for most countries).

### Financial Account
Records financial flows:
- **Direct investment:** Long-term ownership stakes in foreign enterprises
- **Portfolio investment:** Purchase of foreign stocks and bonds
- **Other investment:** Bank loans, trade credit, currency deposits
- **Reserve assets:** Changes in central bank foreign exchange reserves

## The Accounting Identity

In theory, the sum of all accounts should equal zero:
Current Account + Capital Account + Financial Account = 0

A current account deficit must be financed by a financial account surplus (net capital inflows). A current account surplus corresponds to a financial account deficit (net capital outflows).

## Why BoP Matters

- **Exchange rate pressure:** Persistent imbalances can affect currency values
- **Policy implications:** Guides monetary and fiscal policy decisions
- **Sustainability:** Large deficits may indicate borrowing beyond means
- **Global imbalances:** Can contribute to financial instability

*External Reading: [Global Economics - Balance of Payments](https://www.fe.training/free-resources/financial-markets/global-economics-balance-of-payments/)*
`,
        keyPoints: [
          'BoP records all transactions between a country and the rest of the world',
          'Current account covers trade, income, and transfers',
          'Financial account covers investment flows and reserve changes',
          'Current account deficits must be financed by financial account surpluses',
          'BoP data guides policy and indicates economic sustainability'
        ],
        quiz: [
          {
            question: 'What does the Current Account record?',
            options: ['Only investment flows', 'Trade in goods and services, income, and transfers', 'Central bank reserves', 'Only government debt'],
            correctIndex: 1,
            explanation: 'The Current Account records trade in goods and services, income from investments, and current transfers like remittances and foreign aid.'
          },
          {
            question: 'If a country has a current account deficit, what must it have?',
            options: ['A current account surplus', 'A financial account surplus (net capital inflows)', 'A trade surplus', 'Zero foreign investment'],
            correctIndex: 1,
            explanation: 'A current account deficit must be financed by a financial account surplus, meaning the country is receiving net capital inflows from abroad.'
          },
          {
            question: 'Why is the Balance of Payments important?',
            options: ['It only matters for tax collection', 'It guides policy and indicates economic sustainability', 'It is only used by banks', 'It has no real-world significance'],
            correctIndex: 1,
            explanation: 'The Balance of Payments is important because it guides monetary and fiscal policy decisions, indicates economic sustainability, and can signal exchange rate pressures.'
          }
        ]
      },
      {
        id: 'lesson-3',
        title: 'Exchange Rates & Currency Markets',
        duration: '35 min',
        content: `
## What Are Exchange Rates?

An exchange rate is the price of one currency in terms of another currency. It determines how much of one currency you can buy with another.

## Exchange Rate Regimes

### Fixed (Pegged) Exchange Rates
The currency's value is fixed to another currency or a basket of currencies. Central banks buy and sell their own currency to maintain the peg.

**Examples:** Hong Kong dollar pegged to USD, Saudi riyal pegged to USD

### Floating Exchange Rates
The currency's value is determined by market forces of supply and demand. Central banks may occasionally intervene but do not target a specific rate.

**Examples:** USD, EUR, JPY, GBP

### Managed Float
A hybrid approach where the currency floats but central banks intervene to prevent excessive volatility or achieve policy objectives.

## Factors Affecting Exchange Rates

### Interest Rate Differentials
Higher interest rates attract foreign capital, appreciating the currency.

### Inflation Differentials
Countries with lower inflation typically see their currency appreciate.

### Current Account Deficits
Persistent deficits may lead to currency depreciation.

### Economic Performance
Strong economic growth attracts investment, appreciating the currency.

### Political Stability
Political uncertainty leads to capital flight and depreciation.

### Speculation
Market sentiment and expectations can drive short-term movements.

## The Foreign Exchange Market

The FX market is the largest financial market in the world, with over $6 trillion in daily trading. It operates 24 hours a day, 5 days a week.

**Major currency pairs (the "majors"):**
- EUR/USD, USD/JPY, GBP/USD, USD/CHF
- AUD/USD, USD/CAD, NZD/USD

## Currency Crises

When confidence in a currency collapses, it can lead to:
- Rapid depreciation
- Capital flight
- Banking crises
- Economic recession

**Historical examples:** 1997 Asian Financial Crisis, 1992 ERM crisis, 1994 Mexican peso crisis
`,
        keyPoints: [
          'Exchange rates are prices of currencies in terms of other currencies',
          'Fixed regimes peg to another currency; floating regimes let markets decide',
          'Interest rates, inflation, trade balances affect exchange rates',
          'FX market is the world\'s largest financial market',
          'Currency crises can trigger broader economic crises'
        ],
        quiz: [
          {
            question: 'What is the main difference between fixed and floating exchange rates?',
            options: ['Fixed rates change daily, floating rates never change', 'Fixed rates are pegged to another currency; floating rates are market-determined', 'Fixed rates are used by all countries', 'Floating rates are illegal'],
            correctIndex: 1,
            explanation: 'Fixed (pegged) exchange rates are tied to another currency or basket, while floating exchange rates are determined by market forces of supply and demand.'
          },
          {
            question: 'How do higher interest rates typically affect a currency?',
            options: ['They cause depreciation', 'They cause appreciation by attracting foreign capital', 'They have no effect', 'They only affect stock prices'],
            correctIndex: 1,
            explanation: 'Higher interest rates typically cause currency appreciation because they attract foreign capital seeking higher returns, increasing demand for the currency.'
          },
          {
            question: 'What is the approximate daily trading volume in the foreign exchange market?',
            options: ['$100 billion', '$1 trillion', '$6 trillion', '$50 trillion'],
            correctIndex: 2,
            explanation: 'The foreign exchange market is the largest financial market globally, with over $6 trillion in daily trading volume.'
          }
        ]
      }
    ]
  },
  {
    id: 'systemic-risk',
    title: 'Systemic Risk & Financial Crises',
    region: 'Global',
    description: 'Understand financial contagion, systemic risk, and the dynamics of financial crises.',
    lessons: [
      {
        id: 'lesson-1',
        title: 'What Is Systemic Risk?',
        duration: '30 min',
        content: `
## Defining Systemic Risk

Systemic risk is the risk of collapse of an entire financial system or entire market, as opposed to risk associated with any one individual entity, group, or component. It can be triggered by a shock to one part of the financial system that spreads to others.

## Key Characteristics

### Interconnectedness
Modern financial systems are highly interconnected through:
- Interbank lending
- Derivatives contracts
- Cross-ownership
- Payment and settlement systems

### Procyclicality
Financial systems tend to amplify economic cycles:
- Boom: Excessive risk-taking, leverage expansion
- Bust: Fire sales, credit crunches, deleveraging

### Complexity
The intricate web of relationships makes it difficult to predict how a shock will propagate.

## Sources of Systemic Risk

### Too Big to Fail
Institutions whose failure would cause widespread disruption to the financial system and economy.

### Common Exposures
Many institutions holding similar assets or making similar bets can lead to correlated losses.

### Contagion Channels
- Direct contagion: Counterparty relationships
- Indirect contagion: Asset fire sales, information effects, liquidity hoarding

### Feedback Loops
Declining asset prices → margin calls → forced selling → further price declines

## Measuring Systemic Risk

### Network Analysis
Mapping interconnections between institutions to identify central nodes and transmission channels.

### Stress Testing
Simulating extreme scenarios to assess system resilience.

### Early Warning Indicators
Metrics that may predict systemic stress (credit growth, asset price bubbles, leverage ratios).

*External Reading: [BIS WP 597: Bank Networks and Contagion](https://www.bis.org/publ/work597.pdf)*
`,
        keyPoints: [
          'Systemic risk threatens the entire financial system, not just individual institutions',
          'Interconnectedness, procyclicality, and complexity amplify systemic risk',
          'Too-big-to-fail institutions create moral hazard',
          'Contagion spreads through counterparty relationships and asset fire sales',
          'Network analysis and stress testing help measure systemic risk'
        ],
        quiz: [
          {
            question: 'What distinguishes systemic risk from idiosyncratic risk?',
            options: ['Systemic risk only affects small banks', 'Systemic risk threatens the entire financial system', 'Idiosyncratic risk is more dangerous', 'They are the same thing'],
            correctIndex: 1,
            explanation: 'Systemic risk is the risk of collapse of an entire financial system or market, while idiosyncratic risk is specific to individual entities.'
          },
          {
            question: 'What is procyclicality in financial systems?',
            options: ['Systems that work countercyclically', 'Tendency to amplify economic cycles—excessive risk-taking in booms, deleveraging in busts', 'Systems that are always stable', 'Systems that only grow'],
            correctIndex: 1,
            explanation: 'Procyclicality refers to the tendency of financial systems to amplify economic cycles, with excessive risk-taking during booms and deleveraging during busts.'
          },
          {
            question: 'What is a common contagion channel?',
            options: ['Only government actions', 'Counterparty relationships and asset fire sales', 'Only foreign exchange markets', 'Only stock markets'],
            correctIndex: 1,
            explanation: 'Contagion spreads through direct counterparty relationships and indirect channels like asset fire sales, information effects, and liquidity hoarding.'
          }
        ]
      },
      {
        id: 'lesson-2',
        title: 'Financial Contagion',
        duration: '35 min',
        content: `
## Understanding Contagion

Financial contagion is the spread of financial distress from one institution or market to others, potentially leading to broader systemic crisis. It occurs through various channels in interconnected financial networks.

## Contagion Mechanisms

### Direct Contagion
Through explicit contractual relationships:
- **Interbank exposures:** Bank A fails → Bank B suffers losses
- **Derivatives contracts:** Counterparty default triggers losses
- **Payment systems:** Settlement failures cascade

### Indirect Contagion
Through market mechanisms:
- **Asset fire sales:** Forced selling depresses prices, affecting other holders
- **Liquidity hoarding:** Institutions hoard cash, causing funding shortages
- **Information effects:** Panic spreads as investors reassess risk
- **Portfolio rebalancing:** Investors sell similar assets, amplifying price declines

## Network Theory and Contagion

Financial systems can be modeled as networks where nodes are institutions and edges represent relationships (exposures, correlations, etc.).

### Key Network Properties
- **Degree centrality:** Number of connections per node (highly connected nodes are potential contagion sources)
- **Betweenness centrality:** Nodes that lie on many shortest paths (control information/contagion flow)
- **Clustering:** Tendency for connected nodes to share connections (can amplify or contain contagion)

### Too Interconnected to Fail
Some institutions may be too interconnected to fail—their failure would disrupt the entire network even if they're not individually "too big to fail."

## Empirical Evidence

### 2008 Financial Crisis
- Subprime mortgage losses spread to global banking system
- Lehman Brothers collapse triggered panic
- Interbank lending froze
- Asset fire sales across markets

### 2010 European Sovereign Debt Crisis
- Greek debt concerns spread to other Eurozone countries
- Bank-sovereign doom loop (banks hold sovereign debt; sovereigns guarantee banks)
- Contagion across sovereign bond markets

### 2020 COVID Crisis
- Flight to safety caused liquidity shortages
- Central bank intervention prevented contagion
- Highlighted importance of market infrastructure

*External Reading: [OFR: Contagion in Financial Networks](https://www.financialresearch.gov/working-papers/files/OFRwp-2015-21_Contagion-in-Financial-Networks.pdf)*
`,
        keyPoints: [
          'Contagion spreads distress through direct and indirect channels',
          'Direct contagion: contractual relationships like interbank lending',
          'Indirect contagion: fire sales, liquidity hoarding, information effects',
          'Network theory helps identify potential contagion sources',
          'Highly connected institutions can be contagion amplifiers'
        ],
        quiz: [
          {
            question: 'What is an example of direct contagion?',
            options: ['Investors panic after reading news', 'Bank A fails causing losses at Bank B due to interbank lending', 'Asset prices fall due to forced selling', 'Central bank raises interest rates'],
            correctIndex: 1,
            explanation: 'Direct contagion occurs through explicit contractual relationships, such as when Bank A fails and Bank B suffers losses due to interbank lending or derivatives exposures.'
          },
          {
            question: 'What is asset fire sale contagion?',
            options: ['Banks selling assets to make profits', 'Forced selling depresses prices, affecting other holders of similar assets', 'Investors buying assets during crisis', 'Government selling assets'],
            correctIndex: 1,
            explanation: 'Asset fire sale contagion occurs when distressed institutions are forced to sell assets, depressing prices and causing losses for other institutions holding similar assets.'
          },
          {
            question: 'What does "too interconnected to fail" mean?',
            options: ['Institutions that are too big', 'Institutions whose failure would disrupt the network due to their connections', 'Institutions that never fail', 'Government-owned banks'],
            correctIndex: 1,
            explanation: 'Too interconnected to fail refers to institutions that, while not necessarily large, have so many connections that their failure would disrupt the entire financial network.'
          }
        ]
      },
      {
        id: 'lesson-3',
        title: 'Historical Financial Crises',
        duration: '40 min',
        content: `
## Learning from Crisis History

Financial crises are recurring events with common patterns. Understanding historical crises helps identify warning signs and policy responses.

## 1929 Great Depression

### Causes
- Stock market bubble and crash
- Bank failures (over 9,000 banks failed)
- Deflationary spiral
- Protectionist trade policies (Smoot-Hawley Tariff)
- Policy mistakes (tightening monetary policy too early)

### Lessons
- Importance of lender of last resort
- Dangers of deflation
- Need for bank deposit insurance
- Coordination of international policy

## 1997 Asian Financial Crisis

### Causes
- Fixed exchange rate regimes became unsustainable
- Large current account deficits
- Short-term foreign currency debt
- Weak financial regulation
- Contagion across "Asian Tigers"

### Timeline
- Thailand devalues baht (July 1997)
- Crisis spreads to Indonesia, South Korea, Malaysia
- IMF provides emergency loans with conditionality
- Capital controls imposed by Malaysia

### Lessons
- Dangers of short-term foreign currency debt
- Importance of flexible exchange rates
- Need for strong financial regulation
- Contagion can spread quickly across regions

## 2008 Global Financial Crisis

### Causes
- Subprime mortgage lending boom
- Securitization and complex derivatives (CDOs, CDS)
- Excessive leverage
- Rating agency failures
- Regulatory gaps (shadow banking)

### Key Events
- Housing bubble bursts (2007)
- Bear Stearns rescued (March 2008)
- Lehman Brothers fails (September 2008)
- AIG rescued, TARP enacted
- Global recession

### Lessons
- Importance of macroprudential regulation
- Need to address too-big-to-fail
- Shadow banking requires oversight
- Central banks as lenders of last resort for non-banks

## 2010 European Sovereign Debt Crisis

### Causes
- High government debt levels
- Banking crises in some countries
- Loss of monetary policy flexibility (Eurozone)
- Bank-sovereign doom loop

### Response
- Austerity measures
- ECB interventions (SMP, OMT, QE)
- Bailouts for Greece, Ireland, Portugal, Spain, Cyprus
- Banking union reforms

### Lessons
- Fiscal discipline matters in monetary unions
- Need for banking union
- Central bank backstop can calm markets
- Structural reforms are difficult but necessary

## 2020 COVID-19 Crisis

### Characteristics
- Exogenous shock (not financial in origin)
- Rapid economic contraction
- Unprecedented policy response
- Financial system remained resilient

### Response
- Aggressive monetary easing globally
- Fiscal stimulus on historic scale
- Central bank corporate bond purchases
- Suspension of normal rules

### Lessons
- Speed of response matters
- Central bank tools can be adapted
- Financial system more resilient post-2008 reforms
- Importance of market infrastructure

## Common Patterns

1. **Credit boom precedes crisis**
2. **Leverage amplifies downturns**
3. **Contagion spreads across markets**
4. **Policy response critical to limit damage**
5. **Crisis leads to regulatory reform**

*External Reading: [ECB: Decomposing Systemic Risk](https://www.ecb.europa.eu/pub/pdf/scpwps/ecb.wp2929~19cda4a673.en.pdf)*
`,
        keyPoints: [
          'Financial crises show recurring patterns: credit booms, leverage, contagion',
          '1929: Lessons on lender of last resort and avoiding deflation',
          '1997 Asia: Dangers of short-term foreign debt and fixed rates',
          '2008: Shadow banking, too-big-to-fail, macroprudential regulation',
          '2020 COVID: Importance of rapid policy response'
        ],
        quiz: [
          {
            question: 'What was a key lesson from the 1997 Asian Financial Crisis?',
            options: ['Fixed exchange rates are always good', 'Short-term foreign currency debt is dangerous', 'IMF loans should never have conditions', 'Capital controls are always bad'],
            correctIndex: 1,
            explanation: 'The Asian Financial Crisis highlighted the dangers of short-term foreign currency debt, which became unsustainable when exchange rates came under pressure.'
          },
          {
            question: 'What was unique about the 2008 crisis compared to previous crises?',
            options: ['It only affected the US', 'It involved complex derivatives and shadow banking', 'It was caused by government spending', 'It had no impact on housing'],
            correctIndex: 1,
            explanation: 'The 2008 crisis was unique in its involvement of complex derivatives (CDOs, CDS) and the shadow banking system, which were outside traditional regulatory oversight.'
          },
          {
            question: 'How did the 2020 COVID crisis differ from previous financial crises?',
            options: ['It was caused by financial speculation', 'It was an exogenous shock with unprecedented policy response', 'It only affected emerging markets', 'It led to tighter monetary policy'],
            correctIndex: 1,
            explanation: 'The COVID-19 crisis was an exogenous shock (not financial in origin) that triggered an unprecedented global policy response, with the financial system remaining relatively resilient due to post-2008 reforms.'
          }
        ]
      }
    ]
  },
  {
    id: 'derivatives',
    title: 'Financial Derivatives',
    region: 'General',
    description: 'Master derivatives including forwards, futures, options, swaps, and their role in risk management and speculation.',
    lessons: [
      {
        id: 'lesson-1',
        title: 'Introduction to Derivatives',
        duration: '30 min',
        content: `
## What Are Derivatives?

A derivative is a financial contract whose value is derived from an underlying asset or group of assets. The underlying asset can be stocks, bonds, commodities, currencies, interest rates, or market indices.

## Why Derivatives Matter

### Risk Management (Hedging)
Derivatives allow market participants to transfer risk:
- Farmers lock in crop prices
- Airlines hedge fuel costs
- Investors protect portfolios
- Banks manage interest rate exposure

### Price Discovery
Derivatives markets provide information about future expectations:
- Futures prices reflect expected future spot prices
- Options implied volatility shows market uncertainty

### Speculation
Derivatives enable leveraged bets on market movements with relatively small capital outlay.

### Market Efficiency
Derivatives improve market efficiency by allowing:
- Arbitrage between related markets
- More complete markets
- Better risk sharing

## Basic Types of Derivatives

### Forwards
Customized contracts to buy/sell an asset at a specified price on a future date. Traded over-the-counter (OTC).

### Futures
Standardized contracts traded on exchanges. Similar to forwards but with daily margining and clearing.

### Options
Contracts giving the right (but not obligation) to buy (call) or sell (put) an asset at a specified price.

### Swaps
Agreements to exchange cash flows based on different underlying variables (interest rates, currencies, etc.).

## Exchange-Traded vs. OTC

### Exchange-Traded
- Standardized contracts
- Central clearing (CCP)
- Transparent pricing
- Lower counterparty risk
- Limited customization

### Over-the-Counter (OTC)
- Customized terms
- Bilateral agreements
- Less transparent
- Higher counterparty risk
- Greater flexibility

## The Derivatives Market

The global derivatives market is enormous, with notional amounts exceeding $600 trillion. The majority is OTC, particularly interest rate and currency derivatives.

*External Reading: [IGC Working Paper on Derivatives](https://www.theigc.org/sites/default/files/2015/02/Sundaram-2012-Working-Paper.pdf)*
`,
        keyPoints: [
          'Derivatives derive value from underlying assets',
          'Used for hedging, price discovery, speculation, and market efficiency',
          'Basic types: forwards, futures, options, swaps',
          'Exchange-traded: standardized, cleared; OTC: customized, bilateral',
          'Global derivatives market exceeds $600 trillion notional'
        ],
        quiz: [
          {
            question: 'What is the primary purpose of hedging with derivatives?',
            options: ['To maximize profits', 'To transfer risk and protect against adverse price movements', 'To speculate on market movements', 'To avoid paying taxes'],
            correctIndex: 1,
            explanation: 'Hedging with derivatives is primarily used to transfer risk and protect against adverse price movements in underlying assets.'
          },
          {
            question: 'What is the main difference between forwards and futures?',
            options: ['Forwards are standardized; futures are customized', 'Forwards are OTC; futures are exchange-traded with daily margining', 'Forwards are for stocks only; futures are for commodities only', 'There is no difference'],
            correctIndex: 1,
            explanation: 'Forwards are customized OTC contracts, while futures are standardized exchange-traded contracts with daily margining and central clearing.'
          },
          {
            question: 'What is an option?',
            options: ['An obligation to buy or sell', 'The right but not obligation to buy or sell at a specified price', 'A type of stock', 'A government bond'],
            correctIndex: 1,
            explanation: 'An option gives the holder the right, but not the obligation, to buy (call) or sell (put) an underlying asset at a specified price.'
          }
        ]
      },
      {
        id: 'lesson-2',
        title: 'Interest Rate Derivatives',
        duration: '35 min',
        content: `
## Why Interest Rate Derivatives Matter

Interest rate risk is one of the most significant risks faced by financial institutions, corporations, and investors. Interest rate derivatives allow market participants to manage this risk.

## Types of Interest Rate Derivatives

### Interest Rate Swaps
Agreements to exchange fixed-rate payments for floating-rate payments (or vice versa).

**Notional amount:** The reference amount used to calculate payments (principal is not exchanged)

**Example:** Company pays fixed 5% on $100 million notional, receives floating LIBOR + 1%

**Uses:**
- Convert floating-rate debt to fixed-rate
- Speculate on interest rate movements
- Match asset/liability durations

### Forward Rate Agreements (FRAs)
OTC contracts to lock in an interest rate for a future period.

**Example:** Agree to borrow at 4% for 3 months starting in 6 months

**Uses:**
- Hedge future borrowing costs
- Lock in lending rates

### Interest Rate Futures
Exchange-traded contracts on short-term interest rates (e.g., Eurodollar futures, Treasury futures).

**Characteristics:**
- Standardized contract sizes
- Daily margining
- Highly liquid
- Used for hedging and speculation

### Interest Rate Options

**Caps:** Series of call options on interest rates (protect against rising rates)
**Floors:** Series of put options on interest rates (protect against falling rates)
**Swaptions:** Options to enter into interest rate swaps

## The Swap Market

The interest rate swap market is the largest segment of the global derivatives market, with notional amounts exceeding $400 trillion.

### Market Structure
- **Dealer banks:** Large banks that make markets in swaps
- **End users:** Corporations, financial institutions, governments
- **Clearing:** Increasing use of CCPs post-2008

### Pricing
Swap rates are determined by:
- The yield curve (government bond yields)
- Credit risk of counterparties
- Supply and demand
- Expected future interest rates

## Risks in Interest Rate Derivatives

### Interest Rate Risk
Changes in market interest rates affect derivative values.

### Credit/Counterparty Risk
Risk that counterparty defaults (especially in OTC markets).

### Basis Risk
Imperfect correlation between hedged exposure and derivative.

### Liquidity Risk
Difficulty exiting positions in stressed markets.

## Regulation Post-2008

- Mandatory clearing for standardized swaps
- Margin requirements for non-cleared swaps
- Trade reporting and transparency
- Centralized electronic trading

*External Reading: [IMF: Role of Derivatives in Emerging Markets](https://www.elibrary.imf.org/display/book/9781589062917/ch04.xml)*
`,
        keyPoints: [
          'Interest rate swaps exchange fixed for floating payments',
          'FRAs lock in future interest rates',
          'Interest rate futures are exchange-traded and highly liquid',
          'Interest rate options include caps, floors, and swaptions',
          'Swap market exceeds $400 trillion notional, increasingly cleared through CCPs'
        ],
        quiz: [
          {
            question: 'What does an interest rate swap typically involve?',
            options: ['Exchanging principal amounts', 'Exchanging fixed-rate payments for floating-rate payments', 'Buying and selling bonds', 'Exchanging currencies'],
            correctIndex: 1,
            explanation: 'Interest rate swaps typically involve exchanging fixed-rate payments for floating-rate payments (or vice versa) based on a notional amount.'
          },
          {
            question: 'What is an FRA?',
            options: ['A type of government bond', 'An OTC contract to lock in an interest rate for a future period', 'An exchange-traded option', 'A type of stock'],
            correctIndex: 1,
            explanation: 'A Forward Rate Agreement (FRA) is an OTC contract that allows parties to lock in an interest rate for borrowing or lending over a future period.'
          },
          {
            question: 'What is the purpose of an interest rate cap?',
            options: ['To protect against falling interest rates', 'To protect against rising interest rates', 'To speculate on stock prices', 'To exchange currencies'],
            correctIndex: 1,
            explanation: 'An interest rate cap is a series of call options on interest rates that provides protection against rising interest rates.'
          }
        ]
      },
      {
        id: 'lesson-3',
        title: 'FX and Credit Derivatives',
        duration: '35 min',
        content: `
## Foreign Exchange Derivatives

FX derivatives allow market participants to hedge currency risk and speculate on exchange rate movements.

### Types of FX Derivatives

#### FX Forwards
OTC contracts to exchange currencies at a specified rate on a future date.

**Forward points:** Difference between forward and spot rates, determined by interest rate differentials

**Example:** Agree to buy EUR for USD at 1.1000 in 3 months

**Uses:**
- Hedge future currency exposures
- Lock in exchange rates for trade transactions
- Speculate on currency movements

#### FX Swaps
Simultaneous purchase and sale of currencies for different value dates.

**Example:** Buy EUR for USD spot, sell EUR for USD in 3 months

**Uses:**
- Manage short-term funding needs
- Roll forward FX positions
- Access foreign currency funding

#### Currency Swaps
Exchange principal and interest payments in different currencies.

**Example:** Exchange USD principal and interest for EUR principal and interest

**Uses:**
- Access foreign currency at favorable rates
- Hedge long-term currency exposure
- Convert debt between currencies

#### FX Options
Right (but not obligation) to buy/sell currency at specified rate.

**Uses:**
- Hedge against adverse movements while retaining upside
- Speculate with limited downside

## Credit Derivatives

Credit derivatives allow transfer of credit risk without transferring the underlying asset.

### Credit Default Swaps (CDS)

**Structure:** Protection buyer pays periodic premium to protection seller; seller compensates buyer if credit event occurs

**Credit events:**
- Bankruptcy
- Failure to pay
- Debt restructuring
- Acceleration/repudiation

**Example:** Buy CDS on Company X bonds; pay 200 bps annually; receive payment if Company X defaults

**Uses:**
- Hedge credit exposure
- Take short positions on credit
- Diversify credit risk
- Speculate on credit events

### CDS Index Products

**CDX.NA.IG:** Index of 125 North American investment-grade corporate CDS
**iTraxx Europe:** Index of 125 European investment-grade corporate CDS

**Uses:**
- Hedge broad credit exposure
- Gain exposure to credit markets
- Trade credit sentiment

### Other Credit Derivatives

**Total Return Swaps:** Exchange total return of reference asset for floating rate
**Credit Linked Notes:** Securities with embedded credit derivatives
**Collateralized Debt Obligations (CDOs):** Structured products tranched by credit risk

## The Role of Credit Derivatives

### Benefits
- Risk transfer and diversification
- Price discovery for credit risk
- Liquidity for credit markets
- Hedging tool for bond portfolios

### Risks and Concerns
- Counterparty risk (AIG in 2008)
- Opacity and complexity
- Potential for speculation
- Contagion channels (2008 crisis)

## Regulation Post-2008

- Central clearing for standardized CDS
- Margin requirements
- Trade reporting and transparency
- Ban on naked CDS on sovereign debt (EU)

## Market Size

- FX derivatives: ~$100 trillion notional daily
- CDS: ~$10 trillion notional outstanding

FX derivatives are the most actively traded derivatives globally, with the majority being swaps and forwards.
`,
        keyPoints: [
          'FX forwards lock in future exchange rates',
          'FX swaps manage short-term funding across currencies',
          'CDS transfers credit risk via periodic premiums',
          'CDS indexes provide broad credit market exposure',
          'Credit derivatives improve risk transfer but created contagion in 2008'
        ],
        quiz: [
          {
            question: 'What does a Credit Default Swap (CDS) provide?',
            options: ['Insurance against stock market losses', 'Protection against credit events like default or bankruptcy', 'Guarantee of profit on investments', 'Low-interest loans'],
            correctIndex: 1,
            explanation: 'A CDS provides protection against credit events such as bankruptcy, failure to pay, or debt restructuring in exchange for periodic premium payments.'
          },
          {
            question: 'What determines forward points in FX forwards?',
            options: ['Stock market performance', 'Interest rate differentials between currencies', 'Government regulations', 'Trading volume'],
            correctIndex: 1,
            explanation: 'Forward points (the difference between forward and spot FX rates) are determined by interest rate differentials between the two currencies.'
          },
          {
            question: 'What was a major concern about credit derivatives during the 2008 crisis?',
            options: ['They were too simple', 'Counterparty risk and opacity created contagion channels', 'They were not used enough', 'They were only traded on exchanges'],
            correctIndex: 1,
            explanation: 'During the 2008 crisis, counterparty risk (e.g., AIG) and the opacity of credit derivatives created contagion channels that amplified the crisis.'
          }
        ]
      }
    ]
  }
]

export const glossary = [
  {
    term: 'Repo (Repurchase Agreement)',
    definition: 'A sale of securities coupled with an agreement to repurchase them at a future date and price; economically a collateralized short-term loan.',
    category: 'Core Concepts'
  },
  {
    term: 'Reverse Repo',
    definition: 'The opposite side of a repo transaction; from the cash lender\'s perspective, it is a collateralized deposit or investment of cash.',
    category: 'Core Concepts'
  },
  {
    term: 'CCP (Central Counterparty)',
    definition: 'An entity that interposes itself between buyers and sellers in financial transactions to guarantee performance and mutualize counterparty credit risk.',
    category: 'Core Concepts'
  },
  {
    term: 'Novation',
    definition: 'The legal replacement of an original contract between two parties with two new contracts between each party and a central counterparty, extinguishing bilateral exposure.',
    category: 'Core Concepts'
  },
  {
    term: 'Netting',
    definition: 'The offsetting of mutual obligations to reduce the number and size of payments or securities transfers required for settlement.',
    category: 'Risk Management'
  },
  {
    term: 'Margin (Initial)',
    definition: 'Collateral posted at the initiation of a trade to protect against potential future exposure to counterparty default.',
    category: 'Risk Management'
  },
  {
    term: 'Margin (Variation)',
    definition: 'Collateral transferred daily (or intraday) to reflect changes in the market value of cleared positions.',
    category: 'Risk Management'
  },
  {
    term: 'Haircut',
    definition: 'A discount applied to the market value of collateral to create a buffer against price fluctuations.',
    category: 'Risk Management'
  },
  {
    term: 'DTCC/FICC',
    definition: 'Depository Trust & Clearing Corporation / Fixed Income Clearing Corporation—the sole CCP for U.S. Treasury repo markets.',
    category: 'U.S. Markets'
  },
  {
    term: 'BNY Mellon',
    definition: 'Bank of New York Mellon—the sole clearing bank for U.S. repo markets, holding custodial accounts for FICC and market participants.',
    category: 'U.S. Markets'
  },
  {
    term: 'CBES',
    definition: 'Commercial Book-Entry System—the Federal Reserve\'s definitive ledger for U.S. Treasury securities ownership.',
    category: 'U.S. Markets'
  },
  {
    term: 'JSCC',
    definition: 'Japan Securities Clearing Corporation—the central counterparty for Japanese securities markets, including JGB repo.',
    category: 'Asian Markets'
  },
  {
    term: 'CDP',
    definition: 'Central Depository (Pte) Limited—the clearing house for Singapore securities, with limited repo clearing capabilities.',
    category: 'Asian Markets'
  },
  {
    term: 'HKSCC',
    definition: 'Hong Kong Securities Clearing Company—the clearing house for Hong Kong equities, with limited repo clearing.',
    category: 'Asian Markets'
  },
  {
    term: 'Tri-Party Repo',
    definition: 'A repo transaction where a third party (clearing bank) manages collateral selection, valuation, and settlement between borrower and lender.',
    category: 'Market Structure'
  },
  {
    term: 'Bilateral Repo',
    definition: 'A repo transaction where two parties face each other directly without a central counterparty, each bearing the other\'s credit risk.',
    category: 'Market Structure'
  },
  {
    term: 'Sponsored Member',
    definition: 'A market participant that accesses central clearing through a direct CCP member (e.g., a hedge fund sponsored by a dealer bank).',
    category: 'Market Structure'
  },
  {
    term: 'Default Waterfall',
    definition: 'The ordered sequence of financial resources used by a CCP to absorb losses from a member default.',
    category: 'Risk Management'
  },
  {
    term: 'PFMI',
    definition: 'Principles for Financial Market Infrastructures—international standards set by CPMI-IOSCO for payment, clearing, and settlement systems.',
    category: 'Regulation'
  },
  {
    term: 'FMU',
    definition: 'Financial Market Utility—a systemically important financial market infrastructure designated under the U.S. Dodd-Frank Act.',
    category: 'Regulation'
  },
  {
    term: 'Joint Clearing Members',
    definition: 'Large clearing members that participate in multiple CCPs simultaneously, creating potential transmission channels for stress across markets (Aldasoro & Veraart, BIS WP 1052).',
    category: 'Risk Management'
  },
  {
    term: 'Cover-2 Standard',
    definition: 'CCP stress testing standard requiring sufficient prefunded resources to withstand the simultaneous default of the two clearing members with the largest exposures; challenged by research showing interconnectedness effects.',
    category: 'Risk Management'
  },
  {
    term: 'Novation',
    definition: 'The legal replacement of an original contract between two parties with two new contracts between each party and a central counterparty, extinguishing bilateral exposure.',
    category: 'Core Concepts'
  },
  {
    term: 'Guarantee Fund',
    definition: 'Prefunded resources contributed by CCP members to mutualize losses after a defaulting member\'s own resources are exhausted; also called default fund or clearing fund.',
    category: 'Risk Management'
  },
  {
    term: 'Variation Margin Gains Haircutting (VMGH)',
    definition: 'A CCP loss allocation mechanism where variation margin payments to non-defaulting members are reduced (\'haircutted\') to absorb losses from a member default; creates potential spillovers to other CCPs.',
    category: 'Risk Management'
  },
  {
    term: 'Intra-Day Credit',
    definition: 'Credit extended by a clearing bank to repo market participants during the trading day, enabling securities settlement before final funding; a key systemic risk in tri-party repo markets.',
    category: 'Market Structure'
  },
  {
    term: 'Contagion',
    definition: 'The transmission of financial stress from one entity to others through direct or indirect linkages; in CCP contexts, often occurs through shared clearing membership or correlated collateral.',
    category: 'Risk Management'
  },
  {
    term: 'Recovery and Resolution',
    definition: 'Frameworks for managing CCPs in financial distress—recovery involves tools to prevent failure; resolution addresses how authorities handle a failing CCP without taxpayer bailout.',
    category: 'Regulation'
  }
]

export const sources = [
  {
    title: 'Repo & CCP Frequently Asked Questions',
    author: 'ICMA European Repo and Collateral Council',
    url: 'https://www.icmagroup.org/market-practice-and-regulatory-policy/repo-and-collateral-markets/icma-ercc-publications/frequently-asked-questions-on-repo/',
    type: 'Industry Guide',
    description: 'Comprehensive FAQ covering repo fundamentals and CCP functions.'
  },
  {
    title: 'Principles for Financial Market Infrastructures',
    author: 'CPMI-IOSCO',
    url: 'https://www.bis.org/cpmi/publ/d101.htm',
    type: 'Regulatory Standard',
    description: 'International standards for payment, clearing, and settlement systems including CCPs.'
  },
  {
    title: 'Japan Securities Clearing Corporation',
    author: 'JPX Group',
    url: 'https://www.jpx.co.jp/jscc/en/',
    type: 'Official Website',
    description: 'Official information on JSCC clearing services and risk management.'
  },
  {
    title: 'Changes in repo markets and the necessity for CCPs in Korea',
    author: 'Journal of Derivatives and Quantitative Studies',
    url: 'https://www.emerald.com/jdqs/article/32/1/2/1214020',
    type: 'Academic Paper',
    description: 'Analysis of Korean repo market development and CCP necessity.'
  },
  {
    title: 'SGX Clearing Information',
    author: 'Singapore Exchange',
    url: 'https://www.sgx.com/securities/clearing-information',
    type: 'Official Documentation',
    description: 'Clearing rules and procedures for Singapore securities markets.'
  },
  {
    title: 'HKEX CCP Disclosures',
    author: 'Hong Kong Exchanges and Clearing',
    url: 'https://www.hkex.com.hk/Services/Clearing/Securities/CCP-Disclosures',
    type: 'Regulatory Disclosure',
    description: 'Quantitative disclosures for HKEX central counterparty clearing.'
  },
  {
    title: 'The impact of CCPs\' margin policies on repo markets',
    author: 'BIS Working Papers',
    url: 'https://www.bis.org/publ/work515.pdf',
    type: 'Research Paper',
    description: 'BIS analysis of CCP margin policies and their effects on repo markets.'
  },
  {
    title: 'CCP Global Clearing Report 2024',
    author: 'CCP Global (CCPG)',
    url: 'https://ccp-global.org/amr',
    type: 'Industry Report',
    description: 'Annual review of global clearing market trends and developments.'
  },
  {
    title: 'Systemic Risk in Markets with Multiple Central Counterparties',
    author: 'Aldasoro & Veraart, BIS Working Paper No 1052',
    url: 'https://www.bis.org/publ/work1052.htm',
    type: 'Academic Research',
    description: 'Analysis of how joint clearing membership transmits stress across multiple CCPs; introduces framework for quantifying payment shortfalls and challenges Cover-2 standard assumptions.'
  },
  {
    title: 'Clearing Houses 101: What They Are and How They Work',
    author: 'Futures Trading Pedia',
    url: 'https://futurestradingpedia.com/clearing-house-explained-what-is-a-clearing-organization-and-how-does-it-work/',
    type: 'Educational Primer',
    description: 'Comprehensive primer on clearing house functions: novation, margining, default management, netting, and guarantee funds.'
  },
  {
    title: 'Tri-Party Repo Infrastructure Reform',
    author: 'Federal Reserve Bank of New York',
    url: 'https://www.newyorkfed.org/banking/tpr_infr_reform.html',
    type: 'Official Documentation',
    description: 'FRBNY framework for tri-party repo market reforms addressing systemic risk from clearing bank intra-day credit.'
  },
  {
    title: 'Central Counterparties: Addressing their Too Important to Fail Status',
    author: 'IMF Working Paper WP/15/21',
    url: 'https://www.imf.org/external/pubs/ft/wp/2015/wp1521.pdf',
    type: 'Policy Research',
    description: 'IMF analysis of CCP interconnectedness, systemic importance, and resolution frameworks for too-important-to-fail clearing houses.'
  },
  {
    title: 'How Does the Repo Market Behave Under Stress?',
    author: 'IMF Working Paper WP/21/267',
    url: 'https://imf.org/-/media/Files/Publications/WP/2021/English/wpiea2021267-print-pdf.ashx',
    type: 'Academic Research',
    description: 'Evidence from the COVID-19 crisis on repo market liquidity risk, financial networks, and market microstructure.'
  }
]
