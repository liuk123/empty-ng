import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-iframe',
  template: `
  <iframe
    [srcdoc]="srcdoc"
    id="result-iframe"
    sandbox="allow-forms allow-modals allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation allow-downloads allow-presentation"
    allow="accelerometer; camera; encrypted-media; display-capture; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write"
    allowtransparency="true"
    allowpaymentrequest="true"
    allowfullscreen="true"
    loading="lazy"
    ></iframe>
  `,
  styles: [`
  :host{
    display: block;
    width: 100%;
    height: 100%;
  }
  #result-iframe{
    width: 100%;
    height: 100%;
    display: block;
    border:0;
  }
  `]
})
export class IframeComponent implements OnInit {

  srcdoc
  constructor(private ds: DomSanitizer) { }

  ngOnInit(): void {
    this.srcdoc = this.ds.bypassSecurityTrustHtml(`
  
    <!DOCTYPE html>
    <html lang="en" >
    
    <head>
    
      <meta charset="UTF-8">
      
      <link rel="apple-touch-icon" type="image/png" href="https://cpwebassets.codepen.io/assets/favicon/apple-touch-icon-5ae1a0698dcc2402e9712f7d01ed509a57814f994c660df9f7a952f3060705ee.png" />
    
      <meta name="apple-mobile-web-app-title" content="CodePen">
    
      <link rel="shortcut icon" type="image/x-icon" href="https://cpwebassets.codepen.io/assets/favicon/favicon-aec34940fbc1a6e787974dcd360f2c6b63348d4b1f4e06c77743096d55480f33.ico" />
    
      <link rel="mask-icon" type="image/x-icon" href="https://cpwebassets.codepen.io/assets/favicon/logo-pin-b4b4269c16397ad2f0f7a01bcdf513a1994f4c94b8af2f191c09eb0d601762b1.svg" color="#111" />
    
    
      
      <title>CodePen - Using Focal Points, Aspect Ratio and Object-Fit To Crop Images Correctly</title>
      
    <style>
    article > img {
      object-fit: cover;
      object-position: var(--focus-x) var(--focus-y);
      aspect-ratio: var(--aspect-ratio);
    }
    .homepage-hero {
      --aspect-ratio: 16 / 9;
    }
    .blog-list-item {
      --aspect-ratio: 1 / 1;
    }
    .blog-post {
      --aspect-ratio: 3 / 4;
    }
    
    
    
    /* Some setup CSS for the demo */
    body {
      display: grid;
      grid-auto-flow: column;
      place-content: center;
      gap: 1rem;
    }
    img {
      display: inline-block;
      max-width: 100%;
    }
    .source {
      position: relative;
      cursor: pointer;
    }
    .source:before {
      font-family: sans-serif;
      font-size: .75rem;
      position: absolute;
      top: 1rem;
      left: 1rem;
      content: "source";
      text-transform: uppercase;
      pointer-events: none;
      color: red;
    }
    .source-focal-point {
      --focal-point-size: 10px;
    
      position: absolute;
      z-index: 1;
      top: calc(var(--focus-y) - (var(--focal-point-size) / 2));
      left: calc(var(--focus-x) - (var(--focal-point-size) / 2));
      width: var(--focal-point-size);
      aspect-ratio: 1 / 1;
      border-radius: 100%;
      background-color: red;
    
    }
    </style>
    
      <script>
      window.console = window.console || function(t) {};
    </script>
    
      
      
      <script>
      if (document.location.search.match(/type=embed/gi)) {
        window.parent.postMessage("resize", "*");
      }
    </script>
    
    
    </head>
    
    <body translate="no" >
      <div class="source">
      <img class="source-image" src="https://images.unsplash.com/photo-1676486694880-230d58890871?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" />
      <div class="source-focal-point"></div>
    </div>
    <article class="homepage-hero">
      <img src="https://images.unsplash.com/photo-1676486694880-230d58890871?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" />
    </article>
    
    <article class="blog-list-item">
      <img src="https://images.unsplash.com/photo-1676486694880-230d58890871?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" />
    </article>
    
    <article class="blog-post">
      <img src="https://images.unsplash.com/photo-1676486694880-230d58890871?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" />
    </article>
        <script src="https://cpwebassets.codepen.io/assets/common/stopExecutionOnTimeout-2c7831bb44f98c1391d6a4ffda0e1fd302503391ca806e7fcc7b9b87197aec26.js"></script>
    
      
          <script id="rendered-js" >
    const sourceImage = document.querySelector(".source-image");
    sourceImage.addEventListener("click", event => {
      const rect = event.target.getBoundingClientRect();
      const xCoord = event.clientX - rect.left;
      const yCoord = event.clientY - rect.top;
    
      const xAsPercentage = xCoord / rect.width * 100;
      const yAsPercentage = yCoord / rect.height * 100;
    
      document.documentElement.style.setProperty("--focus-x", xAsPercentage + '%');
      document.documentElement.style.setProperty("--focus-y", yAsPercentage + "%");
    });
    //# sourceURL=pen.js
        </script>
    
      
    
    </body>
    
    </html>
     
    
       
    `)
  }

}
