import { Module } from './types'

export const quantRiskModule: Module = {
  id: 'quant-risk',
  title: 'Quantitative Risk Models',
  region: 'Global',
  description: 'Value at Risk (VaR), Expected Shortfall, stress testing, and model risk in financial institutions.',
  lessons: [
    {
      id: 'lesson-1',
      title: 'VaR, CVaR & Expected Shortfall',
      duration: '45 min',
      content: `
## Value at Risk (VaR)

VaR answers: "What is my maximum loss at a given confidence level over a specific time horizon?"

**Definition:**
VaR(α) = The loss level that will not be exceeded with probability (1-α)

**Example:**
- 99% VaR of $10 million over 1 day
- Meaning: We expect losses to exceed $10m only 1 day out of 100
- Or: We are 99% confident losses won't exceed $10m

## VaR Calculation Methods

### Historical Simulation

**Method:**
1. Collect historical returns (typically 1-3 years)
2. Apply current portfolio weights to historical scenarios
3. Sort simulated P&L results
4. VaR = (1-α) percentile of distribution

**Pros:**
- Non-parametric (no distribution assumptions)
- Captures actual historical correlations
- Simple to implement

**Cons:**
- Assumes future = past
- Doesn't capture "unprecedented" events
- Equal weighting of old and recent data

### Variance-Covariance (Parametric)

**Assumption:** Returns are normally distributed

**Formula:**
VaR = Portfolio Value × Z_α × σ_p × √t

Where:
- Z_α = standard normal quantile (2.33 for 99%, 1.65 for 95%)
- σ_p = portfolio volatility
- t = time horizon

**Portfolio Volatility:**
σ_p = √(w'Σw)

Where w = weight vector, Σ = covariance matrix

**Pros:**
- Analytically tractable
- Can calculate quickly
- "What-if" analysis easy

**Cons:**
- Normality assumption fails (fat tails)
- Correlations unstable in crisis
- Linear approximations miss options gamma

### Monte Carlo Simulation

**Method:**
1. Specify distribution parameters (or use copulas)
2. Generate thousands of random scenarios
3. Revalue portfolio under each scenario
4. VaR = (1-α) percentile of simulated P&L

**Pros:**
- Can model complex instruments
- Flexible distributional assumptions
- Captures path-dependency

**Cons:**
- Computationally intensive
- Model risk (garbage in, garbage out)
- Correlation/copula misspecification

## VaR Criticisms & Limitations

**1. Says Nothing About Tail Beyond VaR:**
99% VaR tells you what happens 99% of the time, but nothing about the 1% tail—the catastrophic losses.

**2. Not Subadditive:**
VaR(A+B) may exceed VaR(A) + VaR(B)—violates diversification principle

**3. Multiple Valid Results:**
Different methods produce different VaR numbers for same portfolio

**4. Procyclicality:**
In calm markets, VaR drops → allows more risk → builds up for crisis

**5. The "Lehman Brothers" Problem:**
Lehman reported VaR that was "correct" by definition—but it was grossly inadequate

## Expected Shortfall (ES) / CVaR

**Definition:**
ES(α) = Expected loss, given that loss exceeds VaR(α)

**Formula:**
ES = E[X | X > VaR]

**Example:**
- 99% VaR = $10 million
- 99% ES = $25 million
- Interpretation: When losses exceed VaR (1% of time), average loss is $25m

**Advantages Over VaR:**
1. **Coherent risk measure:** Satisfies subadditivity (ES(A+B) ≤ ES(A)+ES(B))
2. **Captures tail risk:** Accounts for severity, not just threshold
3. **Convexity:** Easier optimization

**Calculation:**
Historical: Average of losses beyond VaR threshold
Parametric: For normal distribution, ES = VaR × [φ(z_α)/(1-α)]

## Basel III Trading Book Reforms (FRTB)

**Fundamental Review of the Trading Book:**

**Why Change from VaR:**
- VaR failed in 2008
- Trading book losses far exceeded VaR
- Model risk underestimated

**New Standard:**
**Expected Shortfall (ES) at 97.5% confidence, 10-day holding period**

**Rationale:**
- ES captures tail risk
- 97.5% ES ≈ 99% VaR for normal distribution
- But ES >> VaR for fat-tailed distributions

**Capital Charge:**
Capital = max(ES_current, ES_stressed) × multiplier

**Stressed ES:**
Calculated using period of significant financial stress

## Stress Testing

**Complement to VaR/ES:**
- VaR/ES: Statistical, "expected" tail behavior
- Stress tests: Scenario-based, "what if"

### Types of Stress Tests

**Historical Scenarios:**
- 2008 financial crisis
- 2020 COVID crash
- 1998 LTCM/Russian default
- 1987 Black Monday
- Apply these return scenarios to current portfolio

**Hypothetical Scenarios:**
- 200bp parallel rate shift
- Equity market -30%
- Emerging market crisis
- Sovereign default cascade

**Reverse Stress Tests:**
- Start with portfolio failure
- Work backward: what scenario causes this?
- Identifies vulnerabilities

### Regulatory Stress Testing

**US CCAR (Comprehensive Capital Analysis and Review):**
- Annual Fed stress tests for large banks
- Severely adverse scenario
- Quantitative + qualitative assessment
- Pass = ability to pay dividends/buybacks

**EU EBA Stress Tests:**
- Biennial banking sector assessment
- Disclosure of bank-level results
- "Bottom up" methodology

**COVID-19 Stress Tests:**
- Banks assessed under pandemic scenarios
- Most passed; capital buffers used
- Real-world validation of stress testing

## Model Risk Management

**SR 11-7 (Fed Guidance on Model Risk):**

**Model Risk:**
Potential for adverse consequences from decisions based on incorrect or misused model outputs

**Three Lines of Defense:**

**1. Model Development:**
- Conceptual soundness
- Input data quality
- Sensitivity testing
- Documentation

**2. Model Validation:**
- Independent from developers
- Ongoing monitoring
- Backtesting
- Periodic re-validation

**3. Internal Audit:**
- Governance review
- Compliance assessment

### Backtesting VaR

**Procedure:**
- Count days when actual loss exceeded VaR
- Should be approximately (1-confidence level) × days
- 99% VaR: expect ~2.5 exceedances per year

**Traffic Light Approach (Basel):**
- Green: 0-4 exceedances (acceptable)
- Yellow: 5-9 exceedances (investigate)
- Red: 10+ exceedances (model rejected, capital penalty)

**Limitations:**
- Even "good" models will occasionally show clusters
- Exceedances may indicate good risk-taking, not bad model
- Ignores magnitude of exceedances

## Key Model Risk Failures

**LTCM (1998):**
- Relied on convergence trades
- Assumed historical correlation would persist
- Russia default caused correlation → 1
- Lost $4.6 billion in months

**CDO Models (2008):**
- Assumed housing prices wouldn't fall nationally
- Gaussian copula underestimated tail correlation
- AAA-rated tranches defaulted
- $435 billion in CDO losses

**London Whale (2012):**
- VaR model understated risk by factor of 10
- Incorrect correlation inputs
- JPMorgan lost $6.2 billion

## Current Best Practices

**Model Governance:**
- Inventory of all models
- Risk tiering (materiality assessment)
- Regular validation schedules
- Use limitations and approval processes

**Model Development Standards:**
- Sensitivity analysis required
- Out-of-sample testing
- Benchmark models (simple alternatives)
- Documentation of limitations

**Challenger Models:**
- Maintain alternative models alongside primary
- Alert when models diverge significantly

## Key Takeaways

**VaR is useful but flawed:** Good for normal times, fails in crises, ignores tail severity
**Expected Shortfall is better:** Captures tail risk, satisfies diversification principle
**Stress testing is essential:** Scenarios reveal VaR/ES blind spots
**Model risk is real:** LTCM, 2008, London Whale demonstrate model failure consequences
**Governance matters:** Independent validation, backtesting, and use limitations required

[External Reading: BCBS FRTB Standards](https://www.bis.org/bcbs/publ/d352.pdf)
`,
      keyPoints: [
        'VaR: Maximum loss at given confidence level (e.g., 99% VaR); ignores tail beyond threshold',
        'Expected Shortfall (ES/CVaR): Average loss beyond VaR; satisfies subadditivity; better risk measure',
        'FRTB: Basel III replaces VaR with ES at 97.5% for trading book capital',
        'Backtesting: Count exceedances; green (0-4), yellow (5-9), red (10+)',
        'Model risk failures: LTCM correlation breakdown, CDO Gaussian copula, London Whale VaR error'
      ],
      quiz: [
        {
          question: 'What is the key limitation of VaR that Expected Shortfall addresses?',
          options: ['Computational complexity', 'VaR ignores the severity of losses beyond the threshold', 'VaR requires normal distribution', 'VaR is always too conservative'],
          correctIndex: 1,
          explanation: 'VaR tells you the loss level that will not be exceeded at a given confidence level but says nothing about how bad losses might be in the tail beyond that threshold. ES (Expected Shortfall) captures the average of those tail losses.'
        },
        {
          question: 'What is the FRTB standard for trading book capital?',
          options: ['99% VaR, 1-day', '97.5% Expected Shortfall, 10-day', '95% VaR, 10-day', 'Maximum historical loss'],
          correctIndex: 1,
          explanation: 'The Fundamental Review of the Trading Book (FRTB) replaced VaR with Expected Shortfall at 97.5% confidence over a 10-day horizon to better capture tail risk in trading portfolios.'
        },
        {
          question: 'What caused the LTCM failure in 1998?',
          options: ['Interest rate spikes', 'Model assumption that correlations would remain stable failed', 'Currency devaluation', 'Fraud'],
          correctIndex: 1,
          explanation: 'LTCM\'s models assumed historical correlations would persist. When Russia defaulted, correlations spiked toward 1 ("flight to quality"), causing convergence trades to diverge instead of converge, wiping out $4.6 billion.'
        }
      ]
    }
  ]
}
