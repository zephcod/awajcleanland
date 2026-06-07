

export const appwriteConfig = {
  endpoint: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!,
  projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!,
  databaseId:process.env.APPWRITE_DATABASE_ID,

  ordersCollectionId: process.env.APPWRITE_ORDERS_COLLECTION_ID!,
  quickCampaignCollectionId: process.env.APPWRITE_QUICK_CAMPAIGN_COLLECTION_ID!,
  assessmentCollectionId: process.env.APPWRITE_ASSESSMENT_COLLECTION_ID!,
  consultationCollectionId: process.env.APPWRITE_CONSULTATION_COLLECTION_ID!,
};