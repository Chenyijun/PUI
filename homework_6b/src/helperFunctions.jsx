export const getBunInfo = (id) => {
  const buns = [{"id": "original", "name": "Original", "image": "https://images.unsplash.com/photo-1577385384956-7e9fab6f7e84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1587&q=80"},
  {"id": "blackberry", "name":"Blackberry", "image":"https://images.unsplash.com/photo-1630182266697-92508c01e2d1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1760&q=80"},
  {"id": "walnut", "name":"Walnut", "image":"https://images.unsplash.com/photo-1593529323824-24cda51553e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1663&q=80"},
  {"id": "original-gf", "name":"Original (GF)", "image":"https://images.unsplash.com/photo-1603459872271-410a6697abcd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1586&q=80"},
  {"id": "Pumpkinspice", "name":"Pumpkin Spice", "image":"https://images.unsplash.com/photo-1593872571314-4a735d4b27b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1587&q=80"},
  {"id": "caramelpecan", "name":"Caramel Pecan", "image":"https://images.unsplash.com/photo-1618256747711-c4195a69ceff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1587&q=80"}]
  return buns.filter(item => item.id === id)[0]
}

export const getGlazes = () =>{
  return ["None", "Sugar-milk", "Vanilla-milk", "Double-Chocolate"]
}

export const getQuantities = () => {
  return [1, 3, 6, 12]
}