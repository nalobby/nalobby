import { createSignal } from "solid-js";
import "./homebanner.css";

import capitolDome from "../assets/pictures/interior-of-california-capitol.jpg";

export default function HomeBanner() {
  return (
    <div class="home-banner">
      <img src={capitolDome} class="d-block w-100 home-banner-image" alt="..."/>
      <div class="carousel-caption home-banner-caption d-none d-md-block">
        <div class="carousel-card home-banner-card py-5">
          <div class="card-body">
            <h1 class="carousel-item-title pe-4">TRUSTED ADVOCACY.<br/>SUCCESSFUL OUTCOMES.</h1>
          </div>
        </div>
      </div>
    </div>
  );
}