import { createSignal } from "solid-js";
import "./pagetitlebanner.css";

export default function PageTitleBanner(props) {

  return (
    <div class="page-banner">
      <img src={props.bannerImage} class="d-block w-100 page-banner-image" alt="..."/>
      <div class="page-banner-caption">
        <div class="page-banner-card p-4">
          <div class="card-body">
            <h1 class="page-banner-title my-4">{props.title}</h1>
            <h5 class="page-banner-subtitle">{props.subtitle}</h5>
          </div>
        </div>
      </div>

      <div class="separator-row"></div>
    </div>
  );
}