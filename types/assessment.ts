export interface Assessment {
  $id?: string;
  clientName?: string;
  email?: string;
  phone?: string;
  company?: string;
  targetedFrom?: string;

  links: string;
  description?: string;
  isActive?: boolean;
  industry?: string;
  $createdAt?: Date;
  $updatedAt?: Date;
}   