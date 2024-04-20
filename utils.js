export const obtenerPersonaje = async () => {
  const response = await fetch("./data.json");
  const cosito = await response.json();
  return cosito.data;
};
  
  export const obtenerPersonajePorId = async (id) => {
    const Personajes = await obtenerPersonaje();
  
    for (const Personaje of Personajes) {
      if (Personaje.id === id) {
        return Personaje;
      };
    };
  
    throw new Error("Personaje no encontrado");
  };