import * as z from 'zod'

export const orderSchema = z.object ({
    $id: z.string(),
    clientName: z.string(),
    email: z.string(),
    phone: z.string(),
    company: z.string().optional(),
    targetedFrom: z.string().optional(),

    description: z.string().optional(),
    isActive: z.boolean().optional(),
    promoCode: z.string().optional(),
    industry: z.string().optional(),
    totalAmount: z.number().optional(),
    $createdAt: z.date().optional(),
    $updatedAt: z.date().optional()
})

export type Order = z.infer<typeof orderSchema>