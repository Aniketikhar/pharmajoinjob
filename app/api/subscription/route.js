import { NextResponse } from "next/server";
import SubscriptionModel from "@/lib/models/SubscriptionModel";
import ConnectDB from "@/lib/config/db";

const LoadDB = async () => {
  await ConnectDB();
};

LoadDB();

export async function GET(request) {
  try {
    const subscriptions = await SubscriptionModel.find({}).sort({ date: -1 });

    if (subscriptions?.length === 0) {
      return NextResponse.json(
        { success: true, msg: "No subscriptions found" },
        { status: 200 }
      );
    }

    return NextResponse.json({
      success: true,
      msg: "Subscriptions found",
      subscriptions,
    });
  } catch (error) {
    console.error("Error fetching subscriptions:", error);
    return NextResponse.json(
      { success: false, msg: "Server error", error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  const body = await request.json();
  const email = body.email;


  if (!email) {
    return NextResponse.json({
      success: false,
      msg: "Email is required",
    });
  }

  try {
    // Check if the email already exists
    const existingSubscription = await SubscriptionModel.findOne({ email });
    if (existingSubscription) {
      return NextResponse.json({
        success: false,
        msg: "Email is already subscribed",
      });
    }

    // Create a new subscription
    const newSubscription = new SubscriptionModel({ email });
    await newSubscription.save();

    return NextResponse.json({
      success: true,
      msg: "Subscription successful",
      subscription: newSubscription,
    });
  } catch (error) {
    console.error("Error saving subscription:", error);
    return NextResponse.json({
      success: false,
      msg: "Server error",
      error: error.message,
    });
  }
}

// export async function PUT(request) {
//   const body = await request.json();
//   const { id, email } = body;

//   if (!id || !email) {
//     return NextResponse.json({
//       success: false,
//       msg: "Subscription ID and email are required for update",
//     });
//   }

//   try {
//     const updatedSubscription = await Subscription.findByIdAndUpdate(
//       id,
//       { email },
//       { new: true, runValidators: true } // Return updated subscription and validate
//     );

//     if (!updatedSubscription) {
//       return NextResponse.json({
//         success: false,
//         msg: "Subscription not found",
//       });
//     }

//     return NextResponse.json({
//       success: true,
//       msg: "Subscription updated successfully",
//       subscription: updatedSubscription,
//     });
//   } catch (error) {
//     console.error("Error updating subscription:", error);
//     return NextResponse.json({
//       success: false,
//       msg: "Server error",
//       error: error.message,
//     });
//   }
// }

export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id"); // Extract ID from query parameters

  if (!id) {
    return NextResponse.json({
      success: false,
      msg: "Subscription ID is required for deletion",
    });
  }

  try {
    const deletedSubscription = await SubscriptionModel.findByIdAndDelete(id);

    if (!deletedSubscription) {
      return NextResponse.json({
        success: false,
        msg: "Subscription not found",
      });
    }

    return NextResponse.json({
      success: true,
      msg: "Subscription deleted successfully",
      subscription: deletedSubscription,
    });
  } catch (error) {
    console.error("Error deleting subscription:", error);
    return NextResponse.json({
      success: false,
      msg: "Server error",
      error: error.message,
    });
  }
}
