import { Module } from './types'

export const basel3Module: Module = {
  id: 'basel-iii',
  title: 'Basel III Regulatory Capital',
  region: 'Global',
  description: 'Comprehensive coverage of Basel III capital requirements, risk-weighted assets, liquidity ratios, and global bank regulation.',
  lessons: [
    {
      id: 'lesson-1',
      title: 'Capital Requirements & CET1',
      duration: '45 min',
      content: `
## Basel III Overview

Basel III is the third iteration of global banking regulation standards developed by the Basel Committee on Banking Supervision (BCBS), implemented following the 2008 financial crisis.

## Capital Structure

**Common Equity Tier 1 (CET1):**
- Common shares, retained earnings, disclosed reserves
- Highest quality, loss-absorbing on going-concern basis
- Minimum: 4.5% + 2.5% buffer = 7.0%
- G-SIBs: Additional 1-3.5% surcharge (up to 10.5% total)

**Additional Tier 1 (AT1):**
- Perpetual preferred shares, CoCos
- Callable after 5 years, discretionary dividends

**Tier 2:**
- Subordinated debt (>=5 years maturity)
- Loss-absorbing in resolution

## Risk-Weighted Assets (RWA)

RWA scales assets by riskiness. Three calculation approaches:

**Standardized Approach:**
- Cash/sovereigns: 0-20%
- Corporates: 20-150%
- Mortgages: 35%
- Equities: 250-1250%

**IRB Approach:**
- Banks estimate PD, LGD, EAD
- More risk-sensitive but model-dependent

**Output Floor (Basel 3.1):** IRB RWA cannot be <72.5% of standardized RWA

## Leverage Ratio

Non-risk-based backstop: Tier 1 / Total Exposure >= 3%

## Real-World Examples

**JPMorgan (2024):**
- CET1: 15.7% (min: 11.9% with surcharge)
- Leverage: 6.8% (min: 3%)

**Fed CCAR 2024:** All 31 banks passed stress tests

[External Reading: BCBS](https://www.bis.org/bcbs/)
`,
      keyPoints: [
        'CET1 minimum 4.5% + 2.5% buffer + G-SIB surcharge = up to 10.5%',
        'RWA weights assets by risk; standardized uses fixed weights, IRB uses models',
        'Leverage ratio (3% min) is non-risk-based backstop',
        'Basel 3.1 adds 72.5% output floor for IRB banks'
      ],
      quiz: [
        {
          question: 'What is the minimum CET1 ratio under Basel III including the capital conservation buffer?',
          options: ['4.5%', '7.0%', '8.0%', '10.5%'],
          correctIndex: 1,
          explanation: 'Minimum CET1 is 4.5% plus 2.5% capital conservation buffer = 7.0%. G-SIBs have additional surcharges up to 3.5%.'
        },
        {
          question: 'What is the purpose of the leverage ratio?',
          options: ['Replace risk-weighted capital', 'Provide non-risk-based backstop', 'Reduce liquidity requirements', 'Eliminate Tier 2 capital'],
          correctIndex: 1,
          explanation: 'The leverage ratio (Tier 1 / Total Exposure) provides a non-risk-based backstop to prevent excessive leverage, regardless of risk weights.'
        },
        {
          question: 'What is the Basel 3.1 output floor?',
          options: ['IRB RWA cannot exceed standardized RWA', 'IRB RWA cannot be less than 72.5% of standardized RWA', 'Total capital must equal 72.5% of assets', 'Leverage ratio minimum is 7.25%'],
          correctIndex: 1,
          explanation: 'The output floor limits capital savings from internal models: IRB RWA must be at least 72.5% of what the standardized approach would produce.'
        }
      ]
    },
    {
      id: 'lesson-2',
      title: 'Liquidity Standards: LCR & NSFR',
      duration: '40 min',
      content: `
## Liquidity Coverage Ratio (LCR)

**Formula:**
LCR = (High-Quality Liquid Assets) / (Net Cash Outflows over 30 days)

**Minimum:** 100%

**HQLA Tiers:**
- Level 1: Cash, central bank reserves, sovereigns (unlimited, 0% haircut)
- Level 2A: Agencies, supranationals (max 40% of HQLA, 15% haircut)
- Level 2B: IG corporate bonds, equities (max 15% of HQLA, 25-50% haircut)

**Net Cash Outflows:**
- Retail deposits: 3-10% run-off rate
- Wholesale funding: 20-100% run-off rate
- Derivatives payables: 100%

**Why 30 days?**
Assumes central bank backstop available beyond 30-day window

## Net Stable Funding Ratio (NSFR)

**Formula:**
NSFR = (Available Stable Funding) / (Required Stable Funding)

**Minimum:** 100%

**Available Stable Funding (ASF):**
- Regulatory capital: 100%
- Stable retail deposits: 95%
- Less stable retail: 50%
- Wholesale funding (1-5 years): 50%

**Required Stable Funding (RSF):**
- Cash, short-term securities: 0%
- Mortgages: 65%
- Corporate loans: 85%
- Long-term assets: 100%

## LCR vs NSFR

**LCR:** Short-term liquidity (30 days)
**NSFR:** Structural funding mismatches (1-year horizon)

**Interaction:**
- LCR prevents fire sales during stress
- NSFR prevents over-reliance on short-term wholesale funding
- Together: comprehensive liquidity framework

## Industry Impact

**Pre-Basel III:**
- No global liquidity standards
- Over-reliance on wholesale funding
- Maturity transformation not constrained

**Post-Basel III:**
- Banks hold larger liquidity buffers
- Reduced reliance on short-term funding
- Higher funding costs (longer-term liabilities more expensive)
- "FHLB problem" in US—regulatory arbitrage

**US Implementation Issues:**
- FHLB advances excluded from LCR (created arbitrage)
- Fed reserve balances count as HQLA (post-QE benefit)

## Key Takeaways

**LCR** ensures banks can survive 30-day stress without fire sales
**NSFR** prevents maturity mismatch in normal times
**Both binding:** Large banks must satisfy simultaneously
**Trade-off:** Higher liquidity = lower returns

[External Reading: BIS Liquidity Standards](https://www.bis.org/bcbs/publ/d295.pdf)
`,
      keyPoints: [
        'LCR: HQLA / 30-day net cash outflows >= 100%',
        'NSFR: Stable funding / Required funding >= 100%',
        'LCR addresses short-term stress; NSFR addresses structural mismatch',
        'HQLA Level 1 (cash/sovereigns) unlimited; Level 2B (corporates) capped at 15%'
      ],
      quiz: [
        {
          question: 'What is the LCR minimum requirement?',
          options: ['75%', '90%', '100%', '125%'],
          correctIndex: 2,
          explanation: 'Banks must hold High-Quality Liquid Assets equal to at least 100% of projected net cash outflows over a 30-day stress period.'
        },
        {
          question: 'What is the key difference between LCR and NSFR?',
          options: ['LCR uses risk weights; NSFR does not', 'LCR is 30-day; NSFR is structural/1-year horizon', 'LCR applies to small banks only', 'NSFR was eliminated in Basel 3.1'],
          correctIndex: 1,
          explanation: 'LCR addresses short-term liquidity stress (30 days), while NSFR addresses structural funding mismatches over a 1-year horizon.'
        },
        {
          question: 'What is the maximum Level 2B assets can constitute of total HQLA?',
          options: ['5%', '15%', '25%', '40%'],
          correctIndex: 1,
          explanation: 'Level 2B assets (IG corporate bonds, certain equities) are capped at 15% of total HQLA to ensure liquidity quality.'
        }
      ]
    }
  ]
}
