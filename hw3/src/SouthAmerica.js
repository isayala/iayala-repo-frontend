import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Styles.css";

const SouthAmerica = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          "https://cs464p564-frontend-api.vercel.app/api/countries"
        );
        console.log(response.data);
        const southAmericanCountries = response.data;
        setCountries(southAmericanCountries);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;

  return (
    <div className="countries-list">
      <h1 className="countries-title">Countries in South America</h1>
      <div className="country-cards">
        {countries.map((country) => (
          <div key={country.id} className="country-card">
            <img
              src={country.flag_png}
              alt={country.flag_alt || "Flag of ${country.name}"}
              className="country-flag"
            />
            <h2>{country.name}</h2>
            <p>Population: {country.population.toLocaleString()}</p>
            <p>GDP: ${country.gdp_billions} billion</p>
            <p>Languages: {country.official_languages.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SouthAmerica;
