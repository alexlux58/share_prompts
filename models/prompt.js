import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  prompt: {
    type: String,
    required: [true, "Prompt is required"],
    minLength: 1,
  },
  tag: {
    type: String,
    required: [true, "Tag is required"],
    minLength: 1,
    maxLength: 25,
  },
});

const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;
