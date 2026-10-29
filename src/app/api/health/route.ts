import { NextResponse } from 'next/server'
import { prisma } from '@/services/database'

export async function GET() {
  let dbStatus = 'disconnected'

  try {
    await prisma.$queryRaw`SELECT 1`
    dbStatus = 'connected'
  } catch (err: any) {
    dbStatus = `error: ${err?.message || 'failed to connect'}`
  }

  return NextResponse.json({
    status: 'ok',
    app: 'micro-saas-nextjs',
    framework: 'Next.js 14 (App Router)',
    database: dbStatus,
    timestamp: new Date().toISOString(),
  })
}
