import styles from "./page.module.css";
import { AssessmentForm } from "@/app/components/forms/assessment-form";

export default function BookConsultPage() {
  return (
    <div className={styles.maincontainer}>
      <div className="grid gap-12 lg:grid-cols-2 px-2 lg:px-12 min-h-screen items-center">
        <div>
          <span className="text-2xl font-medium text-primary">
            የመሃበራዊ ድህረ-ገጽ ግምገማ
          </span>

          <h1 className="mt-4 text-5xl font-bold tracking-tight">
            Social Media Assessment
          </h1>

          <p className="mt-6 text-lg text-muted-foreground">
            After you fill out this to assess the social media standing of your brand, 
            we will contact you to go over details and insights of our reports. 
            If you would like faster service and direct information on current services and pricing, 
            please contact us at 0903569999 or email us at support@awajet.com
          </p>
        </div>
        <div className="rounded-2xl border bg-card p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-semibold">
            AwajET - Social Media Assessment Form
          </h2>
          <AssessmentForm />
        </div>
      </div>
    </div>
  );
}