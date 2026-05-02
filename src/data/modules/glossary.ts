import { GlossaryItem } from './types'

export const glossary: GlossaryItem[] = [
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
  },
  {
    term: 'CET1',
    definition: 'Common Equity Tier 1—the highest quality bank capital, comprising common shares and retained earnings; primary component of Basel III capital requirements.',
    category: 'Bank Regulation'
  },
  {
    term: 'Risk-Weighted Assets (RWA)',
    definition: 'Bank assets weighted by credit risk, market risk, and operational risk; used to calculate minimum capital requirements under Basel III.',
    category: 'Bank Regulation'
  },
  {
    term: 'LCR',
    definition: 'Liquidity Coverage Ratio—Basel III requirement that banks hold sufficient high-quality liquid assets to cover 30 days of net cash outflows under stress.',
    category: 'Bank Regulation'
  },
  {
    term: 'NSFR',
    definition: 'Net Stable Funding Ratio—Basel III requirement that banks maintain stable funding (equity and long-term liabilities) relative to the liquidity of their assets.',
    category: 'Bank Regulation'
  },
  {
    term: 'CDS',
    definition: 'Credit Default Swap—a financial contract where the protection buyer makes periodic payments to the seller in exchange for a payoff if a credit event occurs on a reference entity.',
    category: 'Derivatives'
  },
  {
    term: 'CLS Bank',
    definition: 'Continuous Linked Settlement Bank—a specialized financial institution that eliminates settlement risk in FX transactions through payment-versus-payment (PvP) settlement.',
    category: 'FX Markets'
  },
  {
    term: 'NDF',
    definition: 'Non-Deliverable Forward—an FX forward contract where the net difference between the contracted rate and spot rate is settled in a convertible currency, used for currencies with capital controls.',
    category: 'FX Markets'
  },
  {
    term: 'FX Swap',
    definition: 'A simultaneous purchase and sale of identical amounts of one currency for another with two different value dates; effectively a collateralized loan in one currency versus another.',
    category: 'FX Markets'
  },
  {
    term: 'Duration',
    definition: 'A measure of bond price sensitivity to interest rate changes; approximately the percentage change in price for a 1% change in yield.',
    category: 'Fixed Income'
  },
  {
    term: 'Convexity',
    definition: 'The second derivative of bond price with respect to yield; measures how duration changes as yields change, providing a more accurate price sensitivity measure.',
    category: 'Fixed Income'
  },
  {
    term: 'VaR',
    definition: 'Value at Risk—a statistical measure estimating the maximum potential loss over a specified time period at a given confidence level; flawed but widely used risk metric.',
    category: 'Risk Management'
  },
  {
    term: 'Expected Shortfall',
    definition: 'The average loss in the tail beyond the VaR threshold; also called CVaR (Conditional VaR); addresses VaR\'s failure to capture tail risk severity.',
    category: 'Risk Management'
  },
  {
    term: 'HFT',
    definition: 'High-Frequency Trading—algorithmic trading using sophisticated infrastructure and ultra-low latency strategies to execute large numbers of orders at extremely fast speeds.',
    category: 'Market Structure'
  },
  {
    term: 'Market Microstructure',
    definition: 'The study of financial market trading mechanisms, including price formation, liquidity provision, bid-ask spreads, and the impact of market design on outcomes.',
    category: 'Market Structure'
  }
]
