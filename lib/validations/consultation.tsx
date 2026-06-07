import * as z from 'zod'

export const consultationSchema = z.object ({
    $id: z.string().optional(),
    clientName: z.string(),
    email: z.string(),
    phone: z.string(),
    company: z.string().optional(),
    targetedFrom: z.string().optional(),

    
    category: z.string().optional(),
    description: z.string().max(500, "Description must be less than 500 characters").optional(),
    isActive: z.boolean().optional(),
    industry: z.string().optional(),
    location: z.string().optional(),
    $createdAt: z.date().optional(),
    $updatedAt: z.date().optional()
})

export type Consultation = z.infer<typeof consultationSchema>