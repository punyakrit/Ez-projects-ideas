import { model, models, Schema } from "mongoose";

const ideaSchema = new Schema({
  owner: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  features: [
    {
      name: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      use_cases: [
        {
          type: String,
          required: true
        }
      ]
    }
  ],
  business_model: {
    type: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    monetization: [
      {
        type: String,
        required: true
      }
    ]
  },
  competition: [
    {
      company: {
        type: String,
        required: true
      },
      differentiation: {
        type: String,
        required: true
      }
    }
  ]
}, { timestamps: true });

export const UserIdeas = models.UserIdeas || model('UserIdeas', ideaSchema);
