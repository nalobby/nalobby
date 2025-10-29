import { Title } from "@solidjs/meta";

// COMPONENTS & STYLING
import PageTitleBanner from "../components/pageTitleBanner";
import HrDivider from "../components/hrDivider";
import ContactButton from "../components/contactbutton";
import "../components/servicespage.css";

// IMAGES AND ASSETS
import assemblyFloor from "../assets/pictures/assembly-floor.jpg";
import exampleTwis from "../assets/documents/TWIS-example.pdf";

const pageTitle = "Services";
const pageSubtitle = "We have decades of experience building strong relationships with key policy makers and developing successful strategies to effectively advocate for clients in Sacramento.";
const contactPrompt = "Not seeing a service you need? Let's discuss how we can expand our offerings for you.";


export default function Services() {
  return (
    <main>
      <Title>Norwood Services</Title>
      <PageTitleBanner 
        bannerImage={assemblyFloor}
        title={pageTitle}
        subtitle={pageSubtitle}        
      />

      <div class="container-fluid">

        <div class="row pt-md-5 pb-5 service-row">
          <div class="col-md-8 col-12 service-item">
            <div class="row">
              <div class="col-4 pt-2"><hr /></div>
              <div class="col-md-1 col-2">
                <span class="display-6 service-icon"><i class="bi bi-bank"></i></span>
              </div>
              <div class="col-4 pt-2"><hr /></div>
            </div>
            <div class="row">
              <h1 class="services-title my-md-4 my-0 mt-4 mx-0">Legislative Monitoring</h1>
            </div>
            <div class="row">
              <div class="col-md-8 col-12 pe-md-5">
                 <h5 class="services-description">We constantly monitoring all new bill introductions and amendments for clients concerned about issues in the California Legislature. It is often critical the client receive early notices and insights about proposed legislation and the activities of other organizations that may affect the client's business interests in California. Norwood Associates, LLC gathers this information from introductions as well as key contacts in the State Capitol and immediately passes on this information to its clients. Norwood Associates, LLC can tailor a monitoring program to fit a client's legislative and/or regulatory needs.</h5>
              </div>
              <div class="col-md-4 col-12 mt-md-0 mt-4">
                <div class="card services-card" >
                  <div class="card-body">
                    <div class="card-title services-card-title">Key Activities</div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">A first item</li>
                      <li class="list-group-item">A second item</li>
                      <li class="list-group-item">A third item</li>
                      <li class="list-group-item">A fourth item</li>
                    </ul>
                  </div>
                </div>
              </div>               
            </div>
           
          </div>
        </div>


        <div class="row pt-md-5 pb-5 service-row">
          <div class="col-md-8 col-12 service-item">
            <div class="row">
              <div class="col-4 pt-2"><hr /></div>
              <div class="col-md-1 col-2">
                <span class="display-6 service-icon"><i class="bi bi-diagram-3"></i></span>
              </div>
              <div class="col-4 pt-2"><hr /></div>
            </div>
            <div class="row">
              <h1 class="services-title my-md-4 my-0 mt-4 mx-0">Strategic Program Management</h1>
            </div>
            <div class="row">
              <div class="col-md-4 col-12">
                <div class="card services-card" >
                  <div class="card-body">
                    <div class="card-title services-card-title">Key Activities</div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">A first item</li>
                      <li class="list-group-item">A second item</li>
                      <li class="list-group-item">A third item</li>
                      <li class="list-group-item">A fourth item</li>
                    </ul>
                  </div>
                </div>
              </div>  
              <div class="col-md-8 col-12 ps-md-5 mt-md-0 mt-4">
                 <h5 class="services-description">Government advocacy is a multi-faceted, complex business. Much of the success of a pro-active program is determining the best approach regarding the issue. A successful strategy is forged through the assessment of various factors namely political environment, political action budgets, message development, potential coalition-building, grassroots efforts, public relations, and more. Pro-active program management may include, but is not limited to, legislative bill drafting, designation of an author, preparation of lobbying materials, meetings with State Legislators and key legislative staff, and advocacy efforts with the Administration and/or regulatory agencies. Whether a pro-active or defensive strategy, Norwood Associates, LLC will coordinate with its clients to develop and prioritize steps designed to successfully accomplish their legislative goals and objectives.</h5>
              </div>             
            </div>
          </div>
        </div>

        <div class="row pt-md-5 pb-5 service-row">
          <div class="col-md-8 col-12 service-item">
            <div class="row">
              <div class="col-4 pt-2"><hr /></div>
              <div class="col-md-1 col-2">
                <span class="display-6 service-icon"><i class="bi bi-bullseye"></i></span>
              </div>
              <div class="col-4 pt-2"><hr /></div>
            </div>
            <div class="row">
              <h1 class="services-title my-md-4 my-0 mt-4 mx-0">Direct Advocacy</h1>
            </div>
            
            <div class="row">
              <div class="col-md-8 col-12 pe-md-5">
                 <h5 class="services-description">Term limits have drastically changed lobbying in California. About 25% of the 40 State Senators and 80 Assemblymembers are new, every two years. Norwood Associates, LLC prides itself on its ability to form and maintain lasting personal, professional, and political relationships with all 120 members on both sides of the political aisle. The firm's advocates know how to take complex issues - such as finance, insurance, manufacturing, and retail - and produce a clear, compelling case for its clients. </h5>
              </div>
              <div class="col-md-4 col-12 mt-md-0 mt-4">
                <div class="card services-card" >
                  <div class="card-body">
                    <div class="card-title services-card-title">Key Activities</div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">A first item</li>
                      <li class="list-group-item">A second item</li>
                      <li class="list-group-item">A third item</li>
                      <li class="list-group-item">A fourth item</li>
                    </ul>
                  </div>
                </div>
              </div>               
            </div>
          </div>
        </div>

        <div class="row pt-md-5 pb-5 service-row">
          <div class="col-md-8 col-12 service-item">
            <div class="row">
              <div class="col-4 pt-2"><hr /></div>
              <div class="col-md-1 col-2">
                <span class="display-6 service-icon"><i class="bi bi-chat-left-text"></i></span>
              </div>
              <div class="col-4 pt-2"><hr /></div>
            </div>
            <div class="row">
              <h1 class="services-title my-md-4 my-0 mt-4 mx-0">Client Communication</h1>
            </div>
            
            <div class="row">
              <div class="col-md-4 col-12">
                <div class="card services-card" >
                  <div class="card-body">
                    <div class="card-title services-card-title">Key Activities</div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">A first item</li>
                      <li class="list-group-item">A second item</li>
                      <li class="list-group-item">A third item</li>
                      <li class="list-group-item">A fourth item</li>
                    </ul>
                  </div>
                </div>
              </div>    
              <div class="col-md-8 col-12 ps-md-5 mt-md-0 mt-4">
                <h5 class="services-description">The relationships Norwood Associates, LLC fosters and grows with each member of the State Legislature and their staff enables the firm to obtain advance notices and insights as legislation moves through the Capitol. With experienced and trusted lobbyists, the firm is able to navigate the activities of other interests in the legislative and regulatory processes. As a full-service firm, Norwood Associates, LLC provides its clients with daily press clips of interest and a weekly newsletter, This Week in Sacramento, which provides a summary of current political and legislative events.
                <br /><br />
                See a sample of This Week in Sacramento <a class="example-twis" href={exampleTwis} target="_blank">here</a>
                
                </h5>
                 
              </div>           
            </div>
          </div>
        </div>


        <div class="row pt-md-5 pb-5 service-row">
          <div class="col-md-8 col-12 service-item">
            <div class="row">
              <div class="col-4 pt-2"><hr /></div>
              <div class="col-md-1 col-2">
                <span class="display-6 service-icon"><i class="bi bi-pin-map"></i></span>
              </div>
              <div class="col-4 pt-2"><hr /></div>
            </div>
            <div class="row">
              <h1 class="services-title my-md-4 my-0 mt-4 mx-0">Grassroots Influence</h1>
            </div>
            
            <div class="row">
              <div class="col-md-8 col-12 pe-md-5">
                 <h5 class="services-description">Norwood Associates, LLC knows how to assist clients with the coordination and implementation of an effective grassroots program. In the days of term limits, some of the most effective messaging and lobbying emanates from constituents of the legislators. Norwood Associates, LLC will develop a program to fit a business's or association's needs. Programs may include scheduling in-district meetings, providing guidance and sample materials for letter-writing campaigns, and the organization of a Sacramento advocacy day.</h5>
              </div>
              <div class="col-md-4 col-12 mt-md-0 mt-4">
                <div class="card services-card" >
                  <div class="card-body">
                    <div class="card-title services-card-title">Key Activities</div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">A first item</li>
                      <li class="list-group-item">A second item</li>
                      <li class="list-group-item">A third item</li>
                      <li class="list-group-item">A fourth item</li>
                    </ul>
                  </div>
                </div>
              </div>               
            </div>
          </div>
        </div>


        <div class="row pt-md-5  service-row">
          <div class="col-md-8 col-12 service-item">
            <div class="row">
              <div class="col-4 pt-2"><hr /></div>
              <div class="col-md-1 col-2">
                <span class="display-6 service-icon"><i class="bi bi-book"></i></span>
              </div>
              <div class="col-4 pt-2"><hr /></div>
            </div>
            <div class="row">
              <h1 class="services-title my-md-4 my-0 mt-4 mx-0">Fair Political Practices Reports</h1>
            </div>
            
            <div class="row">
              <div class="col-md-4 col-12">
                <div class="card services-card" >
                  <div class="card-body">
                    <div class="card-title services-card-title">Key Activities</div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">A first item</li>
                      <li class="list-group-item">A second item</li>
                      <li class="list-group-item">A third item</li>
                      <li class="list-group-item">A fourth item</li>
                    </ul>
                  </div>
                </div>
              </div>   
              <div class="col-md-8 col-12 ps-md-5 mt-md-0 mt-4">
                 <h5 class="services-description">The Fair Political Practices Commission (FPPC) was created by the Political Reform Act of 1974 (Act), a ballot initiative passed by California voters in 1974 as Proposition 9. The FPPC regulates campaign financing and spending, financial conflicts of interest, lobbyist registration and reporting, post-governmental employment, mass mailings at public expense, and gifts and honoraria given to public officials and candidates. Norwood Associates, LLC assists its clients in the proper filing of reports and campaign spending.</h5>
              </div>            
            </div>            
          </div>
        </div>

        <HrDivider />
        <ContactButton 
          prompt={contactPrompt}
        />


      </div>
    </main>
  );
}
