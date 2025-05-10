import React, { useEffect, useState } from "react";

const Main3 = () => {


//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
//     .then((response) => response.json())
//     .then ((data) => {
//       console.log(data);
//       setCategories(data.categories)
//       setLoading(false);
//     })
//   }, [])

    const [meals, setMeals] = useState([]);
    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
        .then((response) => response.json())
        .then ((data) => {
            console.log(data);
            setMeals(data.meals)
        })
    })
  
    return(
        <>
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
  {/* end banner section */}
  <div className="album py-5 bg-light">
    <div className="container" id="shopnow">
      <div className="row">
        <div className="col-md-12">
          <h3 className="text-center mb-3">Welcome Home!</h3>
        </div>
      </div>
        {/* end category item*/}

        { categories.map((category, index) => {
          return(
                <div className="row g-3" key={index} id="shopnow">
              <div className="col-md-2">
                <img src={meals.strArea} alt='{category.strCategory}' className="img-fluid" />
              </div>
              <div className="col-md-8">
                <h5>{meals.strArea}</h5>
                <p>Qwerty</p>
                <button className="btn btn-warning btn-sm">Get Ingredients</button>
              </div>
              <hr className="style-two" />
            </div>
          )
         })
         }

      {/* end category item*/}
      {/* Categories of menu ends */}
    </div>
  </div>
</>

    )
}

export default Main3;