export interface Consultation {
  $id?: string;
  clientName?: string;
  email?: string;
  phone?: string;
  company?: string;
  targetedFrom?: string;
  category?: string;
  description?: string;
  isActive?: boolean;
  industry?: string;
  location?: string;
  $createdAt?: Date;
  $updatedAt?: Date;
}   