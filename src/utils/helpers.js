// helper functions
export function featuredProducts(data){
    return data.filter(item =>{
    // csak akkor returnolja az itemet, ha a "featured" property igaz
        return item.featured === true;
    });
}