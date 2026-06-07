
import { ID } from "node-appwrite";
import { databases } from "@/db/database";
import { appwriteConfig } from "@/db/config";


export async function createConsultation(data: {

}) {
  return await databases.createDocument({
      databaseId: "650a05f49ac5d9e273b8",
      collectionId:"6a23ddd4003c0baf51e6",
      documentId: ID.unique(),
      data: data
});
}