const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchCategory() {
  try{
  const response = await fetch(`${API_URL}/api/category`);
  const data = await response.json();
  return data.categories;
  }catch(err){
    console.log(err);
    return [];
  }
}

export async function fetchCategoryById(id) {
  try{
  const response = await fetch(`${API_URL}/api/category?id=${id}`);
  const data = await response.json();
  return data;
  }catch(err){
    console.log(err);
    return [];
  }
}

export async function fetchAllJobs() {
  try{
  const response = await fetch(`${API_URL}/api/job`);
  const data = await response.json();
  return data.jobs;
  }catch (err){
    console.log(err);
    return [];
  }
}
