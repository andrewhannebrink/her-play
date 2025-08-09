export const getAssetPath = (path) => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  
  // In production, prepend the base path
  if (import.meta.env.PROD) {
    return `${import.meta.env.BASE_URL}${cleanPath}`
  }
  
  // In development, just return the path
  return `/${cleanPath}`
}