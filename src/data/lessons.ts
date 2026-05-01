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
  region: 'US' | 'Asia'
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
