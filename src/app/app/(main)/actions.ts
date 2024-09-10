'use server'

import { auth } from '@/services/auth'
import { prisma } from '@/services/database'

export async function getUserTodos() {
    const session = await auth()

    const todos = await prisma.todo.findMany({
        where: {
            userId: session?.user?.id,
        },
        orderBy: {
            createdAt: 'desc',
        },
    })

    return todos
}