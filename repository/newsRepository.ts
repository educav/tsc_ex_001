import * as mongoose from "mongoose";
import NewsSchema from "../model/newsSchema";

export default mongoose.model("news", NewsSchema);
