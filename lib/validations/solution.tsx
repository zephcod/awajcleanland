import * as z from 'zod'

export const solutionSchema = z.object ({
    sid: z.string(),
    name: z.string(),
    description: z.string().optional(),
    category: z.string().optional().default('social_media'),
    price: z.number(),
    $createdAt: z.date().optional(),
    $updatedAt: z.date().optional(),
    imageLinks: z.array(z.string())
})

export type Solution = z.infer<typeof solutionSchema>

export const quickCampaignSchema = z.object ({
    $id: z.string().optional(),
    campaignName: z.string().optional(),
    email: z.string().optional(),
    phone: z.string().optional(),
    company: z.string().optional(),
    description: z.string().optional(),
    budget: z.string().optional(),
    industry: z.string().optional(),
    location: z.string().optional(),
    $createdAt: z.date().optional(),
    $updatedAt: z.date().optional()
})

export type QuickCampaign = z.infer<typeof quickCampaignSchema>