import { defaultState } from '@/utils/constants';
import { NextRequest, NextResponse } from 'next/server';
import { CookieChangeOptions } from 'universal-cookie';

export function onCookieChange(_request: NextRequest, response: NextResponse) {
  return (event: CookieChangeOptions) => {
    if (!response.cookies || (response as any)?.headersSent) return;

    const { value, name, options } = event;

    if (value === undefined) {
      response.clearCookie(name, options);
    } else {
      const maxAge = options?.maxAge ? options?.maxAge * 1000 : undefined;
      response.cookie(name, value, { ...options, maxAge });
    }
  };
}

export async function cookieStorageMiddleware(
  request: NextRequest,
  response: NextResponse,
): Promise<NextResponse> {
  const localState = Object.assign(defaultState, request.cookies);

  Object.entries(localState).forEach(([name, value]) =>
    onCookieChange(request, response)({ name, value }),
  );

  return response;
}

export default async function middleware(request: NextRequest) {
  return cookieStorageMiddleware(request, NextResponse.next());
}
