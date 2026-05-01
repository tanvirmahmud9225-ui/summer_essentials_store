export const getProducts = async () => {
    const res = await fetch("https://summer-essentials-store.vercel.app/data.json");
    const data = await res.json();
    return data
}


