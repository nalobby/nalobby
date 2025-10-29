import { createSignal } from "solid-js";

import "./contactbutton.css";

export default function ContactButton(props) {
  return (
    <div class="row mt-md-5 pt-md-5 mb-5 ">
      <div class="col-md-10 col-lg-7 col-xl-5 px-4">
        <h2>{props.prompt}</h2>
        <a class="btn contact-button my-5 py-2 px-3" type="button" href="mailto:info@nalobby.net" target="_blank" alt="Email Norwood Associates">CONTACT TODAY</a>
      </div>
    </div>
  );
}