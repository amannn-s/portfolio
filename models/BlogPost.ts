import { Schema, model, models } from "mongoose";
import slugify from "slugify"; // Optional: helps make cleaner slugs

const blogPostSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, unique: true },
    description: String,
    contentMarkdown: String,
    author: {
      name: String,
      role: String,
      avatar: String,
    },
    tags: [String],
    date: String,
    coverImage: String,
    featured: Boolean,
    estimatedReadTime: String,
    seo: {
      title: String,
      description: String,
      keywords: [String],
    },
    codeBlocks: [String],
  },
  {
    timestamps: true,
  }
);

blogPostSchema.pre("save", function (next) {
  if (this.isModified("title") || !this.slug) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  next();
});

export default models.BlogPost || model("BlogPost", blogPostSchema);
