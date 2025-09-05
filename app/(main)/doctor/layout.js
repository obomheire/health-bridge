import { Stethoscope } from "lucide-react";
import { PageHeader } from "@/components/page-header";

export default async function DoctorDashboardLayout({ children }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader icon={<Stethoscope />} title="Doctor Dashboard" />

      {children}
    </div>
  );
}
