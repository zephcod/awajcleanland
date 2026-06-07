import { OrderForm } from "@/app/components/forms/order-form";
import styles from "./page.module.css";
import PaymentOptions from "@/app/sections/payment_options";

export default function CheckOutPage() {
  return (
    <div className={styles.maincontainer}>
      <div className="grid gap-12 lg:grid-cols-2 px-2 lg:px-12 min-h-screen items-center">
        <div>
          <span className="text-2xl font-medium text-primary">
            ትእዛዝ መቀበያ
          </span>

          <h1 className="mt-4 text-5xl font-bold tracking-tight">
            Order Request
          </h1>

          <p className="mt-6 text-lg text-muted-foreground">
            After you fill out this order request, we will contact you to go over details and 
            availability before the order is completed. If you would like faster service and 
            direct information on current service and pricing, please contact us 
            at 0903569999 or email us at support@awajet.com
          </p>
        </div>
        <div className="rounded-2xl border bg-card p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-semibold">
            AwajET - Order Request Form
          </h2>
          <OrderForm />
        </div>
      </div>
      <PaymentOptions/>
    </div>
  );
}