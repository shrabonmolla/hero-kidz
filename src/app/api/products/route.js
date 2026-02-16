import { dbconnect } from "@/lib/dbconnect";
export async function GET() {
  try {
    const productCollection = dbconnect("products");
    const result = await productCollection.find().toArray();
    return Response.json({
      result,
    });
  } catch (error) {
    return Response.json({
      error: error.message,
    });
  }
}
