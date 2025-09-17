import { Title } from "@solidjs/meta";
import { createStore } from "solid-js/store";
import { createSignal } from "solid-js";

// COMPONENTS
import PageTitleBanner from "../components/pageTitleBanner";
import "../components/teampage.css";
import teamData from "../assets/team-info.json";
// IMAGES
import staffPicture from "../assets/pictures/norwood-staff.jpeg";


const pageTitle = "Meet the Team";
const pageSubtitle = "Our strength comes from the people behind our work — experienced professionals dedicated to advocacy, collaboration, and delivering results for our clients. Meet the team that drives our efforts for your success in Sacramento.";

export default function Team() {
  const [teamInfo, setTeamInfo] = createStore(teamData.people);

  return (
    <main>
      <Title>Norwood Team</Title>
        <PageTitleBanner 
          bannerImage={staffPicture}
          title={pageTitle}
          subtitle={pageSubtitle}
        />
        <div class="container-fluid">

          {teamInfo.map(person => (
            <div class="row my-5 pt-md-3 teammate-row">
              <div class="row">
                <div class="col-md-2 me-0 pe-0">
                  <img class="teammate-picture" src={person.picture}/>
                </div>
                <div class="col-md-6 team-name-column ms-0 ps-4">
                  <h1 class="teammate-name mt-5 mb-3">{person.name}</h1>
                  <h4 class="teammate-title">
                    {Array.isArray(person.title) ? (
                      person.title.map((line, i) => (
                        <>
                          {line}
                          {i < person.title.length - 1 && <br />}
                        </>
                      ))
                    ) : (
                      person.title
                    )}
                  </h4>
                  <br/>
                  <a class="teammate-email" href={`mailto:${person.email}`} target="_blank" alt={`Email ${person.name}`}><i class="bi bi-envelope-fill" ></i></a>
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-md-5 pe-4 ">
                  <p class="teammate-bio mt-0">{person.bio}</p>
                </div>
                <div class="col-md-3">
                  <div class="bio-item">
                    {person.achievements && (
                      <div class="row">
                        <div class="col-1">
                        <i class="bi bi-award bio-icon display-6 "></i>
                        </div>
                        <div class="col-10 award-list ps-5 mb-4">
                          {person.achievements?.map((award, i) => (
                            <div class="award-entry mb-2" key={i}>
                                {award}<br/>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div class="row">
                      <div class="col-1">
                      <i class="bi bi-mortarboard bio-icon display-6 "></i>
                      </div>
                      <div class="col-10 education-list ps-5">
                        {person.education?.map((edu, i) => (
                          <div class="education-entry" key={i}>
                            <strong>{edu.degree}</strong>
                            {edu.area && (
                              <span><br />
                                <i>{edu.area}</i>
                              </span>
                              )
                              }<br />
                            <span>{edu.school}</span><br /><br />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
    </main>
  );
}
