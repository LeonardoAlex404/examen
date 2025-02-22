import React, { useEffect, useState } from "react";
import { getMascotas } from "./api";

const MascotasList = () => {
  const [mascotas, setMascotas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMascotas();
      setMascotas(data);
    };

    fetchData();
  }, []);

  // Estilos en línea
  const styles = {
    container: {
      padding: "20px",
      backgroundColor: "#f8f9fa",
      minHeight: "100vh",
    },
    title: {
      fontSize: "2.5rem",
      color: "#333",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      marginBottom: "2rem",
    },
    card: {
      border: "none",
      borderRadius: "15px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      backgroundColor: "#ffffff",
      marginBottom: "1rem",
    },
    cardHover: {
      transform: "translateY(-5px)",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    },
    cardBody: {
      padding: "1.5rem",
    },
    cardTitle: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "#333",
    },
    cardText: {
      fontSize: "1rem",
      color: "#555",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🐾 Lista de Mascotas 🐾</h2>
      <div className="row">
        {mascotas.map((mascota) => (
          <div key={mascota.id_mascota} className="col-md-4 mb-4">
            <div
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = styles.cardHover.transform;
                e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = styles.card.boxShadow;
              }}
            >
              <div style={styles.cardBody}>
                <h5 style={styles.cardTitle}>{mascota.nombre}</h5>
                <p style={styles.cardText}>
                  <strong>Raza:</strong> {mascota.raza}
                </p>
                <p style={styles.cardText}>
                  <strong>Edad:</strong> {mascota.edad} años
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MascotasList;


