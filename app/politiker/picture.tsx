
export async function getPoliticianImg() {
    const response = await fetch("https://image.facethefacts-api.de/${politicianId}.jpg");
    return response;
}