export async function fetchCategory() {
  try{
  const response = await fetch("http://localhost:3000/api/category");
  const data = await response.json();
  return data.categories;
  }catch(err){
    console.log(err);
    return [];
  }
}

export async function fetchCategoryById(id) {
  try{
  const response = await fetch(`http://localhost:3000/api/category?id=${id}`);
  const data = await response.json();
  return data.job;
  }catch(err){
    console.log(err);
    return [];
  }
}

export async function fetchAllJobs() {
  try{
  const response = await fetch("http://localhost:3000/api/job");
  const data = await response.json();
  return data.jobs;
  }catch (err){
    console.log(err);
    return [];
  }
}
