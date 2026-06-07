import { ConsultationForm } from "@/app/components/forms/consultaion-form";
import styles from "./page.module.css";

export default function BookConsultPage() {
  return (
    <div className={styles.maincontainer}>
      <div className="grid gap-12 lg:grid-cols-2 px-2 lg:px-12 min-h-screen items-center">
        <div>
          <span className="text-sm font-medium text-primary">
            BOOK A CONSULTATION
          </span>

          <h1 className="mt-4 text-5xl font-bold tracking-tight">
            Expert Guidance For Your
            Next Project
          </h1>

          <p className="mt-6 text-lg text-muted-foreground">
            After you fill out this to book a consult, 
            we will contact you to go over details and availability of our experts. 
            If you would like faster service and direct information on current services and pricing, 
            please contact us at 0903569999 or email us at support@awajet.com
          </p>
        </div>

        <div className="rounded-2xl border bg-card p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-semibold">
            Request Consultation
          </h2>
          <ConsultationForm />
        </div>
      </div>
    </div>
  );
}