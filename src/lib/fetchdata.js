export const getProducts = async () => {
    const res = await fetch("https://summer-essentials-store.onrender.com/data.json");
    const data = await res.json();
    return data
}


