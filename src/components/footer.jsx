import { createSignal } from "solid-js";
import norwoodLogo from "../assets/pictures/NA-nobackground.png";

import "./footer.css";

export default function Footer() {
  return (
    <div class="position-relative bottom-0 footer pt-5 pb-0">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-2">
            <a class="" href="/">
              <img src={norwoodLogo} class="na-logo-footer" alt="Norwood Associates logo" />
            </a>
          </div>

          <div class="col-md-4">
          </div>
          <div class="col-md-2">
            <p class="ms-1 mt-0">
              915 L Street, Suite 1100<br/>
              Sacramento, CA 95814<br/><br/>
              (916) 447-5053<br/><br/>
              <a class="footer-email" href="mailto:info@nalobby.net">info@nalobby.net</a>
            </p>
          </div>
        </div>
        <div class="row mt-4 copyright">
          <p>&#xA9; 2025 Norwood Associates, LLC | All Rights Reserved.</p>
        </div>
      </div>
      

    </div>
  );
}