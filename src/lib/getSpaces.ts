import { Space } from "@/types/Space";
import spacesData from "@/data/spaces.json";

export async function getSpaces(): Promise<Space[]> {
  try {
    return spacesData as Space[];
  } catch (error) {
    console.error("Error loading spaces:", error);
    return [];
  }
}
