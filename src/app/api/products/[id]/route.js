import { dbconnect } from "@/lib/dbconnect";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  const { id } = await params;

  const collection = dbconnect("products");
  const result = await collection.findOne({ _id: new ObjectId(id) });

  return Response.json({
   result
  });
}
