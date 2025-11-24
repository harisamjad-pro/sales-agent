export function slugify(text: string): string {
  return text
    // Remove leading slashes
    .replace(/^\/+/, "")
    // Remove protocol + optional www.
    .replace(/^(https?:\/\/)?(www\.)?/i, "")
    // Remove query parameters
    .replace(/\?.*$/, "")
    // Remove trailing slashes
    .replace(/\/+$/, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}
