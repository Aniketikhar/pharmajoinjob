import mongoose from "mongoose";

// Define the subscription schema
const subscriptionSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    validate: {
      validator: function (v) {
        // Regular expression for email validation
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
      },
      message: props => `${props.value} is not a valid email!`
    }
  },
  date: {
    type: Date,
    default: Date.now, // Set default to the current date
  }
});

// Create a model from the schema
export default mongoose.models.Subscription || mongoose.model('Subscription', subscriptionSchema);
