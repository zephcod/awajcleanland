import { ID } from "node-appwrite";
import { databases } from "@/db/database";
import { appwriteConfig } from "@/db/config";

export async function createQuickCampaign(data: {

}) {
  return await databases.createDocument({
      databaseId:"650a05f49ac5d9e273b8",
      collectionId:"6a216b7c001002e072cb",
      documentId: ID.unique(),
      data: data
});
}