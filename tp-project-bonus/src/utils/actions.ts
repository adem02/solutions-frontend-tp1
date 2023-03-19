export const fetchData = async (uri: string) => {
    const response = await fetch(uri, {method: 'GET'});
    return await response.json();
}