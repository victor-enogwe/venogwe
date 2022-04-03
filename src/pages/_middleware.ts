import { cookieStorageMiddleware } from '@/utils/functions';
import { NextRequest, NextResponse } from 'next/server';

export default async function middleware(request: NextRequest) {
  return cookieStorageMiddleware(request, NextResponse.next());
}
