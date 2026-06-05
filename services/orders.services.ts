import { ID } from "node-appwrite";
import { databases } from "@/db/database";
import { appwriteConfig } from "@/db/config";

export async function getOrders() {
  try {
    const response = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.ordersCollectionId
    );
    console.log("Orders fetched successfully:", response);
    return response.documents;
  } catch (error) {
    console.error(error);
    return [];
  }
}



export async function createQuickCampaign(data: {

}) {
  return await databases.createDocument({
      databaseId:"650a05f49ac5d9e273b8",
      collectionId:"6a216b7c001002e072cb",
      documentId: ID.unique(),
      data: data
});
}