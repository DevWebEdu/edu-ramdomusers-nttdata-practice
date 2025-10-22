export function formatDate(date: string) {
    if (!date) return '';
    const fecha = new Date(date);
    return fecha.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }