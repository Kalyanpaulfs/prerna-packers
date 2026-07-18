"use server";

import { adminDb } from "@/lib/firebase-admin";

export async function getServices() {
  try {
    const snapshot = await adminDb.collection("services").orderBy("order", "asc").get();
    
    // If empty, return default services for seed
    if (snapshot.empty) {
      return getFallbackServices();
    }

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching services", error);
    return getFallbackServices();
  }
}

export async function addService(data: any) {
  try {
    const newDoc = await adminDb.collection("services").add({
      ...data,
      createdAt: new Date(),
    });
    return { success: true, id: newDoc.id };
  } catch (error) {
    console.error("Error adding service", error);
    return { success: false };
  }
}

export async function updateService(id: string, data: any) {
  try {
    await adminDb.collection("services").doc(id).update(data);
    return { success: true };
  } catch (error) {
    console.error("Error updating service", error);
    return { success: false };
  }
}

export async function deleteService(id: string) {
  try {
    await adminDb.collection("services").doc(id).delete();
    return { success: true };
  } catch (error) {
    console.error("Error deleting service", error);
    return { success: false };
  }
}

function getFallbackServices() {
  return [
    {
      id: "1",
      iconName: "Home",
      title: "Home Relocation",
      description: "Safe and hassle-free household shifting with premium packing materials and careful handling.",
      href: "/services/home-relocation",
      status: "Active",
      order: 1
    },
    {
      id: "2",
      iconName: "Building2",
      title: "Office Relocation",
      description: "Minimize downtime with our efficient corporate and office moving solutions.",
      href: "/services/office-relocation",
      status: "Active",
      order: 2
    },
    {
      id: "3",
      iconName: "Car",
      title: "Vehicle Transport",
      description: "Secure car and bike transportation in specially designed enclosed carriers.",
      href: "/services/vehicle-transport",
      status: "Active",
      order: 3
    },
    {
      id: "4",
      iconName: "PackageCheck",
      title: "Packing & Unpacking",
      description: "Professional packing using multi-layer protection for fragile and valuable items.",
      href: "/services/packing",
      status: "Active",
      order: 4
    },
    {
      id: "5",
      iconName: "Truck",
      title: "Intercity Moving",
      description: "Dedicated transportation for long-distance and interstate relocation.",
      href: "/services/intercity",
      status: "Active",
      order: 5
    },
    {
      id: "6",
      iconName: "Warehouse",
      title: "Warehouse Storage",
      description: "Climate-controlled, secure storage facilities for short and long-term needs.",
      href: "/services/storage",
      status: "Active",
      order: 6
    }
  ];
}
