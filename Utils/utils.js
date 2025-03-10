
export async function fetchCategory() {
  try{
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/category`, {
    headers: {
      'Cache-Control': 'no-store',
    },
  });
  const data = await response.json();
  return data.categories;
  }catch(err){
    console.log(err);
    return [];
  }
}

export async function fetchCategoryById(id) {
  try{
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/category?id=${id}`, {
    headers: {
      'Cache-Control': 'no-store',
    },
  });
  const data = await response.json();
  return data;
  }catch(err){
    console.log(err);
    return [];
  }
}

export async function fetchAllJobs() {
  try{
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/job`, {
    headers: {
      'Cache-Control': 'no-store',
    },
  });
  const data = await response.json();
  return data.jobs;
  }catch (err){
    console.log( "something went wrong when jobs fetching-----",err);
    return [];
  }
}

export const formatDate = (createdAt) => {
  const now = new Date();
  const date = new Date(createdAt);

  const diffInMs = now - date;
  const diffInHours = diffInMs / (1000 * 60 * 60);
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

  if (diffInHours <= 23) {
    return `${Math.floor(diffInHours)} hours ago`;
  } else if (Math.floor(diffInDays) === 1) {
    return `Yesterday`;
  } else if (diffInDays > 1 && diffInDays <= 3) {
    return `${Math.floor(diffInDays)} days ago`;
  } else if (diffInDays > 3 && diffInDays <= 7) {
    return `${Math.floor(diffInDays)} days ago`;
  } else if (diffInDays > 7 && diffInDays <= 21) {
    const weeks = Math.floor(diffInDays / 7);
    return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
  } else {
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`; // e.g., "21 January 2025"
  }
};


export const isRecentPost = (postDate) => {
  const now = new Date();
  const postDateObj = new Date(postDate);

  const diffInMs = now - postDateObj;
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

  return diffInDays <= 2; // Check if the difference is 2 days or less
};


export const handleLinkClick = (link) => {
  if (!link) return;

  // Regular expression to check if it's an email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(link)) {
    // Open Gmail compose window
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${link}`, "_blank");
  } else if (link.startsWith("http://") || link.startsWith("https://")) {
    // Open external link
    window.open(link, "_blank");
  } else {
    alert("Invalid link or email format");
  }
};
