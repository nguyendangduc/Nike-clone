
export const getPlayerFromLocal = (param:string) => {
    const local = localStorage.getItem(param);
    if(typeof local === "string") return JSON.parse(local); 
    else return null;
}
