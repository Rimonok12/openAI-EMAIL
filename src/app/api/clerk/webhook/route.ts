// api/clerk/webhook/

import { db } from "@/server/db"

export const POST = async (req: Request) => {
    try {
        const { data } = await req.json();
        console.log('Clerk Webhook received', data);

        const emailAddress = data.email_addresses[0].email_address;
        const firstName = data.first_name;
        const lastName = data.last_name;
        const imageUrl = data.image_url;
        const id = data.id;

        await db.user.create({
            data: {
                id: id,
                emailAddress: emailAddress,
                firstName: firstName,
                lastName: lastName,
                imageUrl: imageUrl,
            },
        });

        console.log("User created");
        return new Response("webhook received", { status: 200 });
    } catch (error) {
        console.error("Error processing webhook:", error);
        return new Response("Error processing webhook", { status: 500 });
    }
};