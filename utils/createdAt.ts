// export function createdAt(dateString: string): string {
//   const date = new Date(dateString);
//   const now = new Date();

//   const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

//   if (diffInSeconds < 60) return "Just now";

//   const minutes = Math.floor(diffInSeconds / 60);
//   if (minutes < 60) return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago `;

//   const hours = Math.floor(minutes / 60);
//   if (hours < 24) return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;

//   const days = Math.floor(hours / 24);
//   if (days < 7) return `${days} ${days === 1 ? "day" : "days"} ago`;

//   return date.toLocaleDateString();
//   // ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} | ${date.toLocaleDateString()}
// }



export function createdAt(dateString: string): string {
  const date = new Date(dateString);

  const formattedDate = date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", });
  const formatedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return `${formattedDate}, ${formatedTime}`;
}
