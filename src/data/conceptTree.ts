export interface ConceptNode {
  id: string
  label: string
  description?: string
  children?: ConceptNode[]
  relatedLessons?: string[]
  externalLinks?: ExternalLink[]
  completed?: boolean
}

export interface ExternalLink {
  title: string
  url: string
  source: string
}

export const financeConceptTree: ConceptNode = {
  id: 'root',
  label: 'Global Finance',
  description: 'Understanding the interconnected world of financial systems, markets, and institutions',
  children: [
    {
      id: 'money-markets',
      label: 'Money Markets',
      description: 'Short-term debt markets, liquidity, and funding',
      children: [
        {
          id: 'repo',
          label: 'Repurchase Agreements (Repo)',
          description: 'Collateralized short-term lending',
          relatedLessons: ['us-repo/lesson-1', 'asia-repo/lesson-1'],
          externalLinks: [
            { title: 'ICMA Repo FAQ', url: 'https://www.icmagroup.org/market-practice-and-regulatory-policy/repo-and-collateral-markets/icma-ercc-publications/frequently-asked-questions-on-repo/', source: 'ICMA' },
            { title: 'Fed Tri-Party Reform', url: 'https://www.newyorkfed.org/banking/tpr_infr_reform.html', source: 'Federal Reserve' }
          ]
        },
        {
          id: 'commercial-paper',
          label: 'Commercial Paper',
          description: 'Short-term corporate debt instruments'
        },
        {
          id: 'treasury-bills',
          label: 'Treasury Bills',
          description: 'Government short-term securities'
        },
        {
          id: 'certificates-deposit',
          label: 'Certificates of Deposit',
          description: 'Bank-issued time deposits'
        }
      ]
    },
    {
      id: 'central-banking',
      label: 'Central Banking',
      description: 'Monetary policy, interest rates, and financial stability',
      children: [
        {
          id: 'monetary-policy',
          label: 'Monetary Policy',
          description: 'Central bank actions to influence economic conditions',
          children: [
            {
              id: 'federal-funds-rate',
              label: 'Federal Funds Rate',
              description: 'US overnight interbank lending rate',
              relatedLessons: ['us-repo/lesson-7'],
              externalLinks: [
                { title: 'Fed Explained: Monetary Policy', url: 'https://www.federalreserve.gov/aboutthefed/fedexplained/monetary-policy.htm', source: 'Federal Reserve' },
                { title: 'St. Louis Fed: Policy Implementation', url: 'https://www.stlouisfed.org/in-plain-english/the-fed-implements-monetary-policy', source: 'St. Louis Fed' }
              ]
            },
            {
              id: 'quantitative-easing',
              label: 'Quantitative Easing',
              description: 'Large-scale asset purchases by central banks'
            },
            {
              id: 'interest-on-reserves',
              label: 'Interest on Reserves',
              description: 'Paying interest on bank reserves held at central bank',
              externalLinks: [
                { title: 'Fed Policy Tools', url: 'https://www.stlouisfed.org/in-plain-english/the-fed-implements-monetary-policy', source: 'St. Louis Fed' }
              ]
            }
          ]
        },
        {
          id: 'central-banks',
          label: 'Major Central Banks',
          description: 'Key global monetary authorities',
          children: [
            { id: 'federal-reserve', label: 'Federal Reserve (US)', description: 'US central bank' },
            { id: 'ecb', label: 'European Central Bank', description: 'Eurozone monetary authority' },
            { id: 'bank-of-england', label: 'Bank of England', description: 'UK central bank' },
            { id: 'bank-of-japan', label: 'Bank of Japan', description: 'Japanese monetary authority' },
            { id: 'pbc', label: 'People\'s Bank of China', description: 'Chinese central bank' }
          ]
        },
        {
          id: 'lender-last-resort',
          label: 'Lender of Last Resort',
          description: 'Central bank role in providing emergency liquidity'
        }
      ]
    },
    {
      id: 'derivatives',
      label: 'Derivatives',
      description: 'Financial contracts deriving value from underlying assets',
      children: [
        {
          id: 'interest-rate-derivatives',
          label: 'Interest Rate Derivatives',
          description: 'Swaps, futures, options on interest rates',
          externalLinks: [
            { title: 'IGC Working Paper on Derivatives', url: 'https://www.theigc.org/sites/default/files/2015/02/Sundaram-2012-Working-Paper.pdf', source: 'IGC' },
            { title: 'IMF on Derivatives', url: 'https://www.elibrary.imf.org/display/book/9781589062917/ch04.xml', source: 'IMF' }
          ]
        },
        {
          id: 'fx-derivatives',
          label: 'FX Derivatives',
          description: 'Currency forwards, swaps, options'
        },
        {
          id: 'credit-derivatives',
          label: 'Credit Derivatives',
          description: 'CDS, total return swaps, credit-linked notes'
        },
        {
          id: 'equity-derivatives',
          label: 'Equity Derivatives',
          description: 'Stock options, futures, swaps'
        }
      ]
    },
    {
      id: 'ccps',
      label: 'Central Counterparties',
      description: 'Clearing houses that guarantee trades',
      children: [
        {
          id: 'ccp-functions',
          label: 'CCP Functions',
          description: 'Novation, netting, margining, default management',
          externalLinks: [
            { title: 'Clearing Houses Explained', url: 'https://futurestradingpedia.com/clearing-house-explained-what-is-a-clearing-organization-and-how-does-it-work/', source: 'Futures Trading Pedia' }
          ]
        },
        {
          id: 'us-ccps',
          label: 'US CCPs',
          description: 'DTCC, CME, ICE, OCC',
          relatedLessons: ['us-repo/lesson-3', 'us-repo/lesson-4']
        },
        {
          id: 'asia-ccps',
          label: 'Asia CCPs',
          description: 'JSCC, CDP, HKSCC, KSD',
          relatedLessons: ['asia-repo/lesson-2', 'asia-repo/lesson-3']
        },
        {
          id: 'ccp-risk',
          label: 'CCP Risk Management',
          description: 'Default waterfalls, stress testing, recovery/resolution',
          externalLinks: [
            { title: 'BIS WP 1052: Multi-CCP Risk', url: 'https://www.bis.org/publ/work1052.htm', source: 'BIS' }
          ]
        }
      ]
    },
    {
      id: 'systemic-risk',
      label: 'Systemic Risk',
      description: 'Risks to the entire financial system',
      children: [
        {
          id: 'contagion',
          label: 'Financial Contagion',
          description: 'Transmission of distress across institutions',
          externalLinks: [
            { title: 'BIS WP 597: Bank Networks', url: 'https://www.bis.org/publ/work597.pdf', source: 'BIS' },
            { title: 'ECB on Contagion', url: 'https://www.ecb.europa.eu/pub/pdf/scpwps/ecb.wp2929~19cda4a673.en.pdf', source: 'ECB' },
            { title: 'OFR on Financial Networks', url: 'https://www.financialresearch.gov/working-papers/files/OFRwp-2015-21_Contagion-in-Financial-Networks.pdf', source: 'OFR' }
          ]
        },
        {
          id: 'financial-crises',
          label: 'Financial Crises',
          description: 'Historical crisis patterns and lessons',
          children: [
            { id: '2008-crisis', label: '2008 Global Financial Crisis', description: 'Housing bubble, Lehman, repo market seize' },
            { id: 'covid-crisis', label: '2020 COVID Crisis', description: 'Flight to quality, central bank intervention' },
            { id: 'asian-crisis', label: '1997 Asian Financial Crisis', description: 'Currency attacks, IMF interventions' }
          ]
        },
        {
          id: 'too-big-fail',
          label: 'Too Big to Fail',
          description: 'Systemically important institutions',
          externalLinks: [
            { title: 'IMF on CCP Resolution', url: 'https://www.imf.org/external/pubs/ft/wp/2015/wp1521.pdf', source: 'IMF' }
          ]
        }
      ]
    },
    {
      id: 'global-finance',
      label: 'Global Finance',
      description: 'International capital flows and exchange',
      children: [
        {
          id: 'capital-flows',
          label: 'International Capital Flows',
          description: 'Cross-border investment and financing',
          externalLinks: [
            { title: 'EconLib: International Capital Flows', url: 'https://www.econlib.org/library/Enc/InternationalCapitalFlows.html', source: 'EconLib' },
            { title: 'Fed on Capital Flows', url: 'https://www.federalreserve.gov/econres/notes/feds-notes/globalization-and-the-geography-of-capital-flows-20190906.html', source: 'Federal Reserve' }
          ]
        },
        {
          id: 'balance-payments',
          label: 'Balance of Payments',
          description: 'Record of all economic transactions between countries',
          externalLinks: [
            { title: 'Financial Edge: BoP Guide', url: 'https://www.fe.training/free-resources/financial-markets/global-economics-balance-of-payments/', source: 'Financial Edge' }
          ]
        },
        {
          id: 'exchange-rates',
          label: 'Exchange Rates',
          description: 'FX markets and currency valuation'
        },
        {
          id: 'sovereign-debt',
          label: 'Sovereign Debt',
          description: 'Government borrowing and debt management'
        }
      ]
    },
    {
      id: 'regulation',
      label: 'Financial Regulation',
      description: 'Rules governing financial institutions and markets',
      children: [
        {
          id: 'pfmi',
          label: 'PFMI Standards',
          description: 'Principles for Financial Market Infrastructures',
          externalLinks: [
            { title: 'CPMI-IOSCO PFMI', url: 'https://www.bis.org/cpmi/publ/d101.htm', source: 'BIS' }
          ]
        },
        {
          id: 'dodd-frank',
          label: 'Dodd-Frank Act',
          description: 'US financial reform legislation'
        },
        {
          id: 'basel-iii',
          label: 'Basel III',
          description: 'Global banking capital standards'
        },
        {
          id: 'emir',
          label: 'EMIR',
          description: 'EU derivatives regulation'
        }
      ]
    }
  ]
}
