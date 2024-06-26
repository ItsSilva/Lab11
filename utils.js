export const obtenerPersonaje = async () => {
  const response = await fetch("https://valorant-api.com/v1/agents");
  const cosito = await response.json();
  return cosito.data;
};
  
export const personajePorId = async (id) => {
  const personaje = await obtenerPersonaje();

  for (const item of personaje){
    if(item.uuid === id) {
      return item;
    }
  }

  throw new Error ("Personaje no encontrado");
}