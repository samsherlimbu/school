export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, '-') // Replace spaces and non-word characters with hyphen
    .replace(/^-+|-+$/g, '');   // Trim hyphens from start and end
}
