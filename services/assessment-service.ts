import { ID } from "node-appwrite";
import { databases } from "@/db/database";
import { appwriteConfig } from "@/db/config";


export async function createAssessment(data: {

}) {
  return await databases.createDocument({
      databaseId: "650a05f49ac5d9e273b8",
      collectionId:"6a23dbea003476feb9d3",
      documentId: ID.unique(),
      data: data
});
}