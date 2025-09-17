import { Title } from "@solidjs/meta";
import { createStore } from "solid-js/store";
import { createSignal } from "solid-js";

// COMPONENTS
import PageTitleBanner from "../components/pageTitleBanner";
import ContactButton from "../components/contactbutton";
import HrDivider from "../components/hrDivider";
import "../components/clientspage.css";

// PICTURES
import clientHandshake from "../assets/pictures/clients.jpg";
import clientList from "../assets/clients.json";

const pageTitle = "Clients";
const pageSubtitle = "Client trust reflects our commitment to building lasting relationships and delivering effective advocacy in today's complex policy environment. We are proud to support each with integrity, strategy, and proven results.";
const contactPrompt = "We're extremely proud of the work we do for all our clients! Let us know what we can do for you.";

export default function Clients() {
  const [currentClients, setCurrentClients] = createStore(clientList.currentClients);
  const [pastClients, setPastClients] = createStore(clientList.pastClients);
  const [seePastClients, setSeePastClients] = createSignal(false);

  // const handlePastClientList = () => {
  //   setSeePastClients(!seePastClients())
  // }

  return (
    <main>
      <Title>Norwood Clients</Title>
        <PageTitleBanner 
          bannerImage={clientHandshake}
          title={pageTitle}
          subtitle={pageSubtitle}
        />
        <div class="container-fluid">

          <div class="row pt-md-3">
            <div class="col-3">
              {/* <button class={`mt-5 client-toggle ${!seePastClients() ? 'selected' : 'unselected'}`} onClick={() => setSeePastClients(false)}> */}
                <h1 class="client-title mt-5 mb-2">Current Clients</h1>
              
            </div>
          </div>
          
          <ul class="list-group list-group-flush">
            <div class="row pt-md-3  ">
              {currentClients.map(client => (
                <div class="col-5">
                  <li class="list-group-item client-item">{client.clientName}</li>
                </div>
              ))}
            </div>
          </ul>

          <h4 class="mt-5">See Past Clients <i class={`bi past-client-toggle ${seePastClients() === false ? 'bi-arrows-expand' : 'bi-arrows-collapse'}`} onClick={() => setSeePastClients(!seePastClients())}></i></h4>
          <ul class="list-group list-group-flush">
            <div class="row pt-md-3  ">
              {seePastClients() && pastClients.map(client => (
                <div class="col-4">
                  <li class="list-group-item client-item">{client.clientName}</li>
                </div>
              ))}
            </div>
          </ul>
          <HrDivider />
          <ContactButton 
            prompt={contactPrompt}
          />
        </div>
    </main>
  );
}
