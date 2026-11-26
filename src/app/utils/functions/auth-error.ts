import { HttpErrorResponse } from '@angular/common/http';

export function authErrorMessage(error: HttpErrorResponse, fallback: string): string {
  let body = error.error;
  if (typeof body === 'string') {
    const text = body.trim();
    if (!text.startsWith('{')) {
      return text && !text.startsWith('<') ? text : fallback;
    }
    try {
      body = JSON.parse(text);
    } catch {
      return fallback;
    }
  }
  return typeof body?.message === 'string' ? body.message : fallback;
}
