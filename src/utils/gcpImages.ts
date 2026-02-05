// Updated to handle local images
export function getGCPImageUrl(coverImage: string, date: Date): string {
	// If coverImage already contains a path (e.g., "2024/05/image.png")
	if (coverImage && coverImage.includes('/')) {
		return `/uploads/${coverImage}`;
	}
	
	// Fallback: construct path from date
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	return `/uploads/${year}/${month}/${coverImage}`;
}
