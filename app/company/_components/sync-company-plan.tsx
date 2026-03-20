"use client";

import { useAuth, useOrganization } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { useEffect, useRef } from "react";
import { api } from "@/convex/_generated/api";
import { getErrorMessage } from "@/lib/convex-error";
import { toast } from "sonner";

/**
 * Syncs the current organization's plan and limits to Convex when the user
 * is in the company area, so the backend can enforce job/seat limits and
 * advanced filters. Runs once per org when orgId becomes available.
 */
const SyncCompanyPlan = () => {
  const { orgId, has } = useAuth();
  const { organization } = useOrganization();
  const syncCompanyPlan = useMutation(api.companies.syncCompanyPlan);
  const syncedOrgRef = useRef<string | null>(null);

  useEffect(() => {
    if (!orgId || !has || !organization) return;
    if (syncedOrgRef.current === orgId) return;

    const hasStarterPlan = has({ plan: "starter" }) ?? false;
    const hasGrowthPlan = has({ plan: "growth" }) ?? false;
    const plan = hasGrowthPlan ? "growth" : hasStarterPlan ? "starter" : "free";
    const seatLimit = plan === "growth" ? 10 : plan === "starter" ? 3 : 1;
    const jobLimit = plan === "growth" ? 25 : plan === "starter" ? 5 : 1;

    syncedOrgRef.current = orgId;
    syncCompanyPlan({
      clerkOrgId: orgId,
      plan,
      seatLimit,
      jobLimit,
    })
      .then((result) => {
        if (result === null) {
          // Company not found in Convex yet, clear ref so we retry
          syncedOrgRef.current = null;
        }
      })
      .catch((error) => {
        syncedOrgRef.current = null;
        toast.error(getErrorMessage(error, "Could not sync company plan."));
      });
  }, [orgId, has, organization, syncCompanyPlan]);

  return null;
};

export default SyncCompanyPlan;
