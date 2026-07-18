"use server";

import { adminDb } from "@/lib/firebase-admin";

export async function getLeads() {
  try {
    const snapshot = await adminDb.collection("leads").orderBy("createdAt", "desc").get();
    const leads = snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        name: data.name || "Unknown",
        phone: data.phone || "",
        email: data.email || "",
        route: `${data.pickup || ""} to ${data.destination || ""}`,
        property: data.propertyType || "",
        date: data.movingDate || "",
        status: data.status || "New",
        amount: data.estimatedMin ? `₹${data.estimatedMin.toLocaleString('en-IN')}` : "-",
        createdAt: data.createdAt ? data.createdAt.toDate().toISOString() : new Date().toISOString(),
      };
    });
    return leads;
  } catch (error) {
    console.error("Error fetching leads", error);
    return [];
  }
}

export async function updateLeadStatus(id: string, newStatus: string) {
  try {
    await adminDb.collection("leads").doc(id).update({ status: newStatus });
    return { success: true };
  } catch (error) {
    console.error("Error updating lead status", error);
    return { success: false };
  }
}
