import React, { useEffect, useState } from "react";
import axios from "axios";
import Chart from "chart.js/auto";

const PieChart = () => {
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await axios.get(
          "https://cs464p564-frontend-api.vercel.app/api/countries"
        );
        const southAmericanCountries = response.data;
        const allLanguages = southAmericanCountries.flatMap(
          (country) => country.official_languages
        );
        const languageCounts = countLanguages(allLanguages);
        setLanguages(languageCounts);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(error);
        setLoading(false);
      }
    };

    fetchLanguages();
  }, []);

  const countLanguages = (languages) => {
    return languages.reduce((acc, language) => {
      acc[language] = (acc[language] || 0) + 1;
      return acc;
    }, {});
  };

  useEffect(() => {
    if (!loading && !error) {
      const ctx = document.getElementById("chart");
      new Chart(ctx, {
        type: "pie",
        data: {
          labels: Object.keys(languages),
          datasets: [
            {
              data: Object.values(languages),
              backgroundColor: [
                "rgba(255, 40, 145, 0.8)",
                "rgba(151, 40, 145, 0.8)",
                "rgba(55, 40, 151, 0.8)",
                "rgba(0, 40, 151, 0.8)",
                "rgba(0, 157, 151, 0.8)",
                "rgba(0, 216, 151, 0.8)",
                "rgba(0, 216, 236, 0.8)",
                "rgba(255, 216, 0, 0.8)",
                "rgba(255, 81, 0, 0.8)",
                "rgba(255, 0, 0, 0.8)",
                "rgba(74, 0, 0, 0.8)",
                "rgba(74, 172, 0, 0.8)",
                "rgba(74, 172, 255, 0.8)",
              ],
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: false,
              text: "Language Distribution in South American Countries",
              font: {
                size: 24,
                family: "sans-serif",
                color: "#333",
              },
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  const label = context.label || "";
                  const value = context.raw || 0;
                  const percent = (
                    (value /
                      context.dataset.data.reduce(
                        (acc, curr) => acc + curr,
                        0
                      )) *
                    100
                  ).toFixed(2);
                  return `${label}: ${value} (${percent}%)`;
                },
              },
            },
          },
          layout: {
            padding: {
              top: 20,
              bottom: 20,
              left: 20,
              right: 20,
            },
          },
          aspectRatio: 2.0,
        },
      });
    }
  }, [languages, loading, error]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;

  return (
    <div className="chart-container">
      <h1 className="pie-chart-title">
        Language Distribution in South American Countries
      </h1>
      <canvas id="chart"></canvas>
    </div>
  );
};

export default PieChart;
