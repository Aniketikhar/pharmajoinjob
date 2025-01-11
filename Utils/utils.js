export async function fetchCategory() {
  const response = await fetch("http://localhost:3000/api/category");
  const data = await response.json();
  return data.categories;
}

export async function fetchCategoryById(id) {
  const response = await fetch(`http://localhost:3000/api/category?id=${id}`);
  const data = await response.json();
  return data.job;
}

export async function fetchAllJobs() {
  const response = await fetch("http://localhost:3000/api/job");
  const data = await response.json();
  return data.jobs;
}
