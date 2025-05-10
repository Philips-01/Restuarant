import React from "react";

const Banner = () => {
    return(
        <section
  className="container-fluid p-0 m-0"
  style={{
    backgroundImage: 'url("assets/images/hero-bg.jpg")',
    height: 300,
    backgroundSize: "cover"
  }}
>
  <div
    className="row"
    style={{ backgroundColor: "rgba(0,0,0,0.7)", height: "inherit" }}
  >
    <div className="col">
      <h1 className="text-center text-light mt-4" style={{ lineHeight: 200 }}>
        Eat Healthy, Stay Healthy.
      </h1>
    </div>
  </div>
</section>

    )

}

export default Banner;