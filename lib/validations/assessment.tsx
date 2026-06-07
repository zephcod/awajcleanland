import * as z from 'zod'

export const assessmentSchema = z.object ({
    $id: z.string().optional(),
    clientName: z.string(),
    email: z.string(),
    phone: z.string(),
    company: z.string().optional(),
    targetedFrom: z.string().optional(),

    links: z.string(),
    description: z.string().optional(),
    isActive: z.boolean().optional(),
    industry: z.string().optional(),
    location: z.string().optional(),
    $createdAt: z.date().optional(),
    $updatedAt: z.date().optional()
})

export type Assessment = z.infer<typeof assessmentSchema>