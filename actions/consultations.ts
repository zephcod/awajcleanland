"use server";

import { ID } from "node-appwrite";
import { databases } from "@/db/database";
import { revalidatePath } from "next/cache";

export async function createConsultation(
  formData: FormData
) {
  const consultation = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    service: formData.get("service"),
    budget: formData.get("budget"),
    details: formData.get("details"),
    createdAt: new Date().toISOString(),
  };

  await databases.createDocument(
    process.env.APPWRITE_DATABASE_ID!,
    process.env.APPWRITE_CONSULTATIONS_COLLECTION_ID!,
    ID.unique(),
    consultation
  );

  revalidatePath("/book-consult");

  return {
    success: true,
  };
}