import { Title } from "@solidjs/meta";
import { createSignal } from "solid-js";

// COMPONENTS
import PageTitleBanner from "../components/pageTitleBanner";
import "../components/servicespage.css";

// ASSETS
import newsImage from "../assets/pictures/news.jpeg";
import twisImage from "../assets/pictures/TWIS-sample.png";
import exampleTwis from "../assets/documents/TWIS-example.pdf";

const pageTitle = "Insights";
const pageSubtitle = "Stay informed with timely updates, in-depth reports, and trusted insights that highlight our work for you and the issues shaping today's policy landscape.";

export default function Insights() {
  const [selectedPolicy, setSelectedPolicy] = createSignal(null);

  const policyData = {
    insurance: {
      title: "Insurance Landscape",
      text: "California's insurance market faces unique challenges regarding wildfire risk, Proposition 103 rate regulation, and market stability. California's insurance market is currently navigating its most significant regulatory shift since the passage of Proposition 103 in 1988. Following a period of mass insurer withdrawals and the devastating Los Angeles wildfires in early 2025, the state has moved from a \"reactive\" regulatory posture to a \"forward-looking\" one. At the heart of this transition is the Sustainable Insurance Strategy, a series of reforms designed to entice private carriers back into the market by allowing them to use catastrophe modeling and reinsurance costs—factors previously excluded from rate-making—to set more accurate, risk-based premiums. \n\nThe crisis has been punctuated by the explosive growth of the California FAIR Plan, the state's insurer of last resort. As of late 2025, the FAIR Plan's total exposure surged to over $700 billion as private insurers non-renewed hundreds of thousands of policies in high-risk zones. To address this, policymakers have implemented a historic \"quid pro quo\" arrangement: insurers are now permitted to use modern risk models only if they commit to writing at least 85% of their market share in \"distressed\" or high-wildfire-risk areas. This mandate is intended to depopulate the FAIR Plan and force a redistribution of risk back into the competitive private market. \n\nLooking forward, the legislative and executive focus has shifted toward solvency and consumer protection. In late 2025, Governor Newsom signed a bipartisan package of bills (including AB 226 and SB 495) that grant the FAIR Plan the authority to issue bonds and access lines of credit, reducing the need for sudden, massive assessments on private insurers that could further destabilize the market. Additionally, new laws have increased the \"no-questions-asked\" advance payouts for personal property from 30% to 60% following declared disasters, easing the immediate financial burden on survivors. \n\nDespite these reforms, the market remains volatile. Homeowners are facing \"transitional\" rate hikes, some as high as 20% to 30%, as the state recalibrates after years of suppressed premiums. Policymakers are now considering further \"whole-of-government\" approaches, such as integrating state-funded home hardening grants (AB 888) directly into the rate-approval process. The goal is to create a virtuous cycle where community-level mitigation, such as \"ember-resistant\" zones and fire-safe roofing, leads to measurable premium discounts and long-term market sustainability.We actively monitor Department of Insurance regulations and legislative efforts impacting property, casualty, and life insurance carriers."
    },
    healthcare: {
      title: "Healthcare Landscape",
      text: "In late 2025, California's health policy landscape is undergoing a turbulent shift as state-led affordability initiatives collide with major federal funding reductions. After a decade of steady coverage expansion, the state is transitioning from a \"growth phase\" to a \"defense phase.\" This pivot is driven by the One Big Beautiful Bill Act (H.R. 1), a 2025 federal reconciliation law that slashed Medicaid funding and introduced strict work requirements. California policymakers are now forced to navigate a \"sharp detour,\" balancing the state's ambitious universal-access goals against a multi-billion dollar budget deficit that has already triggered an enrollment freeze for some populations.\n\nA cornerstone of California's 2025 strategy is the newly operational Office of Health Care Affordability (OHCA). For the first time, the state has set a formal statewide spending growth target of 3.5% for 2025. This cap applies to hospitals, physician groups, and insurers alike. While 2025 serves as a \"non-enforceable\" data-gathering year, policymakers have signaled that starting in 2026, entities exceeding these targets will face \"progressive enforcement,\" including public testimony requirements and financial penalties. For a subset of \"high-cost\" hospitals, the state has been even more aggressive, imposing a lower growth cap of 1.8% to curb systemic price inflation.\n\nThe Medi-Cal program—which covers one-third of the state—is the primary battleground for current policy changes. In response to federal cuts and a domestic budget gap, California took the rare step in mid-2025 of freezing new Medi-Cal enrollment for undocumented adults (ages 19–59). Furthermore, the 2025 federal mandates have forced the state to implement eligibility redeterminations every six months (down from annually) and 80-hour monthly work or volunteering requirements for the ACA adult expansion group. State analysts estimate these changes could push up to 3.4 million Californians off of Medicaid by 2027, prompting state leaders to consider \"bridge\" subsidies to keep these individuals from becoming completely uninsured.\n\nIn the 2025 legislative session, lawmakers moved beyond general coverage to target \"hidden\" drivers of healthcare costs, specifically Pharmacy Benefit Managers (PBMs). With the passage of SB 41, California has banned \"spread pricing\"—the practice where PBMs charge insurers more for a drug than they pay the pharmacy—and now requires 100% of manufacturer rebates to be passed through to health plans to lower consumer premiums.\n\nAs we look toward 2026, the primary concern for policymakers is the potential expiration of enhanced federal premium tax credits for Covered California. Without a legislative fix in D.C. or a massive state-funded bailout, average premiums for middle-class Californians are projected to nearly double in January 2026. Consequently, the 2026 legislative session is expected to focus heavily on a \"State Individual Mandate\" overhaul or new state-level subsidies to prevent a mass exodus from the insurance exchange, even as the state's fiscal health remains precarious."
    },
    technology: {
      title: "Technology Landscape",
      text: "California's technology and privacy landscape is defined by a shift from broad consumer rights to granular, high-stakes enforcement of artificial intelligence (AI) and automated systems. Following the 2024 veto of the controversial SB 1047, the state legislature successfully pivoted in 2025 by passing SB 53 (The Transparency in Frontier AI Act). This landmark law, effective January 1, 2026, targets developers of the largest AI models (those with over $500 million in revenue) by requiring them to publicly disclose safety frameworks and report \"critical safety incidents\"—such as the unauthorized exfiltration of model weights or AI-driven attacks on infrastructure—to the state's Office of Emergency Services.\n\nBeyond frontier AI, California has moved aggressively into the regulation of Automated Decision-Making Technology (ADMT). New CCPA regulations, finalized in late 2025, now grant consumers the right to opt out of automated systems that make \"significant decisions\" affecting their lives, such as those used for insurance premiums, job applications, or healthcare. Businesses are now required to provide \"pre-use notices\" that explain the logic behind these algorithms. Additionally, the state has eliminated the \"AI autonomy defense\" through AB 316, ensuring that companies cannot escape liability for harms (like medical misdiagnosis or defamatory content) by claiming the AI acted independently.\n\nEnforcement has entered a more militant phase with the launch of the California Privacy Protection Agency (CPPA) Data Broker Enforcement Strike Force. This division is tasked with policing the state's new DELETE Act infrastructure, specifically the DROP (Delete Request and Opt-Out Platform) system launching in early 2026. DROP acts as a \"one-stop shop\" where Californians can request that every registered data broker in the state delete their personal information simultaneously. Regulators are already issuing seven-figure fines to firms that fail to register or use \"dark patterns\"—manipulative interface designs—to discourage users from exercising their privacy rights.\n\nCalifornia's definition of \"sensitive personal information\" continues to expand faster than federal standards. In 2025, the state became the first to include neural data (brainwave activity from wearables or VR headsets) under its privacy protections. Simultaneously, a package of \"Age Assurance\" laws (including AB 1043) has shifted the burden of child safety onto device operators and app stores, requiring them to verify user ages without collecting government IDs. New rules for \"Companion Chatbots\" also went into effect, mandating that AI-driven social apps include \"break reminders\" for minors and protocols to prevent the generation of content related to self-harm or suicidal ideation.\n\nMoving into 2026, policymakers are expected to focus on provenance and transparency. The California AI Transparency Act (AB 853) will soon require generative AI tools to include \"latent disclosures\" (digital watermarks) in all synthetic media. This effort aims to combat deepfakes ahead of the 2026 election cycle. Furthermore, the legislature is considering AB 566, which would mandate that web browsers include a universal \"Global Privacy Control\" signal by default, effectively allowing users to opt out of data tracking across the entire internet with a single setting."
    }
  };

  return (
    <main>
      <Title>Norwood News</Title>
        <PageTitleBanner 
          bannerImage={newsImage}
          title={pageTitle}
          subtitle={pageSubtitle}
        />

      <div class="container-fluid">
        <div class="row pt-lg-5">
          <h1 class="services-title mb-0 mt-5 mx-0">Policy Spotlights</h1>
        </div>
        <div class="row pb-4">
          <div class="col-lg-3 col-sm-4 mb-4" onClick={() => setSelectedPolicy(selectedPolicy() === 'insurance' ? null : 'insurance')} style={{cursor: "pointer"}}>
            <div class={`card h-100 border-0 shadow-sm ${selectedPolicy() === 'insurance' ? 'bg-light' : ''}`}>
              <div class="card-body d-flex flex-column">
                <h3 class="card-title"><i class="bi bi-shield-fill-check me-2 service-icon"></i>Insurance</h3>
                <div>Expert navigation of rate regulation, licensing laws, and the complex legislative environment surrounding property, casualty, and life insurance.</div>
                <div class="mt-auto pt-3 small fw-bold" style={{color: "#4b5bd3"}}>Click to learn more <i class="bi bi-arrow-down"></i></div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-4 mb-4" onClick={() => setSelectedPolicy(selectedPolicy() === 'healthcare' ? null : 'healthcare')} style={{cursor: "pointer"}}>
            <div class={`card h-100 border-0 shadow-sm ${selectedPolicy() === 'healthcare' ? 'bg-light' : ''}`}>
              <div class="card-body d-flex flex-column">
                <h3 class="card-title"><i class="bi bi-heart-pulse-fill me-2 service-icon"></i>Healthcare</h3>
                <div>Updates on Medi-Cal expansion, provider reimbursement rates, and public health initiatives shaping the care landscape.</div>
                <div class="mt-auto pt-3 small fw-bold" style={{color: "#4b5bd3"}}>Click to learn more <i class="bi bi-arrow-down"></i></div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-4 mb-4" onClick={() => setSelectedPolicy(selectedPolicy() === 'technology' ? null : 'technology')} style={{cursor: "pointer"}}>
            <div class={`card h-100 border-0 shadow-sm ${selectedPolicy() === 'technology' ? 'bg-light' : ''}`}>
              <div class="card-body d-flex flex-column">
                <h3 class="card-title"><i class="bi bi-cpu-fill me-2 service-icon"></i>Technology</h3>
                <div>Strategic insights into data privacy laws, AI regulation, and digital infrastructure funding opportunities.</div>
                <div class="mt-auto pt-3 small fw-bold" style={{color: "#4b5bd3"}}>Click to learn more <i class="bi bi-arrow-down"></i></div>
              </div>
            </div>
          </div>
        </div>

        {selectedPolicy() && (
          <div class="row pb-5">
            <div class="col-lg-9">
              <div class="card border-0 shadow-sm bg-light">
                <div class="card-body p-4 text-start">
                  <h3 class="card-title" style={{color: "#00035c"}}>{policyData[selectedPolicy()].title}</h3>
                  <div class="fs-5" style={{ "white-space": "pre-line" }}>{policyData[selectedPolicy()].text}</div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div class="row pt-lg-5">
          <h1 class="services-title mb-0 mt-4 mx-0">This Week in Sacramento</h1>
        </div>
        <div class="row">
          <div class="col-lg-3 col-12 me-3">
            <a class="example-twis" href={exampleTwis} target="_blank">
                <img class="twis-picture" src={twisImage}/>
              </a>
          </div>
          <div class="col-lg-5 col-12 ">
              <h5 class="services-description mt-lg-0 mt-3">All clients enjoy subscription to This Week in Sacramento, our premier weekly newsletter of ongoing activities and current events in California's capital. <br/><br/><strong>This Week In Sacramento</strong> serves as an essential strategic compass for professionals navigating the complex and often volatile landscape of California's legislative and regulatory environment. By providing high-level synthesis of weekly floor sessions, committee hearings, and executive actions, the newsletter transforms a chaotic stream of state data into actionable intelligence. Readers can expect a curated breakdown of the state's most pressing policy shifts—from groundbreaking AI safety mandates and aggressive healthcare cost-capping to the evolving rules of the state's insurance and environmental markets—all delivered with a focus on how these changes impact the bottom line for businesses and organizations.<br/><br/>For clients who need to anticipate risk and identify opportunities within the nation's largest sub-national economy, this newsletter provides the clarity and foresight necessary to stay ahead of the curve in the Golden State.</h5>
              <br/><br/>
              
          </div>             
        </div>

        <div class="row pt-lg-5">
          <h1 class="services-title mb-0 mt-4 mx-0">Legislative Calendar</h1>
        </div>
        <div class="row">
          <div class="col-lg-8 col-12">
            <h5 class="services-description">Staying ahead in Sacramento means knowing the schedule. Legislative deadlines are established annually and are subject to change. For the most accurate and up-to-date information, please refer to the official California Senate calendar.</h5>
            <div class="card mt-4 border-0 shadow-sm">
              <div class="card-body">
                <a href="https://www.senate.ca.gov/legislative-deadlines-calendar" target="_blank" class="text-decoration-none fw-bold fs-5" style="color: #00035c;">
                  View Official Legislative Deadlines Calendar <i class="bi bi-arrow-up-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <br/><br/>
      </div>
    </main>
  );
}
